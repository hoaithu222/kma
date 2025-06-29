import LoadingSkeleton from "./LoadingSkeleton";

const SkeletonVariants = () => {
  return (
    <div className="min-h-screen py-8 bg-background-surface">
      <div className="max-w-6xl px-4 mx-auto">
        <LoadingSkeleton count={2} />

        {/* loading cho list item */}
        <div className="mb-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden bg-card-bg border border-border-primary rounded-lg animate-pulse"
              >
                <div className="h-48 bg-background-muted"></div>
                <div className="p-4">
                  <div className="w-3/4 h-4 mb-2 bg-background-muted rounded"></div>
                  <div className="w-1/2 h-4 mb-3 bg-background-muted rounded"></div>
                  <div className="flex items-center justify-between">
                    <div className="w-1/4 h-3 bg-background-subtle rounded"></div>
                    <div className="w-1/4 h-3 bg-background-subtle rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* loading cho list item */}
        <div className="mb-12">
          <div className="bg-card-bg border border-border-primary divide-y divide-divider-primary rounded-lg">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="p-4 animate-pulse">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-background-muted rounded-full"></div>
                  <div className="flex-1">
                    <div className="w-3/4 h-4 mb-2 bg-background-muted rounded"></div>
                    <div className="w-1/2 h-3 bg-background-subtle rounded"></div>
                  </div>
                  <div className="w-20 h-8 bg-background-subtle rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* loading cho profile */}
        <div>
          <div className="p-6 bg-card-bg border border-border-primary rounded-lg animate-pulse">
            <div className="flex items-center mb-4 space-x-4">
              <div className="w-16 h-16 bg-background-muted rounded-full"></div>
              <div>
                <div className="w-32 h-5 mb-2 bg-background-muted rounded"></div>
                <div className="w-24 h-4 bg-background-subtle rounded"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="w-full h-4 bg-background-subtle rounded"></div>
              <div className="w-5/6 h-4 bg-background-subtle rounded"></div>
              <div className="w-4/5 h-4 bg-background-subtle rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonVariants;
