/* eslint-disable */
// @ts-nocheck

import useSWR, { SWRConfiguration, KeyedMutator, Key } from "swr";
import { apiRequest } from "@/lib/api";

interface UseAPIOptions extends FetcherOptions, SWRConfiguration {}

type ArrayResponse<T> = T extends any[] ? T : T[];

export function useAPI<T>(endpoint: Key, options: UseAPIOptions = {}) {
  const {
    method,
    data,
    customHeaders,
    useAuthBaseUrl,
    fetchOptions,
    useAuth,
    ...swrOptions
  } = options;

  const fetcherOptions = {
    method,
    data,
    customHeaders,
    useAuthBaseUrl,
    fetchOptions,
    useAuth,
  };

  const {
    data: response,
    error,
    mutate,
    isLoading,
  } = useSWR<T>(endpoint, (endpoint: string) => apiRequest(endpoint, fetcherOptions), {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    ...swrOptions,
  });

  const addItem = (newItem: T extends any[] ? T[0] : T) => {
    mutate((currentData: T | undefined) => {
      if (!currentData) {
        return [newItem] as T;
      }
      const arrayData = (
        Array.isArray(currentData) ? currentData : []
      ) as ArrayResponse<T>;
      return [...arrayData, newItem] as T;
    }, false);
  };

  const removeItem = <Type>(id: Type) => {
    mutate((currentData: T | undefined) => {
      if (!currentData) {
        return [] as T;
      }
      const arrayData = (
        Array.isArray(currentData) ? currentData : []
      ) as ArrayResponse<T>;
      return arrayData.filter((item: any) => item.id !== id) as T;
    }, false);
  };

  const putItem = <Type>(
    id: Type,
    key: keyof (T extends any[] ? T[0] : T),
    value: any,
  ) => {
    mutate((currentData: T | undefined) => {
      if (!currentData) {
        return [] as T;
      }
      const arrayData = (
        Array.isArray(currentData) ? currentData : []
      ) as ArrayResponse<T>;
      return arrayData.map((item: any) =>
        item.id === id ? { ...item, [key]: value } : item,
      ) as T;
    }, false);
  };

  return {
    data: response,
    error,
    isLoading,
    mutate,
    addItem,
    removeItem,
    putItem,
  };
}
