import React from "react";
import Navbar from "../components/navbar";

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