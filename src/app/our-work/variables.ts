export const hero: HeroTypes = {
  image: {
    width: 1536,
    height: 2048,
    src: "/images/our-work/our-work-hero.jpg",
    alt: "Our us",
  },
  title: "Our work",
  desc: "Empowering Portsmouth and beyond with digital skills, creative tech, and community innovation",
};

export type GetToKnow = {
  content: SectionParagraph;
};

export const getToKnow: GetToKnow = {
  content: {
    title: "Get to know Portmouth Tech & Culture Hub",
    content:
      "Portsmouth Tech & Cultural Hub delivers inclusive, hands-on training in essential digital skills—from coding and cybersecurity to AI literacy—through workshops, bootcamps, and mentoring programs that boost confidence and career prospects. It harnesses creative technologies like AR, VR, and interactive media to merge Portsmouth’s rich cultural heritage with digital innovation, empowering artists, storytellers, and organizations to explore new forms of expression. Through hackathons, civic-tech projects, and collaborative problem-solving, the hub leverages technology as a force for good to tackle local challenges and support underrepresented communities. By uniting digital education, creative experimentation, and social-impact initiatives, the hub fosters a vibrant ecosystem that cultivates talent, drives equity, and nurtures innovation across the region.",
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
  {
    id: 6,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum has been the industry' standard dummy ",
  },
  {
    id: 7,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum has been the industry' standard dummy ",
  },
];
