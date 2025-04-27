import {
  BLOG_POSTS_QUERY,
  BlogItem,
  BlogPostQueryResponse,
} from "@/contentful/queries/blog-posts";
import { query } from "@/contentful/request/query";
import { mapContentfulAsset } from "@/contentful/utils";

const mapBlogs = (blogs: BlogItem[]): Blog[] => {
  return blogs.map((item) => ({
    ...item,
    coverImage: mapContentfulAsset(item.coverImage, item.coverImage.title),
  }));
};

export const getBlogPost = async (
  limit: number = 100,
): Promise<{
  blogs: any;
  errors: AuthError[];
}> => {
  try {
    const response = await query<BlogPostQueryResponse>(BLOG_POSTS_QUERY, {
      variables: {
        limit,
      },
    });

    const blog = response.data.blogPostCollection;

    if (blog?.items) {
      return {
        blogs: mapBlogs(blog.items),
        errors: [],
      };
    } else {
      return {
        blogs: null,
        errors: response.errors.map((error) => ({
          code: error.extensions.contentful.code,
          message: error.message,
        })),
      };
    }
  } catch (error) {
    console.error("Error creating customer:", error);
    return {
      blogs: null,
      errors: [
        {
          code: "INTERNAL_ERROR",
          message: "An unexpected error occurred. Please try again.",
        },
      ],
    };
  }
};
