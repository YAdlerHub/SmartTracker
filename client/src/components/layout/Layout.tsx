import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { logPageVisit } from "@/lib/queryClient";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [location] = useLocation();
  
  // Log page visit when location changes
  useEffect(() => {
    logPageVisit(location);
  }, [location]);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 w-full h-2 gradient-bg z-50"></div>
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
