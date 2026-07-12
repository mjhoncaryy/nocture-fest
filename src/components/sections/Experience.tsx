import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { CaretLeft, CaretRight, FirstAidKit, Hamburger, MapPin, Plus, Train, Wheelchair } from '@phosphor-icons/react';
import { faqs, galleryImages } from '../../data/festival';
import { Reveal } from '../common/Reveal';

export function Stats() {
  const stats = [['3', 'Nights'], ['48+', 'Artists'], ['5', 'Stages'], ['30K+', 'People']];
  return <section className="stats-strip"><div className="content-shell stats-grid">{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>;
}

export function Venue() {
  return (
    <section className="section venue-section" id="venue">
      <div className="content-shell venue-grid">
        <Reveal className="venue-copy"><p className="eyebrow">Meet at Ancol</p><h2>The city after dark.</h2><p>Arrive early, move freely, and find each zone without leaving the atmosphere behind.</p><a className="inline-link" href="#faq">Read festival info <CaretRight size={16} /></a></Reveal>
        <Reveal className="map-card" delay={0.12}>
          <img src="/images/venue.png" alt="Illustrated night-time view of the Nocturne Fest venue" />
          <div className="map-copy"><MapPin size={20} weight="fill" /><div><strong>Ancol, Jakarta</strong><span>Gates open at 16:00</span></div></div>
        </Reveal>
      </div>
    </section>
  );
}

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });
  return (
    <section className="section gallery-section">
      <div className="content-shell gallery-head"><h2>Hold on to the light.</h2><div><button className="icon-button" type="button" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous gallery image"><CaretLeft size={22} /></button><button className="icon-button" type="button" onClick={() => emblaApi?.scrollNext()} aria-label="Next gallery image"><CaretRight size={22} /></button></div></div>
      <div className="gallery-viewport" ref={emblaRef}><div className="gallery-track">{galleryImages.map((image) => <figure className="gallery-slide" key={image.src}><img src={image.src} alt={image.alt} /></figure>)}</div></div>
    </section>
  );
}

export function InfoAndFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const info = [[Train, 'Getting here', 'Take the commuter line or use the dedicated shuttle drop-off.'], [Hamburger, 'Food district', 'Independent kitchens and late-night coffee across the north lawn.'], [FirstAidKit, 'Care and safety', 'Medical teams and water points are available at every stage.'], [Wheelchair, 'Access', 'Step-free routes and accessible viewing areas are marked on site.']];
  return (
    <section className="section info-section" id="faq">
      <div className="content-shell"><div className="info-grid">{info.map(([Icon, title, text]) => { const Symbol = Icon as typeof Train; return <Reveal className="info-card" key={title as string}><Symbol size={27} weight="light" /><h3>{title as string}</h3><p>{text as string}</p></Reveal>; })}</div>
        <div className="faq-layout"><div><p className="eyebrow">Need to know</p><h2>Before the gates open.</h2></div><div className="faq-list">{faqs.map((faq, index) => <article className="faq-item" key={faq.question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{faq.question}<Plus size={20} className={openFaq === index ? 'faq-plus open' : 'faq-plus'} /></button>{openFaq === index ? <p>{faq.answer}</p> : null}</article>)}</div></div>
      </div>
    </section>
  );
}
