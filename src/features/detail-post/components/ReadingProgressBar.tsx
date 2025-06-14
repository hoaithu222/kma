import React from "react";

interface ReadingProgressBarProps {
  progress: number;
}

const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({
  progress,
}) => (
  <div className="fixed top-0 left-0 z-50 w-full h-1 bg-background-muted">
    <div
      className="h-full transition-all duration-300 bg-gradient-to-r from-primary to-secondary"
      style={{ width: `${progress}%` }}
    />
  </div>
);

export default ReadingProgressBar;
