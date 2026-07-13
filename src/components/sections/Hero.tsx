import { ArrowRight, Play } from '@phosphor-icons/react';
import { lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const LiquidEther = lazy(() => import('../LiquidEther'));

type HeroProps = {
  onTicket: () => void;
};

export function Hero({ onTicket }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const canRenderLiquidEther = !reduceMotion && typeof WebGLRenderingContext !== 'undefined';

  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true"><img src="/images/hero.png" alt="" /></div>
      <div className="hero-ether" aria-hidden="true">
        {canRenderLiquidEther ? <Suspense fallback={null}><LiquidEther
          colors={['#32105f', '#8b2fd6', '#ec4899', '#22d3ee']}
          cursorSize={82}
          mouseForce={16}
          isViscous
          viscous={18}
          resolution={0.38}
          autoDemo
          autoSpeed={0.3}
          autoIntensity={1.5}
          autoResumeDelay={1500}
          autoRampDuration={0.7}
        /></Suspense> : null}
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="content-shell hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow hero-eyebrow">July 18-20, 2026 / Jakarta</p>
          <h1><span className="hero-title-solid">NOCTURNE</span><span className="hero-title-ether">FEST</span></h1>
          <p className="hero-subtitle">Three nights of sound, light, and city energy.</p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={onTicket}>Get tickets <ArrowRight size={18} weight="bold" /></button>
            <a className="button button-secondary" href="#lineup"><Play size={16} weight="fill" /> View lineup</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
