export type HeroTypes = {
  salu: string;
  title: string;
  desc: string;
  image: Image;
};

export const hero: HeroTypes = {
  image: {
    width: 4096,
    height: 3072,
    src: "/images/home/home-hero.jpg",
    alt: "Home",
  },
  salu: "Welcome",
  title: "Portsmouth Tech & Cultural Hub",
  desc: "Cultivating tech talent through comprehensive training, mentorship, workshops, conferences, and research, ultimately developing and enhancing the nation's digital skill set.",
};

export type Values = {
  desc: string;
  values: {
    icon: Image;
    id: string | number;
    title: string;
    desc: string;
  }[];
  videoThumbnail: string;
};

export const values: Values = {
  desc: "Portsmouth Tech and Cultural Hub CIC is a not-for-profit organisation with registeration number 16408734 which supports access to digital and creative technology, digital skills acquistion and mentorship in Portsmouth and beyond. Registered in England and Wales",
  values: [
    {
      id: 0,
      icon: {
        width: 24,
        height: 24,
        src: "/icons/health-increase.svg",
        alt: "icon",
      },
      title: "Mentorship & Growth",
      desc: "Patiently nurturing and pushing each other to be the best version of ourselves through mentoring and development of digital skills.",
    },
    {
      id: 1,
      icon: {
        width: 24,
        height: 24,
        src: "/icons/health-increase.svg",
        alt: "icon",
      },
      title: "Inclusive Support",
      desc: "Teaching and encouraging each other through every process of the way; it doesn’t matter your level of education, we are here to challenge, help and uplift each other into the next stage of our careers.",
    },
    {
      id: 5,
      icon: {
        width: 24,
        height: 24,
        src: "/icons/health-increase.svg",
        alt: "icon",
      },
      title: "Core Values: Honesty, Respect & Integrity",
      desc: "Honesty, respect and values are our watchword. This helps us to grow and build lifelong skills beyond the field of technology.",
    },
    {
      id: 3,
      icon: {
        width: 24,
        height: 24,
        src: "/icons/health-increase.svg",
        alt: "icon",
      },
      title: "Innovation & Resilience",
      desc: "Always trying new ideas and innovation, we may fail but we will rise again and conquer our fears and be the best version of ourselves until we meet and exceed our goals.",
    },
    {
      id: 4,
      icon: {
        width: 24,
        height: 24,
        src: "/icons/health-increase.svg",
        alt: "icon",
      },
      title: "Fun & Positive Learning Environment",
      desc: "Cultivating the can-do spirit!! Tech can be sometimes boring and scary—we know right?! But don’t worry, at Portsmouth Tech and Cultural Hub, it will be all vibe and fun all through the learning process.",
    },
  ],
  videoThumbnail: "/images/home/video-thumbnail.jpg",
};

export type Stat = {
  id: string | number;
  image: Image;
  title: string;
  desc: string;
};

export const stat: Stat[] = [
  {
    id: 0,
    image: {
      src: "/icons/group-fill.svg",
      width: 85,
      height: 85,
      alt: "group-fill",
    },
    title: "1885+",
    desc: "Our programs have equipped over 1885 individuals with valuable skills and knowledge, enabling them to build more sustainable livelihoods.",
  },
  {
    id: 1,
    image: {
      src: "/icons/24-hour-fill.svg",
      width: 86,
      height: 85,
      alt: "24-hour-fill",
    },
    title: "2500+",
    desc: "We have fostered long term relationships with over 2500 community members who have benefited from our sustained support and engagements over the last 2 years.",
  },
  {
    id: 2,
    image: {
      src: "/icons/basketball-fill.svg",
      width: 86,
      height: 85,
      alt: "basketball-fill",
    },
    title: "507+",
    desc: "Through our various programs, we directly impact the lives of over 507 community members annually, providing vital resources and opportunities for growth.",
  },
  {
    id: 3,
    image: {
      src: "/icons/person-fill.svg",
      width: 54,
      height: 85,
      alt: "person-fill",
    },
    title: "186+",
    desc: "We are grateful for the support of our partners who believe in our mission and help us make a tangible difference in the lives of those we serve.",
  },
];

export type Blog = {
  id: string | number;
  image?: {
    width: number;
    height: number;
    alt: string;
    src: string;
  };
  link?: string;
  title: string;
  desc: string;
};

export const blog: Blog[] = [
  {
    id: 0,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum has been the industry' standard dummy ",
  },
  {
    id: 1,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum has been the industry' standard dummy ",
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum has been the industry' standard dummy ",
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum has been the industry' standard dummy ",
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum has been the industry' standard dummy ",
  },
  {
    id: 5,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum has been the industry' standard dummy ",
  },
];

export type Vision = {
  id: string | number;
  title: string;
  desc: string;
};

export const vision: Vision[] = [
  {
    id: 0,
    title: "Unity",
    desc: "To unite and empower diverse cultures and businesses within the technology sector and technology-enabled professions in Portsmouth, the Solent and south coast areas, the United Kingdom, and globally",
  },
  {
    id: 1,
    title: "Innovation",
    desc: "To drive community and digital innovation by continuously supporting skill acquisition and development in digital and creative technologies in Portsmouth, the Solent and south coast areas, the United Kingdom, and worldwide.",
  },
  {
    id: 2,
    title: "Inclusion",
    desc: "To foster a culture of collaboration and empowerment by providing digital inclusion opportunities for those who are digitally excluded.",
  },
  {
    id: 3,
    title: "Spotlight",
    desc: "To build and increase tech tourism in Portsmouth, United Kingdom, and spotlight the city as the powerhouse of tech innovation in the world.",
  },
];
