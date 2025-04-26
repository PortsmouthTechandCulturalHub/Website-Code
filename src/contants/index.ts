type Social = {
  link: string;
  image: {
    width: number;
    height: number;
    alt: string;
    src: string;
  };
};

export const SOCIALS: Social[] = [
  {
    link: "https://www.instagram.com/portsmouthtch/",
    image: {
      width: 18,
      height: 18,
      alt: "instagram",
      src: "/icons/socials/instagram.svg",
    },
  },
  {
    link: "https://www.linkedin.com/company/portsmouth-tech-and-cultural-hub",
    image: {
      width: 16,
      height: 16,
      alt: "linkedin",
      src: "/icons/socials/linkedin.svg",
    },
  },
];
