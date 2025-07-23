// news/[id]/page.tsx
import { getBlogPost } from "@/lib/contentful"; // Assuming getBlogPost fetches news posts too
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react"; // Ensure React is imported for JSX

interface Props {
  params: {
    id: string;
  };
}

export default async function NewsDetailPage({ params }: Props) {
  // Assuming getBlogPost is used for news posts as well.
  // If you have a separate getNewsPost in contentful.ts, use that instead.
  const post = await getBlogPost(params.id);

  if (!post) {
    // If the post is not found, render Next.js's notFound page
    return notFound();
  }

  // Destructure fields with type assertions for clarity and safety
  const {
    title,
    description, // Assuming description is also a plain string
    content,     // Confirmed as a plain string
    coverImage,
    author,      // Assuming author is a string
    publishDate, // Assuming publishDate is a string parsable by new Date()
  } = post.fields as {
    title: string;
    description: string;
    content: string; // Plain string content
    coverImage?: {
      fields: {
        file: {
          url: string;
          details: { image: { width: number; height: number } };
        };
        title: string;
      };
    };
    author: string;
    publishDate: string;
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl"> {/* Adjusted container classes for consistency */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h1>
      {/* Display author and formatted publish date */}
      <p className="text-xl text-gray-600 mb-8">
        By {author} · {format(new Date(publishDate), "PPP")}
      </p>

      {/* Conditional rendering for the cover image */}
      {coverImage?.fields?.file?.url && (
        <div className="w-full h-80 relative mb-8 rounded-lg overflow-hidden shadow-lg"> {/* Added mb-8 for spacing */}
          <Image
            src={`https:${coverImage.fields.file.url}`}
            alt={coverImage.fields.title || title} // Use post title as fallback for alt text
            fill
            className="object-cover" // object-cover will crop the image to fill the container
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px" // Responsive image sizes
            priority // Prioritize loading for LCP
          />
        </div>
      )}

      {/* Render the main content */}
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        {/* The description can be a separate paragraph */}
        {description && <p className="mb-4">{description}</p>}
        
        {/* Render the main 'content' field as a plain string */}
        {content ? (
          <p className="text-gray-800 leading-relaxed">{content}</p>
        ) : (
          <p className="text-gray-600 italic">No detailed content available for this news post yet.</p>
        )}
      </div>
    </div>
  );
}