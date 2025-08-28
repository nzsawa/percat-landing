import React from "react";
import PercatLanding from "./percat";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import DeletionPolicy from "./pages/DeletionPolicy";

export default function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  if (path === "/privacy") return <PrivacyPolicy />;
  if (path === "/terms") return <TermsAndConditions />;
  if (path === "/deletion") return <DeletionPolicy />;
  return <PercatLanding />;
}
