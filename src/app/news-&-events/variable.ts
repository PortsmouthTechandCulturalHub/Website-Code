export type News = {
  id: string | number;
  imageUrl?: string;
  author: string;
  date: Date | string;
  title: string;
  previewText: string;
};

export const news: News[] = [
  {
    id: 0,
    author: "Portmouth",
    date: "2025-03-24",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    previewText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    id: 1,
    author: "Portmouth",
    date: new Date(2014, 6, 2),
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    previewText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    id: 2,
    author: "Portmouth",
    date: new Date(2014, 6, 2),
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    previewText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    id: 3,
    author: "Portmouth",
    date: new Date(2014, 6, 2),
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    previewText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    id: 4,
    author: "Portmouth",
    date: new Date(2014, 6, 2),
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    previewText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    id: 5,
    author: "Portmouth",
    date: new Date(2014, 6, 2),
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    previewText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
];
