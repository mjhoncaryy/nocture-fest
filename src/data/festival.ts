export type Artist = {
  id: string;
  name: string;
  genre: string;
  day: string;
  stage: string;
  time: string;
  image: string;
};

export type Ticket = {
  id: string;
  name: string;
  price: number;
  label: string;
  benefits: string[];
  highlighted?: boolean;
};

export type Stage = {
  name: string;
  signal: string;
  description: string;
  accent: 'violet' | 'cyan' | 'lime' | 'pink';
  image: string;
};

export const navItems = [
  { label: 'Lineup', href: '#lineup' },
  { label: 'Stages', href: '#stages' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'Venue', href: '#venue' }
];

export const artists: Artist[] = [
  { id: 'nova-ray', name: 'Nova Ray', genre: 'Electro Pop', day: 'Friday', stage: 'Main Stage', time: '22:00', image: '/images/lineup.png' },
  { id: 'monoclub', name: 'Monoclub', genre: 'Electronic', day: 'Friday', stage: 'Neon Dome', time: '19:30', image: '/images/hero.png' },
  { id: 'luna-vex', name: 'Luna Vex', genre: 'Indie Pop', day: 'Friday', stage: 'Garden Pulse', time: '17:00', image: '/images/lineup.png' },
  { id: 'kairo', name: 'Kairo', genre: 'Hip-Hop', day: 'Saturday', stage: 'Bass Tunnel', time: '21:15', image: '/images/hero.png' },
  { id: 'mirae', name: 'Mirae', genre: 'Alternative', day: 'Saturday', stage: 'Garden Pulse', time: '18:45', image: '/images/venue.png' },
  { id: 'sola-arc', name: 'Sola Arc', genre: 'Electronic', day: 'Sunday', stage: 'Sunrise Deck', time: '04:30', image: '/images/venue.png' }
];

export const stages: Stage[] = [
  { name: 'Main Stage', signal: 'Headline pressure', description: 'A towering LED field for the sets everyone will talk about before sunrise.', accent: 'violet', image: '/images/hero.png' },
  { name: 'Neon Dome', signal: 'Low-light frequency', description: 'A close, immersive room for deep selectors and electronic live acts.', accent: 'cyan', image: '/images/lineup.png' },
  { name: 'Garden Pulse', signal: 'Open-air drift', description: 'Indie, alternative, and softer tempo under a canopy of moving light.', accent: 'lime', image: '/images/venue.png' },
  { name: 'Bass Tunnel', signal: 'Heavy signal', description: 'A dark passage built for rap, breaks, and bass-forward sets.', accent: 'pink', image: '/images/lineup.png' }
];

export const schedule = [
  {
    day: 'Day 1',
    date: 'July 18',
    events: [
      { time: '17:00', artist: 'Luna Vex', stage: 'Garden Pulse', genre: 'Indie Pop' },
      { time: '19:30', artist: 'Monoclub', stage: 'Neon Dome', genre: 'Electronic' },
      { time: '22:00', artist: 'Nova Ray', stage: 'Main Stage', genre: 'Electro Pop' }
    ]
  },
  {
    day: 'Day 2',
    date: 'July 19',
    events: [
      { time: '16:30', artist: 'Mirae', stage: 'Garden Pulse', genre: 'Alternative' },
      { time: '20:00', artist: 'Kairo', stage: 'Bass Tunnel', genre: 'Hip-Hop' },
      { time: '23:15', artist: 'Astra Unit', stage: 'Main Stage', genre: 'Electronic' }
    ]
  },
  {
    day: 'Day 3',
    date: 'July 20',
    events: [
      { time: '18:15', artist: 'Tidal Club', stage: 'Neon Dome', genre: 'Electronic' },
      { time: '21:30', artist: 'Yuna Vale', stage: 'Main Stage', genre: 'Pop' },
      { time: '04:30', artist: 'Sola Arc', stage: 'Sunrise Deck', genre: 'Ambient' }
    ]
  }
];

export const tickets: Ticket[] = [
  { id: 'general', name: 'General Pass', price: 49, label: 'One night. All public stages.', benefits: ['One-day entry', 'Food district access', 'All public areas'] },
  { id: 'weekend', name: 'Weekend Pass', price: 129, label: 'The full three-night signal.', benefits: ['Three-day entry', 'All stages', 'Priority gate'], highlighted: true },
  { id: 'vip', name: 'VIP Pass', price: 249, label: 'A quieter route through the night.', benefits: ['VIP lounge', 'Fast lane entry', 'Raised viewing deck'] }
];

export const faqs = [
  { question: 'Is ticket purchase real?', answer: 'No. This is a frontend demonstration. Selection and checkout are visual interactions only.' },
  { question: 'Where is the festival?', answer: 'The festival is set at Ancol, Jakarta. The venue section shows a stylized orientation map.' },
  { question: 'Can I bring food?', answer: 'Outside food and drinks are not allowed. A curated food district is open throughout the event.' },
  { question: 'Is the site accessible?', answer: 'Yes. The layout supports keyboard navigation, clear focus states, and reduced motion preferences.' }
];

export const galleryImages = [
  { src: '/images/hero.png', alt: 'Crowd facing a magenta-lit festival stage' },
  { src: '/images/lineup.png', alt: 'Performer surrounded by violet concert lights' },
  { src: '/images/venue.png', alt: 'Festival grounds illuminated at night' }
];
