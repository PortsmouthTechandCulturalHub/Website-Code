import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

import { getBlogPost } from "@/lib/contentful";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewsDetailPage({ params }: Props) {
  const p = await params;
  const post = await getBlogPost(p.id);

  if (!post) {
    return notFound();
  }

  const { title, description, content, coverImage, author, publishDate } =
    post.fields as {
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
    <div className="container mx-auto max-w-3xl px-4 py-24">
      {imageUrl && (
        <div className="mb-8 w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={imageUrl}
            alt={coverImage?.fields?.title || title}
            width={imageWidth}
            height={imageHeight}
            className="h-auto w-full rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px"
            priority
          />
        </div>
      )}

      <h1 className="mb-4 text-4xl font-extrabold text-gray-900">{title}</h1>
      <p className="mb-8 text-xl text-gray-600">
        By {author} · {format(new Date(publishDate), "PPP")}
      </p>

      <div className="prose prose-lg max-w-none leading-relaxed text-gray-800">
        {description && <p className="mb-4">{description}</p>}
        {content ? (
          <p className="leading-relaxed text-gray-800">{content}</p>
        ) : (
          <p className="italic text-gray-600">
            No detailed content available for this news post yet.
          </p>
        )}
      </div>
    </div>
  );
}
