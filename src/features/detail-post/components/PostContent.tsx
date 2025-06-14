import React from "react";

interface PostContentProps {
  content: string;
}

const PostContent: React.FC<PostContentProps> = ({ content }) => (
  <div className="p-4 shadow-2xl sm:p-6 md:p-8 lg:p-12 bg-background-base rounded-2xl sm:rounded-3xl">
    <div
      className="prose-sm prose text-text-secondary dark:text-white sm:prose-base md:prose-lg max-w-none sm:prose-code:py-1 prose-code:rounded prose-code:text-xs sm:prose-code:text-sm"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default PostContent;
