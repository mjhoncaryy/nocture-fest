import { useEffect, useRef } from 'react';
import { ArrowDownRight } from '@phosphor-icons/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'motion/react';
import { stages } from '../../data/festival';

gsap.registerPlugin(ScrollTrigger);

export function StageStack() {
  const stackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !stackRef.current || !window.matchMedia('(min-width: 900px)').matches) return undefined;
    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.stage-card');
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: cards[cards.length - 1],
          end: 'top top',
          pin: true,
          pinSpacing: false
        });
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.38,
          ease: 'none',
          scrollTrigger: {
            trigger: cards[index + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true
          }
        });
      });
    }, stackRef);
    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section className="stage-section" id="stages">
      <div className="content-shell stage-intro"><p className="eyebrow">Stage experience</p><h2>Pick a signal.<br />Stay for the shift.</h2></div>
      <div className="stage-stack" ref={stackRef}>
        {stages.map((stage, index) => (
          <article className={`stage-card stage-${stage.accent}`} key={stage.name}>
            <div className="stage-image"><img src={stage.image} alt="" /></div>
            <div className="stage-card-inner content-shell">
              <div className="stage-number">0{index + 1}</div>
              <div className="stage-content"><p>{stage.signal}</p><h3>{stage.name}</h3><span>{stage.description}</span></div>
              <ArrowDownRight className="stage-arrow" size={42} weight="light" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
