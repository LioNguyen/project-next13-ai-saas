import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full relative">
      <div className="hidden md:flex md:w-72 flex-col h-full fixed inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
