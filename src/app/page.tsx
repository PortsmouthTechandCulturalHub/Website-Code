import React from "react";

import { hero, goal, stat, blog, testimonial } from "./variables";

import Hero from "@/components/content/home/hero";
import Goals from "@/components/content/home/goals";
import Stats from "@/components/content/home/stats";
import BlogPreview from "@/components/content/home/blog-preview";
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
