import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

import { getBlogPost } from "@/lib/contentful";

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

  const imageUrl = coverImage?.fields?.file?.url
    ? `https:${coverImage.fields.file.url}`
    : null;

  const imageWidth = coverImage?.fields?.file?.details?.image?.width || 800;
  const imageHeight = coverImage?.fields?.file?.details?.image?.height || 500;

  return (
    <div className="container mx-auto px-4 py-24 max-w-3xl">
      {imageUrl && (
        <div className="w-full mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageUrl}
            alt={coverImage?.fields?.title || title}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-auto rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px"
            priority
          />
        </div>
      )}

      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h1>
      <p className="text-xl text-gray-600 mb-8">
        By {author} · {format(new Date(publishDate), "PPP")}
      </p>

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
