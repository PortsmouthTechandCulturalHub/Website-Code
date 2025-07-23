// src/app/blog/[id]/page.tsx

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

import { getBlogPost } from "@/lib/contentful";

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { target } = node.data;
      const { file, title } = target?.fields || {};
      if (file?.url && file?.details?.image) {
        const imageUrl = `https:${file.url}`;
        const { width, height } = file.details.image;
        return (
          <figure className="my-8">
            <Image
              src={imageUrl}
              alt={title || "Embedded Asset"}
              width={width}
              height={height}
              className="rounded-lg object-cover w-full h-auto"
              sizes="(max-width: 768px) 100vw, 700px"
            />
            {title && (
              <figcaption className="text-center text-sm text-gray-500 mt-2">
                {title}
              </figcaption>
            )}
          </figure>
        );
      }
      return null;
    },
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
      const { uri } = node.data;
      return (
        <a href={uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          {children}
        </a>
      );
    },
    [BLOCKS.PARAGRAPH]: (_: any, children: React.ReactNode) => (
      <p className="mb-4 text-gray-800 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_: any, children: React.ReactNode) => (
      <h1 className="text-4xl font-extrabold mb-6 mt-8 text-gray-900">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_: any, children: React.ReactNode) => (
      <h2 className="text-3xl font-bold mb-5 mt-7 text-gray-800">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_: any, children: React.ReactNode) => (
      <h3 className="text-2xl font-semibold mb-4 mt-6 text-gray-700">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_: any, children: React.ReactNode) => (
      <h4 className="text-xl font-semibold mb-3 mt-5 text-gray-700">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (_: any, children: React.ReactNode) => (
      <h5 className="text-lg font-semibold mb-2 mt-4 text-gray-700">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (_: any, children: React.ReactNode) => (
      <h6 className="text-base font-semibold mb-1 mt-3 text-gray-700">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (_: any, children: React.ReactNode) => (
      <ul className="list-disc ml-6 mb-4 text-gray-800">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_: any, children: React.ReactNode) => (
      <ol className="list-decimal ml-6 mb-4 text-gray-800">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_: any, children: React.ReactNode) => (
      <li className="mb-2">{children}</li>
    ),
    [BLOCKS.QUOTE]: (_: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-gray-200" />,
  },
  renderMark: {
    bold: (children: React.ReactNode) => <strong>{children}</strong>,
    italic: (children: React.ReactNode) => <em>{children}</em>,
    underline: (children: React.ReactNode) => <u>{children}</u>,
    code: (children: React.ReactNode) => (
      <code className="bg-gray-100 p-1 rounded text-sm font-mono">{children}</code>
    ),
  },
};

// Use `any` to avoid Vercel's type conflict at build
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
    content: any;
  };

  if (!fields.content || !fields.content.content) {
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
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{fields.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{fields.description}</p>
        <p className="text-gray-600 italic">No detailed content available for this post yet.</p>
      </div>
    );
  }

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
            priority
          />
        </div>
      )}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{fields.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{fields.description}</p>
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        {documentToReactComponents(fields.content, richTextOptions)}
      </div>
    </div>
  );
}
