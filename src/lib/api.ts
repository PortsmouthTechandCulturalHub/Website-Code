"use server";

import { getSession } from "./cookies";
import axios, { AxiosError, isAxiosError } from "axios";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const baseUrl2 = process.env.NEXT_PUBLIC_SERVER_URL2;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiRequest = async <T>(url: string, options: FetcherOptions = {}): Promise<T | string> => {
  const { method = "GET", data = null, customHeaders = {}, useAuthBaseUrl = false, fetchOptions = {}, useAuth = false, retry = 0, delay = 3000 } = options;

  const headers: Record<string, any> = {
    "Content-Type": "application/json",
    ...customHeaders,
  };

  if (useAuth) {
    const session = await getSession();
    if (session?.user?.access_token) {
      headers.Authorization = `Bearer ${session.user.access_token}`;
    }
  }

  const controller = new AbortController();
  const requestOptions: RequestInit = {
    method,
    headers,
    signal: controller.signal,
    ...fetchOptions,
  };

  if (data && method !== "GET") {
    requestOptions.body = JSON.stringify(data);
  }

  const baseURL = useAuthBaseUrl ? baseUrl2 : baseUrl;
  const fullUrl = `${baseURL}/${url}`;
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  let attempts = 0;
  let lastError: Error;

  while (attempts <= retry) {
    try {
      const response = await fetch(fullUrl, requestOptions);
      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const error = new Error(`HTTP error ${response.status}`);
        error.cause = errorData;
        throw error;
      }

      const contentType = response.headers.get("Content-Type");
      return contentType?.includes("application/json") ? await response.json() : await response.text();
    } catch (error: any) {
      lastError = error as Error;
      attempts++;

      const isNetworkError = error instanceof TypeError || error.message.includes("fetch") || error.message.includes("aborted");
      const isServerError = "cause" in error && typeof error.cause === "object" && "status" in error.cause && Number(error.cause.status) >= 500 && Number(error.cause.status) <= 599;

      if (attempts > retry || (!isNetworkError && !isServerError)) {
        throw lastError;
      }

      console.warn(`Retrying ${url} (${retry - attempts + 1} attempts left): ${lastError.message}`);
      await sleep(delay * Math.pow(2, attempts - 1));
    }
  }

  throw lastError!;
};

export const apiRequest_axios = async <T>(url: string, options: FetcherOptions = {}): Promise<T | string> => {
  const { method = "GET", data = null, customHeaders = {}, useAuthBaseUrl = false, axiosConfig = {}, useAuth = false, retry = 0, delay = 3000 } = options;

  const headers: Record<string, any> = {
    "Content-Type": "application/json",
    ...customHeaders,
  };

  if (useAuth) {
    const session = await getSession();
    if (session?.user?.access_token) {
      headers.Authorization = `Bearer ${session.user.access_token}`;
    }
  }

  const baseURL = useAuthBaseUrl ? baseUrl2 : baseUrl;

  const axiosInstance = axios.create({
    baseURL,
    headers,
    ...axiosConfig,
  });

  let attempts = 0;
  let lastError: AxiosError | Error;

  while (attempts <= retry) {
    try {
      const response = await axiosInstance.request({
        url,
        method,
        data: method !== "GET" ? data : undefined,
        params: method === "GET" ? data : undefined,
        headers,
        ...axiosConfig,
      });

      return response.data as T;
    } catch (error) {
      lastError = error as Error;

      attempts++;

      const isNetworkError = !isAxiosError(lastError) || (isAxiosError(lastError) && (lastError.code === "ECONNABORTED" || lastError.code === "ERR_NETWORK"));
      const isServerError = isAxiosError(lastError) && (lastError.response?.status as any) >= 500 && (lastError.response?.status as any) <= 599;

      if (attempts > retry || (!isNetworkError && !isServerError)) {
        if (isAxiosError(lastError) && lastError.response) {
          const err = new Error(`HTTP error ${lastError.response.status}`);
          err.cause = lastError.response.data;
          throw err;
        }
        throw lastError;
      }

      console.warn(`Retrying ${url} (${retry - attempts + 1} attempts left): ${lastError.message}`);
      await sleep(delay * Math.pow(2, attempts - 1));
    }
  }

  throw lastError!;
};
