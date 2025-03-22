export const hero: HeroTypes = {
  image: {
    width: 2048,
    height: 1536,
    src: "/images/about/about-us-hero.jpg",
    alt: "about us",
  },
  title: "About us",
  desc: "PORTMOUNT TECH & CULTURAL HUB is redefining agriculture with tech",
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
    desc: string;
  }[];
};

export const about: AboutTypes = {
  content: {
    title: "About us",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
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
      desc: " To unite and empower diverse cultures and businesses within the technology sector and technology-enabled professions in Portsmouth, the Solent and south coast areas, the United Kingdom, and globally.",
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
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 2,
      icon: {
        width: 71,
        height: 72,
        src: "/icons/history.svg",
        alt: "History",
      },
      title: "History",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
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
