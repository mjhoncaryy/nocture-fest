import { lazy, Suspense, useState } from 'react';
import { CheckCircle, LockKey, Ticket as TicketIcon } from '@phosphor-icons/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Modal } from './components/common/Modal';
import { Hero } from './components/sections/Hero';
import { Lineup } from './components/sections/Lineup';
import { Schedule } from './components/sections/Schedule';
import { Tickets } from './components/sections/Tickets';
import { Gallery, InfoAndFaq, Stats, Venue } from './components/sections/Experience';
import { tickets, type Ticket } from './data/festival';
import { useLenis } from './hooks/useLenis';

const StageStack = lazy(async () => {
  const module = await import('./components/sections/StageStack');
  return { default: module.StageStack };
});

export default function App() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [accountOpen, setAccountOpen] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [accountComplete, setAccountComplete] = useState(false);
  useLenis();

  const openTicket = (ticket = tickets[1]) => { setCheckoutComplete(false); setSelectedTicket(ticket); };
  const closeTicket = () => setSelectedTicket(null);

  return (
    <>
      <Navbar onAccount={() => { setAccountComplete(false); setAccountOpen(true); }} onTicket={() => openTicket()} />
      <main>
        <Hero onTicket={() => openTicket()} />
        <Stats />
        <Lineup />
        <Suspense fallback={<section className="stage-section stage-loading" aria-label="Loading stage experience" />}>
          <StageStack />
        </Suspense>
        <Schedule />
        <Tickets onSelect={openTicket} />
        <Venue />
        <Gallery />
        <InfoAndFaq />
      </main>
      <Footer />

      <Modal open={selectedTicket !== null} title={checkoutComplete ? 'Pass reserved' : 'Reserve your pass'} onClose={closeTicket}>
        {checkoutComplete ? <div className="modal-success"><CheckCircle size={44} weight="fill" /><h3>Your {selectedTicket?.name} is selected.</h3><p>This is a simulated checkout. No payment or reservation was created.</p><button className="button button-primary" type="button" onClick={closeTicket}>Back to festival</button></div> : <form className="checkout-form" onSubmit={(event) => { event.preventDefault(); setCheckoutComplete(true); }}><div className="checkout-ticket"><TicketIcon size={22} weight="fill" /><div><strong>{selectedTicket?.name}</strong><span>Frontend-only ticket simulation</span></div><b>${selectedTicket?.price}</b></div><label>Name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Email<input required name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label><button className="button button-primary" type="submit">Reserve pass</button><p className="form-note"><LockKey size={14} /> No payment details are collected.</p></form>}
      </Modal>

      <Modal open={accountOpen} title={accountComplete ? 'You are on the list' : 'Festival account'} onClose={() => setAccountOpen(false)}>
        {accountComplete ? <div className="modal-success"><CheckCircle size={44} weight="fill" /><h3>Registration simulated.</h3><p>This frontend demo does not create a real account.</p><button className="button button-primary" type="button" onClick={() => setAccountOpen(false)}>Continue</button></div> : <form className="checkout-form" onSubmit={(event) => { event.preventDefault(); setAccountComplete(true); }}><p className="modal-intro">Save your simulated ticket choice and festival updates.</p><label>Email<input required name="account-email" type="email" autoComplete="email" placeholder="you@example.com" /></label><button className="button button-primary" type="submit">Join the list</button></form>}
      </Modal>
    </>
  );
}
