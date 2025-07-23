type Image = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Blog = {
  sys: {
    id: string;
  };
  slug: string;
  title: string;
  content?: string;
  publishDate: Date;
  description: string;
  coverImage: Image;
};

type NewsAndEvent = {
  sys: {
    id: string;
  };
  title: string;
  content?: string;
  author: string;
  publishDate: Date;
  description: string;
  coverImage: Image;
};
