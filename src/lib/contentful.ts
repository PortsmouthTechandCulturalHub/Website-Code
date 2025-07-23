// lib/contentful.ts
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
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
      content_type: "blogPost", // Replace with your Contentful Content Type ID for blog posts
      select: [
  "sys.id",
  "fields.title",
  "fields.description",
  "fields.coverImage"
],

    });
    return entries.items;
  } catch (error) {
    console.error("Error fetching all blog posts:", error);
    return [];
  }
}