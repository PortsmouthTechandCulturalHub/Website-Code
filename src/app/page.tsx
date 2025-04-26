import React from "react";

import { hero, goal, stat, blog, testimonial } from "@/app/variables";
import BlogPreview from "@/components/content/home/blog-preview";
import Goals from "@/components/content/home/goals";
import Hero from "@/components/content/home/hero";
import Stats from "@/components/content/home/stats";
import Testimonial from "@/components/content/home/testimonial";

export default function Home() {
  return (
    <div className="flex w-full flex-col pt-sm-header sm:pt-header">
      <Hero hero={hero} />
      <Goals goal={goal} />
      <Stats stat={stat} />
      <BlogPreview blog={blog} />
      <Testimonial testimonial={testimonial} />
    </div>
  );
}
