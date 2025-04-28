const GRAPHQL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

export const query = async <T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> => {
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      ...(query && { query }),
      ...(variables && { ...variables }),
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  });
  return res.json();
};
