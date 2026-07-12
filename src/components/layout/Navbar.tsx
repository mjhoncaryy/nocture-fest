import { useState } from 'react';
import { ArrowUpRight, List, Ticket, X } from '@phosphor-icons/react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { navItems } from '../../data/festival';

type NavbarProps = {
  onAccount: () => void;
  onTicket: () => void;
};

export function Navbar({ onAccount, onTicket }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar content-shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" onClick={close} aria-label="Nocturne Fest home">
          NOCTURNE<span>FEST</span>
        </a>
        <div className="desktop-nav">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div className="nav-actions">
          <button className="text-button desktop-account" type="button" onClick={onAccount}>Account</button>
          <button className="nav-ticket desktop-ticket" type="button" onClick={onTicket}>
            <Ticket size={17} weight="fill" /> Tickets
          </button>
          <button className="icon-button menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle menu">
            {open ? <X size={22} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div className="content-shell mobile-menu-inner">
              {navItems.map((item) => <a key={item.href} href={item.href} onClick={close}>{item.label}<ArrowUpRight size={18} /></a>)}
              <button type="button" onClick={() => { close(); onAccount(); }}>Account</button>
              <button className="button button-primary" type="button" onClick={() => { close(); onTicket(); }}>Get tickets</button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
