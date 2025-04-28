export type Errors = {
  message: string;
  locations?: { line: number; column: number }[] | null;
  path?: string[] | null;
  extensions: {
    contentful: {
      code: string;
      requestId: string;
    };
  };
};

export type Assets = {
  title: string;
  url: string;
  width: number;
  height: number;
  fileName: string
};

