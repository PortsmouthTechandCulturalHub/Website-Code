export const hero: HeroTypes = {
  image: {
    width: 1536,
    height: 2048,
    src: "/images/our-work/our-work-hero.jpg",
    alt: "Our us",
  },
  title: "Our work",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
};

export type GetToKnow = {
  content: SectionParagraph;
};

export const getToKnow: GetToKnow = {
  content: {
    title: "Get to know Portmouth Tech & Culture Hub",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
  },
};

export type Work = {
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

export const work: Work[] = [
  {
    id: 0,
    title: "Digital Skills & Workforce Empowerment",
    desc: "Building Tech Confidence, One Workshop at a Time We believe everyone deserves access to the tools and knowledge that shape the future.",
  },
  {
    id: 1,
    title: "Creative Technology & Cultural Innovation",
    desc: "Merging Creativity with Code to Tell New Stories Portsmouth is rich in culture—and we’re bringing it into the digital age.",
  },
  {
    id: 2,
    title: "Tech for Good & Community Innovation",
    desc: "Technology that Works for People and the Plane At the heart of everything we do is a commitment to social impact.",
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
  
];
