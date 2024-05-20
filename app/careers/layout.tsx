import React, { Suspense } from "react";
import Navbar from "../components/navbar";
import Careers from "../components/careers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="sticky top-0 z-50">
        {/* <Navbar /> */}
      </div>
      {children}
    </div>
  );
}