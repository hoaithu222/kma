import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDetailPost } from "./hooks/useDetailPost";

import { ReduxStateType } from "@/app/store/types";

// Import components
import ReadingProgressBar from "./components/ReadingProgressBar";
import RelatedPostsSidebar from "./components/RelatedPostsSidebar";
import FloatingFilesPanel from "./components/FloatingFilesPanel";
import PostHeader from "./components/PostHeader";
import PostHero from "./components/PostHero";
import PostContent from "./components/PostContent";
import LoadingPage from "@/foundation/components/loading/LoadingPage";

const DetailPost = () => {
  const { id } = useParams();
  const {
    getPostDetailDispatch,
    post,
    statusGetPost,
    listRelatedPost,
    increaseViewCountDispatch,
    getListRelatedPostDispatch,
  } = useDetailPost();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    if (id) {
      getPostDetailDispatch(id);
      increaseViewCountDispatch(id);
    }
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (post?.categoryId) {
      getListRelatedPostDispatch(post.categoryId || 0);
    }
  }, [post?.categoryId]);

  const listRelatedPostData = listRelatedPost || [];

  if (statusGetPost === ReduxStateType.LOADING || !post) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingPage />
      </div>
    );
  }
  const getAuthorDisplayName = () => {
    return post.isPrivate ? "Ẩn danh" : post.authorName;
  };

  const thumbnail = `${import.meta.env.VITE_API_URL_FILE}/${post.thumbnailUrl}`;

  return (
    <div className="min-h-screen bg-background-muted/50">
      <ReadingProgressBar progress={readingProgress} />

      <PostHeader
        scrollY={scrollY}
        categoryName={post.categoryName}
        subCategoryName={post.subCategoryName}
        isLiked={isLiked}
        isBookmarked={isBookmarked}
        onNavigateBack={() => navigate(-1)}
        onLikeToggle={() => setIsLiked(!isLiked)}
        onBookmarkToggle={() => setIsBookmarked(!isBookmarked)}
      />

      <div className="px-2 py-4 mx-auto sm:px-4 sm:py-8 max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PostHero
              thumbnail={thumbnail}
              categoryName={post.categoryName}
              title={post.title}
              publishedAt={post.publishedAt}
              updatedAt={post.updatedAt}
              authorName={getAuthorDisplayName()}
              summary={post.summary}
              tags={post.tag}
            />

            <PostContent content={post.content} />
          </div>

          <div className="lg:col-span-1">
            <RelatedPostsSidebar listRelatedPost={listRelatedPostData} />
          </div>
        </div>
      </div>

      <FloatingFilesPanel files={post.files} />
    </div>
  );
};

export default DetailPost;
