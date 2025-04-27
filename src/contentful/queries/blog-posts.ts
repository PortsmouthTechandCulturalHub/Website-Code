import { Assets, Errors } from "@/contentful/types";

export const BLOG_POSTS_QUERY = `
  query GetBlogPosts($limit: Int) {
    blogPostCollection(limit: $limit) {
      items {
        sys {
          id
        }
        title
        publishDate
        description
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

export type BlogItem = {
  sys: {
    id: string;
  };
  title: string;
  publishDate: Date;
  description: string;
  coverImage: Assets;
};

export type BlogPostQueryResponse = {
  data: {
    blogPostCollection: {
      items: BlogItem[];
    };
  };
  errors: Errors[];
};
