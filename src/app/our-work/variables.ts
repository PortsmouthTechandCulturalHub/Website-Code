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
    desc: "Building Tech Confidence, One Workshop at a Time We believe everyone deserves access to the tools and knowledge that shape the future. That’s why we offer inclusive training in essential digital skills—from coding and cybersecurity to AI literacy and data storytelling. Whether you're a young person exploring tech for the first time, a jobseeker looking to upskill, or a community group wanting to digitize your impact, we provide practical, hands-on learning opportunities that open doors. Our workshops, bootcamps, and mentoring programs are designed to boost confidence, unlock potential, and support meaningful career progression—locally and globally.",
  },
  {
    id: 1,
    title: "Creative Technology & Cultural Innovation",
    desc: "Merging Creativity with Code to Tell New Stories Portsmouth is rich in culture—and we’re bringing it into the digital age. Through creative tech, we empower artists, storytellers, and cultural organizations to experiment with digital tools like AR, VR, interactive media, and AI-generated art. We run labs and events that blend tradition with innovation, allowing communities to explore new forms of expression. From immersive heritage experiences to indie game development and music-tech mashups, we celebrate the diverse voices shaping our city’s cultural and creative future.",
  },
  {
    id: 2,
    title: "Tech for Good & Community Innovation",
    desc: "Technology that Works for People and the Plane At the heart of everything we do is a commitment to social impact. We use technology as a force for good—solving local challenges, empowering underrepresented voices, and promoting equity in the digital world. Through hackathons, civic tech projects, and collaborative problem-solving, we work alongside residents, local authorities, educators, and nonprofits to co-create digital solutions that make everyday life better. Whether it’s building a community platform, supporting grassroots entrepreneurs, or helping older adults navigate the digital world, we’re here to make tech more human—and more helpful. ",
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
