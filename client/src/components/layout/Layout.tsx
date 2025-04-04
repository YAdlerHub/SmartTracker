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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 pb-12 flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
