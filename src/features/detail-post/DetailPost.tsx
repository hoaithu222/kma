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
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <LoadingPage />
      </div>
    );
  }
  const getAuthorDisplayName = () => {
    return post.isPrivate ? "Ẩn danh" : post.authorName;
  };

  const thumbnail = `${import.meta.env.VITE_API_URL_FILE}/${post.thumbnailUrl}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
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
        navigateToHome={() => navigate("/")}
        navigateToCategory={() => navigate(`/base-post/${post.categoryId}`)}
      />

      <div className="px-1 py-2 mx-auto max-w-9xl sm:px-2 sm:py-4">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:grid-cols-4 xl:grid-cols-5">
          {/* Main Content */}
          <div className="lg:col-span-3 xl:col-span-4">
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
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
          </div>

          {/* Sidebar */}
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
