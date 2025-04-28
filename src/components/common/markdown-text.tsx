import { forwardRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  content: string;
}

const MarkdownText = forwardRef<HTMLDivElement, Props>(
  ({ className, content }, ref) => {
    return (
      <div ref={ref} className={cn("w-full", className)}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      </div>
    );
  },
);

MarkdownText.displayName = "MarkdownText";

export default MarkdownText;
