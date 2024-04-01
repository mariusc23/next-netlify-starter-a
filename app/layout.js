import React from "react";
import "@styles/globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.CONTEXT === "production"
      ? "https://m23.tv"
      : process.env.DEPLOY_PRIME_URL || "https://next-a.m23.tv/"
  ),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
