import React from "react";

// Simple, minimal loading spinner
export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6", 
    lg: "h-8 w-8"
  };

  return (
    <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-white/20 border-t-white`} />
  );
}

// Simple page loading component
export function PageLoading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size="lg" />
        <div className="text-white/60 text-sm">Loading...</div>
      </div>
    </div>
  );
}

// Simple section loading component
export function SectionLoading() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex items-center gap-3">
        <LoadingSpinner />
        <span className="text-white/60 text-sm">Loading content...</span>
      </div>
    </div>
  );
}
