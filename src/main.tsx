import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { PostHogProvider } from "posthog-js/react";
import { ClerkProvider } from '@clerk/clerk-react'
import "./index.css";
import App from "./App";
import { PageLoading } from "./components/LoadingSpinner";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <PostHogProvider
        apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
        options={{
          api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
          defaults: '2025-05-24',
          capture_exceptions: true,
          debug: import.meta.env.MODE === "development",
        }}
      >
        <Suspense fallback={<PageLoading />}>
          <App />
        </Suspense>
      </PostHogProvider>
    </ClerkProvider>
  </React.StrictMode>
);
