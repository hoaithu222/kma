import React from "react";
import RichHtmlBox from "@/foundation/components/inputs/RichHtmlBox";

interface PostContentProps {
  content: string;
}

const PostContent: React.FC<PostContentProps> = ({ content }) => (
  <div className="p-4 rounded-2xl shadow-2xl backdrop-blur-xl sm:p-6 md:p-8 lg:p-12 bg-background-base sm:rounded-3xl">
    <RichHtmlBox
      html={content}
      className="max-w-none prose-sm prose text-dark dark:text-white sm:prose-base md:prose-lg sm:prose-code:py-1 prose-code:rounded prose-code:text-xs sm:prose-code:text-sm"
    />
  </div>
);

export default PostContent;
