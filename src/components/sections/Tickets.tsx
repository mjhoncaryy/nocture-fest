import { Check, Ticket } from '@phosphor-icons/react';
import { tickets, type Ticket as TicketType } from '../../data/festival';
import { Reveal } from '../common/Reveal';

type TicketsProps = { onSelect: (ticket: TicketType) => void };

export function Tickets({ onSelect }: TicketsProps) {
  return (
    <section className="section ticket-section" id="tickets">
      <div className="content-shell">
        <Reveal className="section-heading ticket-heading"><p className="eyebrow">Make it official</p><h2>Choose your way in.</h2><p>Every pass includes access to the music, food district, and night-market installations.</p></Reveal>
        <div className="ticket-grid">
          {tickets.map((ticket) => (
            <article className={ticket.highlighted ? 'ticket-card featured-ticket' : 'ticket-card'} key={ticket.id}>
              {ticket.highlighted ? <span className="ticket-badge">Most wanted</span> : null}
              <div className="ticket-cutout ticket-cutout-left" /><div className="ticket-cutout ticket-cutout-right" />
              <p className="ticket-name">{ticket.name}</p>
              <p className="ticket-price"><sup>$</sup>{ticket.price}</p>
              <p className="ticket-label">{ticket.label}</p>
              <ul>{ticket.benefits.map((benefit) => <li key={benefit}><Check size={16} weight="bold" />{benefit}</li>)}</ul>
              <button className={ticket.highlighted ? 'button button-primary ticket-select' : 'button button-secondary ticket-select'} type="button" onClick={() => onSelect(ticket)}><Ticket size={18} weight="fill" /> Select pass</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
