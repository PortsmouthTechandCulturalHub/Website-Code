// src/types/app.d.ts

export type Image = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Blog = {
  sys: {
    id: string;
  };
  title: string;
  content?: string;
  publishDate: Date;
  description: string;
  coverImage: Image;
};

export type NewsAndEvent = {
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
