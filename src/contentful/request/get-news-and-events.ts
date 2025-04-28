import {
  NEWS_AND_EVENT_QUERY,
  NewsAndEventItem,
  NewsAndEventQueryResponse,
} from "@/contentful/queries/news-and-events";
import { query } from "@/contentful/request/query";
import { mapContentfulAsset } from "@/contentful/utils";

const mapNewsAndEvent = (newsAndEvent: NewsAndEventItem[]): Blog[] => {
  return newsAndEvent.map((item) => ({
    ...item,
    coverImage: mapContentfulAsset(item.coverImage, item.coverImage.title),
  }));
};

export const getNewsAndEvents = async (
  limit: number = 100,
): Promise<{
  newsAndEvents: any;
  errors: AuthError[];
}> => {
  try {
    const response = await query<NewsAndEventQueryResponse>(
      NEWS_AND_EVENT_QUERY,
      {
        variables: {
          limit,
        },
      },
    );

    const blog = response.data.newsEventsCollection;

    if (blog?.items) {
      return {
        newsAndEvents: mapNewsAndEvent(blog.items),
        errors: [],
      };
    } else {
      return {
        newsAndEvents: null,
        errors: response.errors.map((error) => ({
          code: error.extensions.contentful.code,
          message: error.message,
        })),
      };
    }
  } catch (error) {
    console.error("Error creating customer:", error);
    return {
      newsAndEvents: null,
      errors: [
        {
          code: "INTERNAL_ERROR",
          message: "An unexpected error occurred. Please try again.",
        },
      ],
    };
  }
};
