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
    link: "/",
    image: {
      width: 18,
      height: 18,
      alt: "instagram",
      src: "/icons/socials/instagram.svg",
    },
  },
  {
    link: "/",
    image: {
      width: 16,
      height: 14,
      alt: "x/twitter",
      src: "/icons/socials/x.svg",
    },
  },
  {
    link: "/",
    image: {
      width: 18,
      height: 13,
      alt: "youtube",
      src: "/icons/socials/youtube.svg",
    },
  },
];
