// src/app/blog/[id]/page.tsx

// Removed imports for Contentful Rich Text renderer as content is a plain string
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

import { getBlogPost } from "@/lib/contentful";

// richTextOptions is no longer needed as content is a plain string
// const richTextOptions = { /* ... */ };


// Use `any` to avoid Vercel's type conflict at build (as a temporary workaround)
export default async function BlogPostPage({ params }: any) {
  const { id } = params;
  const blogPost = await getBlogPost(id);

  if (!blogPost) return notFound();

  const fields = blogPost.fields as {
    title: string;
    description: string;
    coverImage?: {
      fields: {
        file: {
          url: string;
          details: { image: { width: number; height: number } };
        };
        title: string;
      };
    };
    content: string; // Type changed to string
  };

  return (
    // Increased py-20 for more top/bottom padding
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      {fields.coverImage?.fields?.file?.url && (
        // Removed aspect-video class to prevent cropping
        <div className="relative w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={`https:${fields.coverImage.fields.file.url}`}
            alt={fields.coverImage.fields.title || fields.title}
            fill
            // Changed objectFit to 'contain' to ensure the entire image is visible
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px"
            priority
          />
        </div>
      )}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{fields.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{fields.description}</p>

      {/*
        Content is now handled as a plain string, wrapped in a <p> tag.
        The `prose` classes will apply general text styling.
      */}
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        {fields.content ? (
          <p className="text-gray-600 leading-relaxed">{fields.content}</p>
        ) : (
          <p className="text-gray-600 italic">No detailed content available for this post yet.</p>
        )}
      </div>
    </div>
  );
}