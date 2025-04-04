import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { navLinks } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, navigate] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/95 shadow-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <div 
                onClick={() => handleNavigate("/")}
                className="text-xl font-bold text-primary cursor-pointer"
              >
                יוני אדלר
              </div>
            </div>
            <div className="hidden md:flex md:items-center">
              <div className="flex space-x-4 space-x-reverse">
                {navLinks.map((link) => (
                  <div 
                    key={link.path}
                    onClick={() => handleNavigate(link.path)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out cursor-pointer
                      ${location === link.path ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                  >
                    {link.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <div 
              key={link.path}
              onClick={() => handleNavigate(link.path)}
              className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer
                ${location === link.path ? "text-primary bg-gray-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"}`}
            >
              {link.name}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
