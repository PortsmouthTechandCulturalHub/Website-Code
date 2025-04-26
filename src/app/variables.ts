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
  salu: "Welcome to",
  title: "Portsmouth Tech & Cultural Hub",
  desc: "Empowering the next generation of farmers and agricultural leaders through innovative tech solutions, driving sustainable growth and prosperity.",
};

export type Goal = {
  desc: string;
  goals: {
    icon: Image;
    id: string | number;
    title: string;
    desc: string;
  }[];
  videoThumbnail: string;
};

export const goal: Goal = {
  desc: "Digital agriculture initiatives empowering underserved youth to cultivate innovation, develop valuable skills, and grow their potential, with a focus on communities impacted by socio-economic challenges.",
  goals: [
    {
      id: 0,
      icon: {
        width: 24,
        height: 24,
        src: "/icons/health-increase.svg",
        alt: "icon",
      },
      title: "Increase Food Security",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 1,
      icon: {
        width: 24,
        height: 24,
        src: "/icons/health-increase.svg",
        alt: "icon",
      },
      title: "Increase Food Security",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      icon: {
        width: 24,
        height: 24,
        src: "/icons/health-increase.svg",
        alt: "icon",
      },
      title: "Increase Food Security",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
    title: "2067+",
    desc: "We've fostered long-term relationships with over 2067 community members who have benefited from our sustained support and engagement over the years.",
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

export type Testimonial = {
  id: string | number;
  title: string;
  desc: string;
};

export const testimonial: Testimonial[] = [
  {
    id: 0,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum has been the industry' standard dummyLorem Ipsum has been the industry' standard dummy",
  },
  {
    id: 1,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum has been the industry' standard dummyLorem Ipsum has been the industry' standard dummy",
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum has been the industry' standard dummyLorem Ipsum has been the industry' standard dummy",
  },
];
