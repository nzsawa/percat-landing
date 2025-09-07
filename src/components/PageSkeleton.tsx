import React from "react";

// Simple skeleton loader for the main page
export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation skeleton */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 bg-white/20 rounded animate-pulse" />
            <div className="h-5 w-24 bg-white/20 rounded animate-pulse" />
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <div className="h-4 w-16 bg-white/20 rounded animate-pulse" />
            <div className="h-4 w-20 bg-white/20 rounded animate-pulse" />
            <div className="h-4 w-12 bg-white/20 rounded animate-pulse" />
            <div className="h-8 w-24 bg-white/20 rounded-xl animate-pulse" />
          </div>
        </div>
      </header>

      {/* Hero section skeleton */}
      <section className="relative py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
          <div className="space-y-4">
            <div className="h-12 w-full bg-white/20 rounded animate-pulse" />
            <div className="h-6 w-3/4 bg-white/20 rounded animate-pulse" />
            <div className="h-6 w-1/2 bg-white/20 rounded animate-pulse" />
            <div className="flex items-center gap-3 mt-8">
              <div className="h-11 w-64 bg-white/20 rounded-xl animate-pulse" />
              <div className="h-11 w-24 bg-white/20 rounded-xl animate-pulse" />
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="h-4 w-32 bg-white/20 rounded animate-pulse" />
              <div className="h-4 w-28 bg-white/20 rounded animate-pulse" />
              <div className="h-4 w-24 bg-white/20 rounded animate-pulse" />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full bg-white/10 rounded-3xl animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features skeleton */}
      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <div className="h-8 w-64 bg-white/20 rounded animate-pulse mx-auto mb-3" />
            <div className="h-4 w-96 bg-white/20 rounded animate-pulse mx-auto" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border border-white/10 bg-white/5 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 bg-white/20 rounded-xl animate-pulse" />
                  <div className="h-5 w-24 bg-white/20 rounded animate-pulse" />
                </div>
                <div className="h-4 w-full bg-white/20 rounded animate-pulse mb-2" />
                <div className="h-4 w-3/4 bg-white/20 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
