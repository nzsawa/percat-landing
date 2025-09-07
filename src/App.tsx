import React, { Suspense, lazy } from "react";
import { PageLoading } from "./components/LoadingSpinner";
import { PageSkeleton } from "./components/PageSkeleton";

// Lazy load the main landing page
const PercatLanding = lazy(() => import("./percat"));

// Lazy load route components
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const DeletionPolicy = lazy(() => import("./pages/DeletionPolicy"));

export default function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  if (path === "/privacy") {
    return (
      <Suspense fallback={<PageLoading />}>
        <PrivacyPolicy />
      </Suspense>
    );
  }
  if (path === "/terms") {
    return (
      <Suspense fallback={<PageLoading />}>
        <TermsAndConditions />
      </Suspense>
    );
  }
  if (path === "/deletion") {
    return (
      <Suspense fallback={<PageLoading />}>
        <DeletionPolicy />
      </Suspense>
    );
  }
  
  return (
    <Suspense fallback={<PageSkeleton />}>
      <PercatLanding />
    </Suspense>
  );
}