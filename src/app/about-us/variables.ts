export const hero: HeroTypes = {
  image: {
    width: 2048,
    height: 1536,
    src: "/images/about/about-us-hero.jpg",
    alt: "about us",
  },
  title: "About us",
  desc: "PORTSMOUTH TECH & CULTURAL HUB: Cultivating Digital Talent Since 2024",
};

export type AboutTypes = {
  content: {
    title: string;
    content: string;
  };
  qlt: {
    id: string | number;
    icon: Image;
    title: string;
    list: string[];
  }[];
};

export const about: AboutTypes = {
  content: {
    title: "About us",
    content:
      "Portsmouth Tech and Cultural Hub was established following the first edition of Portsmouth tech and cultural summit in September 2024. This event and hub was originally operating under the umbrella of  Pavolera technolgy limited. The decision to create an independent hub was driven by a commitment to better serve the diverse communities in Portsmouth, the Solent and South Coast region, the United Kingdom, and beyond. This hub is dedicated to cultivating tech talent through comprehensive training, mentorship, workshops, conferences, and research, ultimately developing and enhancing the nation's digital skill set.",
  },
  qlt: [
    {
      id: 0,
      icon: {
        width: 59,
        height: 72,
        src: "/icons/vision.svg",
        alt: "vision",
      },
      title: "Vision",
      list: [
        "To unite and empower diverse cultures and businesses within the technology sector and technology-enabled professions in Portsmouth, the Solent and south coast areas, the United Kingdom, and globally.",
        "To drive community and digital innovation by continuously supporting skill acquisition and development in digital and creative technologies in Portsmouth, the Solent and south coast areas, the United Kingdom, and worldwide",
        "To foster a culture of collaboration and empowerment by providing digital inclusion opportunities for those who are digitally excluded.",
        "To build and increase tech tourism in Portsmouth, United Kingdom and spotlight the city as the powerhouse of tech innovation in the world.",
      ],
    },
    {
      id: 1,
      icon: {
        width: 59,
        height: 72,
        src: "/icons/value.svg",
        alt: "values",
      },
      title: "Values",
      list: [
        "Patiently nurturing and pushing each other to be the best version of ourselves through mentoring and development of digital skills.",
        "Teaching and encouraging each other through every process of the way; it doesn’t matter your level of education, we are here to challenge, help and uplift each other into the next stage of our careers",
        "Always trying new ideas and innovation, we may fail but we will rise again and conquer our fears and be the best version of ourselves until we meet and exceed our goals.",
        "Cultivating the can-do spirit!!, tech can be sometimes boring and scary; we know right!!  but don’t worry at Portsmouth tech and cultural hub, it will be all vibe and fun all through the learning process.",
        "Honesty, respect and values are our watchward, this helps us to grow and build lifelong skills beyond the field of technology",
      ],
    },
    // {
    //   id: 2,
    //   icon: {
    //     width: 71,
    //     height: 72,
    //     src: "/icons/history.svg",
    //     alt: "History",
    //   },
    //   title: "History",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    // },
  ],
};

export type Teams = {
  id: string | number;
  image?: Image;
  name: string;
  pos: string;
}[];

export const teams: Teams = [
  {
    id: 0,
    name: "Godswill Ikpeamah",
    pos: "CEO & Founder",
  },
  {
    id: 1,
    name: "James John",
    pos: "Programmer",
  },
  {
    id: 2,
    name: "Ngozi Favour",
    pos: "Programme Manager",
  },
  {
    id: 3,
    name: "James John",
    pos: "Programmer",
  },
  {
    id: 4,
    name: "James John",
    pos: "Programmer",
  },
  {
    id: 5,
    name: "James John",
    pos: "Programmer",
  },
];
