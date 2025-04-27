import { Assets, Errors } from "@/contentful/types";

export const NEWS_AND_EVENT_QUERY = `
  query GetNewsAndEvents($limit: Int) {
    newsEventsCollection(limit: $limit) {
      items {
        sys {
          id
        }
        title
        publishDate
        description
        author
        coverImage {
          title
          fileName
          url
          width
          height
        }
      }
    }
  }
`;

export type NewsAndEventItem = {
  sys: {
    id: string;
  };
  title: string;
  publishDate: Date;
  author: string;
  description: string;
  coverImage: Assets;
};

export type NewsAndEventQueryResponse = {
  data: {
    newsEventsCollection: {
      items: NewsAndEventItem[];
    };
  };
  errors: Errors[];
};
