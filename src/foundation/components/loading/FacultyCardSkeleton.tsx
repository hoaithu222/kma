const FacultyCardSkeleton = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="p-6 rounded-xl border shadow-md animate-pulse bg-card-bg border-border-primary"
        >
          {/* Avatar */}
          <div className="flex items-start mb-4 space-x-4">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-background-muted"></div>
            <div className="flex-1 min-w-0">
              {/* Name */}
              <div className="mb-2 w-3/4 h-5 rounded bg-background-muted"></div>
              {/* Position */}
              <div className="mb-2 w-full h-4 rounded bg-secondary-light"></div>
            </div>
          </div>

          {/* Department and Email */}
          <div className="mb-4 space-y-3">
            {/* Department */}
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-success"></div>
              <div className="w-16 h-4 rounded bg-background-subtle"></div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-accent"></div>
              <div className="w-3/4 h-4 rounded bg-background-subtle"></div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 space-y-2">
            <div className="w-full h-3 rounded bg-background-subtle"></div>
            <div className="w-5/6 h-3 rounded bg-background-subtle"></div>
            <div className="w-4/5 h-3 rounded bg-background-subtle"></div>
          </div>

          {/* Button */}
          <div className="w-full h-10 rounded-lg bg-secondary-light"></div>
        </div>
      ))}
    </div>
  );
};

export default FacultyCardSkeleton;
