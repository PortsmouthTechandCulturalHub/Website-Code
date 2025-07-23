// src/app/news/[id]/page.tsx

import React from "react"; // Core React import first

import Image from "next/image"; // Next.js specific imports
import { notFound } from "next/navigation";

import { format } from "date-fns"; // Other external libraries

import { getBlogPost } from "@/lib/contentful"; // Your internal/aliased imports last

interface Props {
  params: {
    id: string;
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const post = await getBlogPost(params.id);

  if (!post) {
    return notFound();
  }

  const {
    title,
    description,
    content,
    coverImage,
    author,
    publishDate,
  } = post.fields as {
    title: string;
    description: string;
    content: string;
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
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h1>
      <p className="text-xl text-gray-600 mb-8">
        By {author} · {format(new Date(publishDate), "PPP")}
      </p>

      {coverImage?.fields?.file?.url && (
        <div className="w-full h-80 relative mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={`https:${coverImage.fields.file.url}`}
            alt={coverImage.fields.title || title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px"
            priority
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        {description && <p className="mb-4">{description}</p>}
        {content ? (
          <p className="text-gray-800 leading-relaxed">{content}</p>
        ) : (
          <p className="text-gray-600 italic">No detailed content available for this news post yet.</p>
        )}
      </div>
    </div>
  );
}