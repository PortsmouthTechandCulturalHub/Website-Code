interface FetcherOptions {
  method?:
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | "purge"
    | "PURGE"
    | "link"
    | "LINK"
    | "unlink"
    | "UNLINK";
  data?: any;
  customHeaders?: HeadersInit;
  useAuthBaseUrl?: boolean;
  fetchOptions?: RequestInit;
  useAuth?: boolean;
  retry?: number;
  delay?: number;
  axiosConfig?: any;
}

type AuthError = {
  code?: string | null;
  message: string;
};
