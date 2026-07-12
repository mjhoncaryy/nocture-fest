import { useState } from 'react';
import { CalendarPlus } from '@phosphor-icons/react';
import { schedule } from '../../data/festival';
import { Reveal } from '../common/Reveal';

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const day = schedule[activeDay];

  return (
    <section className="section schedule-section" id="schedule">
      <div className="content-shell schedule-layout">
        <Reveal className="section-heading"><h2>The night, in order.</h2><p>Move between five stages without missing the moments that matter.</p></Reveal>
        <div className="schedule-panel">
          <div className="schedule-tabs" role="tablist" aria-label="Festival schedule days">
            {schedule.map((item, index) => <button key={item.day} type="button" role="tab" aria-selected={index === activeDay} className={index === activeDay ? 'schedule-tab active' : 'schedule-tab'} onClick={() => setActiveDay(index)}><span>{item.day}</span>{item.date}</button>)}
          </div>
          <div className="schedule-events" role="tabpanel">
            {day.events.map((event) => (
              <article className="schedule-event" key={`${day.day}-${event.time}`}>
                <time>{event.time}</time>
                <div><h3>{event.artist}</h3><p>{event.genre}</p></div>
                <span>{event.stage}</span>
                <button className="icon-button" type="button" aria-label={`Add ${event.artist} to calendar`}><CalendarPlus size={20} /></button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
