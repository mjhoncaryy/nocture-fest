import { useMemo, useState } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import { artists } from '../../data/festival';
import { Reveal } from '../common/Reveal';

const genres = ['All', 'Electronic', 'Indie Pop', 'Hip-Hop', 'Alternative', 'Electro Pop'];

export function Lineup() {
  const [genre, setGenre] = useState('All');
  const visibleArtists = useMemo(() => genre === 'All' ? artists : artists.filter((artist) => artist.genre === genre), [genre]);

  return (
    <section className="section lineup-section" id="lineup">
      <div className="content-shell">
        <Reveal className="section-heading lineup-heading">
          <p className="eyebrow">Featured lineup</p>
          <h2>Find your frequency.</h2>
          <p>Headliners, after-hours sets, and everything between.</p>
        </Reveal>
        <div className="filter-row" aria-label="Filter artists by genre">
          {genres.map((item) => (
            <button key={item} className={item === genre ? 'filter active' : 'filter'} type="button" onClick={() => setGenre(item)}>{item}</button>
          ))}
        </div>
        <motion.div className="artist-grid" layout>
          {visibleArtists.map((artist, index) => (
            <motion.article className={index === 0 ? 'artist-card artist-card-featured' : 'artist-card'} key={artist.id} layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <div className="artist-image"><img src={artist.image} alt={`${artist.name} performing at a night festival`} /></div>
              <div className="artist-info">
                <div><h3>{artist.name}</h3><p>{artist.genre}</p></div>
                <a href="#schedule" aria-label={`View ${artist.name} in the schedule`}><ArrowUpRight size={22} /></a>
              </div>
              <p className="artist-meta">{artist.day} <span>/</span> {artist.stage} <span>/</span> {artist.time}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
