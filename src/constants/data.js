import {
  card01,
  card02,
  card03,
  card04,
  card05,
  card06,
  offer01,
  offer02,
  offer03,
  offer04,
  offerIcon01,
  offerIcon02,
  offerIcon03,
  offerIcon04,
  premiumIcon,
  premiumPlusIcon,
  sponser01,
  sponser02,
  sponser03,
  sponser04,
  sponser05,
  sponser06,
  sponser07,
  standardIcon,
} from './images';

const sponserData = [
  {
    imgUrl: sponser01,
  },
  {
    imgUrl: sponser02,
  },
  {
    imgUrl: sponser03,
  },
  {
    imgUrl: sponser04,
  },
  {
    imgUrl: sponser05,
  },
  {
    imgUrl: sponser06,
  },
  {
    imgUrl: sponser07,
  },
];

const speakerCardsData = [
  {
    id: 1,
    imageUrl: card01,
  },
  {
    id: 2,
    imageUrl: card02,
  },
  {
    id: 3,
    imageUrl: card03,
  },
  {
    id: 4,
    imageUrl: card04,
  },
  {
    id: 5,
    imageUrl: card05,
  },
  {
    id: 6,
    imageUrl: card06,
  },
];

const ticketData = [
  {
    id: 1,
    icon: standardIcon,
    title: 'Standard',
    price: 850,
    heading: 'Main Conference',
    description:
      'Enjoy 2 days of inspiring talks, breakout sessions exploring challenging topics, great food.',
  },
  {
    id: 2,
    icon: premiumIcon,
    title: 'Premium',
    price: 950,
    heading: 'Conference & Workshop',
    description:
      'Get everything a Conference pass offers & a chance to deep-dive with experts at a Workshops.',
  },
  {
    id: 3,
    icon: premiumPlusIcon,
    title: 'Premium+Ticket',
    price: 1250,
    heading: 'Superpass Conference + 1',
    description:
      'Everything from General Admission and you get full, exclusive access for a year.',
  },
];

const offerData = [
  {
    offerImg: offer01,
    offerIcon: offerIcon01,
    title: 'Unparalleled Knowledge',
    description: `Gain a comprehensive understanding of AI's latest trends, advancements, and challenges. Our diverse sessions will cover cutting-edge topics beyond the conventional, ensuring you stay one step ahead in this rapidly evolving field.`,
  },
  {
    offerImg: offer02,
    offerIcon: offerIcon02,
    title: 'Networking Opportunities',
    description: `Connect with industry leaders, influential professionals, and fellow AI enthusiasts. Forge meaningful connections that can shape your career and open doors to new collaborations and partnerships.
    `,
  },
  {
    offerImg: offer03,
    offerIcon: offerIcon03,
    title: 'Career Development',
    description: `Discover exciting career opportunities in the realm of AI. Whether you're a seasoned professional or just starting your journey, our conference offers valuable insights and guidance to navigate the AI landscape and accelerate your professional growth.`,
  },
  {
    offerImg: offer04,
    offerIcon: offerIcon04,
    title: 'Engaging Discussions',
    description: `Engage in dynamic conversations and thought-provoking discussions with like-minded individuals who share your passion for AI. Explore new perspectives, exchange ideas, and contribute to shaping the future of this transformative technology.`,
  },
];

export { speakerCardsData, ticketData, offerData, sponserData };
