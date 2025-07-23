import Image from "next/image";
import { notFound } from "next/navigation";

import { contentfulClient } from "@/lib/contentful";
import type { Blog } from "@/types/app"; // ✅ Import type explicitly

interface PageProps {
  params: { id: string };
}

export default async function BlogPage({ params }: PageProps) {
  const entry = await contentfulClient.getEntry(params.id);

  if (!entry) return notFound();

  const blog: Blog = {
    sys: { id: entry.sys.id },
    title: entry.fields.title,
    description: entry.fields.description,
    content: entry.fields.content,
    publishDate: new Date(entry.fields.publishDate),
    coverImage: {
      src: `https:${entry.fields.coverImage.fields.file.url}`,
      alt: entry.fields.coverImage.fields.title || "Cover Image",
      width: 1200,
      height: 800,
    },
  };

  return (
    <div className="w-full px-pg py-7">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
        <div className="aspect-5/3 w-full overflow-hidden rounded-md bg-gray-200">
          <Image
            {...blog.coverImage}
            className="size-full object-cover sm:object-[0%_20%]"
          />
        </div>
        <h1 className="mt-6 text-2xl font-bold text-black">{blog.title}</h1>
        <p className="text-sm text-gray-500">
          {new Date(blog.publishDate).toLocaleDateString()}
        </p>
        <div className="mt-4 text-base text-gray-800 whitespace-pre-line">
          {blog.content}
        </div>
      </div>
    </div>
  );
}
