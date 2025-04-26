import React from "react";

import { hero, values, stat, blog, vision } from "@/app/variables";
import BlogPreview from "@/components/content/home/blog-preview";
import Hero from "@/components/content/home/hero";
import Stats from "@/components/content/home/stats";
import Values from "@/components/content/home/values";
import Vision from "@/components/content/home/vision";

export default function Home() {
  return (
    <div className="flex w-full flex-col pt-sm-header sm:pt-header">
      <Hero hero={hero} />
      <Values value={values} />
      <Stats stat={stat} />
      <BlogPreview blog={blog} />
      <Vision vision={vision} />
    </div>
  );
}
