/* eslint-disable import/order */

import Image from "next/image";
import { notFound } from "next/navigation";
import { contentfulClient } from "@/lib/contentful";

interface BlogPageProps {
  params: { id: string };
}

export default async function BlogPage({ params }: BlogPageProps) {
  try {
    const entry = await contentfulClient.getEntry(params.id);

    const blog: Blog = {
      sys: { id: entry.sys.id },
      slug: entry.fields.slug, // Make sure this exists
      title: entry.fields.title,
      description: entry.fields.description,
      content: entry.fields.content,
      publishDate: entry.fields.publishDate,
      coverImage: {
        src: `https:${entry.fields.coverImage.fields.file.url}`,
        alt: entry.fields.coverImage.fields.title || "Cover Image",
        width: entry.fields.coverImage.fields.file.details.image.width,
        height: entry.fields.coverImage.fields.file.details.image.height,
      },
    };

    return (
      <div className="w-full px-pg py-7">
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
          <div className="aspect-5/3 w-full overflow-hidden rounded-md bg-gray-200">
            <Image
              src={blog.coverImage.src}
              alt={blog.coverImage.alt}
              width={blog.coverImage.width}
              height={blog.coverImage.height}
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
  } catch (e) {
    return notFound();
  }
}
