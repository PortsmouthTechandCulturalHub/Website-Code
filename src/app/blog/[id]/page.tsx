// app/blog/[id]/page.tsx

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import { notFound } from "next/navigation"; // For Next.js App Router 404 handling
import React from "react";

// Adjust this path if your Contentful utility file is located elsewhere
import { getBlogPost } from "@/lib/contentful";

// Rich Text rendering options for Contentful's Rich Text field
// This constant must be defined before it's used in the component below.
const richTextOptions = {
  renderNode: {
    // Renders embedded images (assets) within the rich text
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { data } = node;
      const { target } = data;
      if (target && target.fields) {
        const { file, title } = target.fields;
        if (file && file.url && file.details && file.details.image) {
          // Contentful image URLs sometimes don't include 'https:'
          const imageUrl = `https:${file.url}`;
          const { width, height } = file.details.image;

          return (
            <figure className="my-6">
              <Image
                src={imageUrl}
                alt={title || "Embedded Asset"}
                width={width}
                height={height}
                className="rounded-lg object-cover w-full h-auto" // Added w-full h-auto for responsiveness
                sizes="(max-width: 768px) 100vw, 700px" // Optimize image loading
              />
              {title && ( // Optional: display title as a caption
                <figcaption className="text-center text-sm text-gray-500 mt-2">
                  {title}
                </figcaption>
              )}
            </figure>
          );
        }
      }
      return null;
    },
    // Renders hyperlinks within the rich text
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
      const { uri } = node.data;
      return (
        <a href={uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          {children}
        </a>
      );
    },
    // Renders paragraphs
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p className="mb-4 text-gray-800 leading-relaxed">{children}</p>
    ),
    // Renders headings
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
      <h1 className="text-4xl font-extrabold mb-6 mt-8 text-gray-900">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className="text-3xl font-bold mb-5 mt-7 text-gray-800">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3 className="text-2xl font-semibold mb-4 mt-6 text-gray-700">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
      <h4 className="text-xl font-semibold mb-3 mt-5 text-gray-700">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => (
      <h5 className="text-lg font-semibold mb-2 mt-4 text-gray-700">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => (
      <h6 className="text-base font-semibold mb-1 mt-3 text-gray-700">{children}</h6>
    ),
    // Renders unordered lists
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="list-disc ml-6 mb-4 text-gray-800">{children}</ul>
    ),
    // Renders ordered lists
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ol className="list-decimal ml-6 mb-4 text-gray-800">{children}</ol>
    ),
    // Renders list items
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
      <li className="mb-2">{children}</li>
    ),
    // Renders blockquotes
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
    // Renders horizontal rule
    [BLOCKS.HR]: () => (
      <hr className="my-8 border-gray-200" />
    ),
  },
  // Options for inline marks (bold, italic, underline, etc.)
  renderMark: {
    bold: (children: React.ReactNode) => <strong>{children}</strong>,
    italic: (children: React.ReactNode) => <em>{children}</em>,
    underline: (children: React.ReactNode) => <u>{children}</u>,
    code: (children: React.ReactNode) => (
      <code className="bg-gray-100 p-1 rounded text-sm font-mono">{children}</code>
    ),
  },
};

// Main page component for displaying a single blog post
export default async function BlogPostPage({
  params, // Destructure params directly from the props object
}: {
  params: { id: string }; // Define the type for 'params' inline here
}) {
  const { id } = params; // Extract the blog post ID from the URL parameters
  const blogPost = await getBlogPost(id); // Fetch the blog post data from Contentful

  // If blogPost is null (e.g., ID not found or fetch error), show a 404 page
  if (!blogPost) {
    notFound();
  }

  // Type assertion to correctly access Contentful fields.
  // This helps TypeScript understand the structure of 'blogPost.fields'.
  const fields = blogPost.fields as {
    title: string;
    description: string;
    // Optional chaining added for coverImage to prevent errors if it's missing
    coverImage?: {
      fields: {
        file: {
          url: string;
          details: { image: { width: number; height: number } };
        };
        title: string;
      };
    };
    content: any; // Contentful Rich Text field's data (JSON object)
  };

  // --- Crucial check for rich text content to prevent 'map of undefined' error ---
  // If 'content' field is undefined or empty, display a fallback message instead of crashing
  if (!fields.content || Object.keys(fields.content).length === 0 || !fields.content.content) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {fields.coverImage?.fields?.file?.url && (
          <div className="relative w-full aspect-video mb-8 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={`https:${fields.coverImage.fields.file.url}`}
              alt={fields.coverImage.fields.title || fields.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px"
            />
          </div>
        )}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {fields.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8">{fields.description}</p>
        <p className="text-gray-600 italic">No detailed content available for this post yet.</p>
      </div>
    );
  }

  // Render the full blog post
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Conditionally render the cover image if it exists */}
      {fields.coverImage?.fields?.file?.url && (
        <div className="relative w-full aspect-video mb-8 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={`https:${fields.coverImage.fields.file.url}`}
            alt={fields.coverImage.fields.title || fields.title}
            fill // Use fill for responsive images in a container
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px" // Optimizes image loading
            priority // Load cover image with high priority
          />
        </div>
      )}

      {/* Blog post title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        {fields.title}
      </h1>
      {/* Blog post description (often a summary) */}
      <p className="text-xl text-gray-600 mb-8">{fields.description}</p>

      {/* Main content area, rendered from Contentful Rich Text */}
      {/* The 'prose' class from @tailwindcss/typography is excellent for styling rich text content */}
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        {documentToReactComponents(fields.content, richTextOptions)}
      </div>
    </div>
  );
}