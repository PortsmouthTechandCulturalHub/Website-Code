import { SWRInfiniteConfiguration, SWRInfiniteKeyLoader } from "swr/infinite";
import useSWRInfinite from "swr/infinite";
import { apiRequest } from "@/lib/api";
import { useCallback } from "react";

interface UseInfiniteAPIOptions extends FetcherOptions, Omit<SWRInfiniteConfiguration, "fetcher"> {
  limit?: number | undefined;
  paginationType?: "cursor" | "page";
  customFetcher?: (url: string, options: FetcherOptions) => Promise<any>;
}

// Base interface for common properties
interface BaseResponse<T> {
  data?: T[];
  stories?: T[];
  total: number;
}

// Cursor-based pagination response
interface CursorPaginatedResponse<T> extends BaseResponse<T> {
  nextCursor: string | null;
}

// Update the page-based pagination response to match Laravel's structure
interface PagePaginatedResponse<T> extends BaseResponse<T> {
  current_page: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  per_page: number;
}

// Type guard to check response type
function isCursorResponse<T>(response: CursorPaginatedResponse<T> | PagePaginatedResponse<T>, paginationType: "cursor" | "page"): response is CursorPaginatedResponse<T> {
  return paginationType === "cursor";
}

export function useInfiniteAPI<T>(endpoint: string, options: UseInfiniteAPIOptions = {}) {
  const { limit = undefined, method, data, customHeaders, useAuthBaseUrl, fetchOptions, useAuth, paginationType = "page", customFetcher, ...swrOptions } = options;

  const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    if (pageIndex === 0) {
      return `${endpoint}${limit ? `?limit=${limit}` : ""}`;
    }
    if (previousPageData) {
      if (paginationType === "cursor") {
        const cursorData = previousPageData as CursorPaginatedResponse<T>;
        if (!cursorData.nextCursor) return null;
        return `${endpoint}?cursor=${cursorData.nextCursor}${limit ? `&limit=${limit}` : ""}`;
      } else {
        const pageData = previousPageData as PagePaginatedResponse<T>;
        if (!pageData.next_page_url) return null;
        const url = new URL(pageData.next_page_url);
        return `${endpoint}${url.search}`;
      }
    }
    return null;
  };

  const fetcherOptions = {
    method,
    data,
    customHeaders,
    useAuthBaseUrl,
    fetchOptions,
    useAuth,
  };

  const {
    data: pages,
    error,
    size,
    setSize,
    isLoading,
    isValidating,
    mutate,
  } = useSWRInfinite<CursorPaginatedResponse<T> | PagePaginatedResponse<T>>(getKey, (url) => (customFetcher || apiRequest)(url, fetcherOptions), {
    revalidateFirstPage: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    ...swrOptions,
  });

  const items = pages ? pages.flatMap((page) => page?.data || page?.stories || []) : [];
  const isEmpty = pages?.[0]?.data?.length === 0 || pages?.[0]?.stories?.length === 0;

  const isReachingEnd =
    isEmpty ||
    (pages &&
      (() => {
        const lastPage = pages[pages.length - 1];
        if (paginationType === "cursor") {
          return !(lastPage as CursorPaginatedResponse<T>)?.nextCursor;
        } else {
          return (lastPage as PagePaginatedResponse<T>)?.current_page >= (lastPage as PagePaginatedResponse<T>)?.last_page;
        }
      })());

  const isLoadingMore = isLoading || (size > 0 && pages && typeof pages[size - 1] === "undefined");
  const total = pages?.[0]?.total ?? 0;

  const currentPage = paginationType === "page" ? (pages?.[pages?.length - 1] as PagePaginatedResponse<T>)?.current_page ?? 1 : size;

  const addItem = (newItem: T) => {
    mutate((pages) => {
      if (!pages) return pages;
      const updatedPages = [...pages];
      const arrayKey = "data" in updatedPages[0] ? "data" : "stories";
      updatedPages[0] = {
        ...updatedPages[0],
        [arrayKey]: [newItem, ...(updatedPages[0]?.[arrayKey] || [])],
        total: updatedPages[0]?.total + 1,
      };
      return updatedPages;
    }, false);
  };

  const revalidateFirstPage = async () => {
    try {
      const firstPageUrl = getKey(0, null);
      const newFirstPage = await (customFetcher || apiRequest)(firstPageUrl as string, fetcherOptions);

      mutate((currentPages) => {
        if (!currentPages) return currentPages;
        return [newFirstPage, ...currentPages.slice(1)];
      }, false);
    } catch (error) {
      console.error("Error revalidating first page:", error);
    }
  };

  const removeItem = (itemToRemove: T, identifierKey: keyof T) => {
    mutate((pages) => {
      if (!pages) return pages;
      const updatedPages = pages.map((page) => {
        const arrayKey = "data" in page ? "data" : "stories";
        return {
          ...page,
          [arrayKey]: (page?.[arrayKey] || []).filter((item) => item[identifierKey] !== itemToRemove[identifierKey]),
          total: page?.total - 1,
        };
      });
      return updatedPages;
    }, false);
  };

  const loadMore = useCallback(() => {
    if (!isReachingEnd && !isLoadingMore) setSize(size + 1);
  }, [isReachingEnd, isLoadingMore, setSize, size]);

  return {
    items,
    error,
    isLoading,
    isLoadingMore,
    isReachingEnd,
    isEmpty,
    total,
    size,
    setSize,
    mutate,
    isValidating,
    currentPage,
    addItem,
    removeItem,
    revalidateFirstPage,
    loadMore,
    ...(paginationType === "cursor" &&
      pages?.[pages.length - 1] && {
        nextCursor: (pages[pages.length - 1] as CursorPaginatedResponse<T>)?.nextCursor,
      }),
    ...(paginationType === "page" &&
      pages?.[pages.length - 1] && {
        hasNextPage: (pages[pages.length - 1] as PagePaginatedResponse<T>)?.current_page < (pages[pages.length - 1] as PagePaginatedResponse<T>)?.last_page,
        lastPage: (pages[pages.length - 1] as PagePaginatedResponse<T>)?.last_page,
        nextPageUrl: (pages[pages.length - 1] as PagePaginatedResponse<T>)?.next_page_url,
        prevPageUrl: (pages[pages.length - 1] as PagePaginatedResponse<T>)?.prev_page_url,
        perPage: (pages[pages.length - 1] as PagePaginatedResponse<T>)?.per_page,
      }),
  };
}
