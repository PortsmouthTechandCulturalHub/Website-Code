import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

import { getBlogPost } from "@/lib/contentful";

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
    content: string;
  };

  const imageUrl = fields.coverImage?.fields?.file?.url
    ? `https:${fields.coverImage.fields.file.url}`
    : null;

  const imageWidth = fields.coverImage?.fields?.file?.details?.image?.width || 800;
  const imageHeight = fields.coverImage?.fields?.file?.details?.image?.height || 600;

  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      {imageUrl && (
        <div className="w-full mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageUrl}
            alt={fields.coverImage?.fields.title || fields.title}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-auto rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px"
            priority
          />
        </div>
      )}

      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{fields.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{fields.description}</p>

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
