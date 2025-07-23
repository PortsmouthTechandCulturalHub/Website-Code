// lib/contentful.ts
import { createClient /*, ContentfulClientApi */ } from "contentful"; // <-- You can remove ContentfulClientApi from import if not used elsewhere

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  console.error("Contentful environment variables are not set. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN.");
  throw new Error("Contentful environment variables are missing.");
}

// REMOVE THE TYPE ANNOTATION HERE
const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export async function getBlogPost(id: string) {
  try {
    const entry = await client.getEntry(id);
    return entry;
  } catch (error) {
    console.error(`Error fetching blog post with ID ${id}:`, error);
    return null;
  }
}

export async function getAllBlogPosts() {
  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      select: [
        "sys.id",
        "fields.title",
        "fields.description",
        "fields.coverImage",
        "fields.content"
      ],
    });
    return entries.items;
  } catch (error) {
    console.error("Error fetching all blog posts:", error);
    return [];
  }
}