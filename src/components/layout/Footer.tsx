import { ArrowUpRight, InstagramLogo, TiktokLogo, YoutubeLogo } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="content-shell footer-grid">
        <div>
          <p className="footer-mark">NOCTURNE<br />FEST</p>
          <p className="footer-copy">Three nights of sound, light, and city energy in Jakarta.</p>
        </div>
        <div className="footer-links">
          <a href="#lineup">Lineup <ArrowUpRight size={16} /></a>
          <a href="#tickets">Tickets <ArrowUpRight size={16} /></a>
          <a href="#venue">Venue <ArrowUpRight size={16} /></a>
        </div>
        <div className="socials" aria-label="Social links">
          <a href="#top" aria-label="Instagram"><InstagramLogo size={21} /></a>
          <a href="#top" aria-label="TikTok"><TiktokLogo size={21} /></a>
          <a href="#top" aria-label="YouTube"><YoutubeLogo size={21} /></a>
        </div>
      </div>
      <div className="content-shell footer-bottom"><span>Jakarta, Indonesia</span><span>Frontend festival experience</span></div>
    </footer>
  );
}
