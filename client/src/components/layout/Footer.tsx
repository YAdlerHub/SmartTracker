import { useLocation } from "wouter";
import { navLinks, personalInfo } from "@/lib/constants";

const Footer = () => {
  const [_, navigate] = useLocation();
  
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold gradient-text mb-2">{personalInfo.name}</h2>
            <p className="text-gray-400">קורות חיים ופרטים ליצירת קשר</p>
            <div className="mt-4 flex space-x-4 space-x-reverse">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="mailto:example@example.com" 
                className="text-gray-400 hover:text-primary transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:flex md:space-x-6 md:space-x-reverse mb-6 md:mb-0">
            {navLinks.map((link) => (
              <div 
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className="text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {link.name}
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {personalInfo.name} | כל הזכויות שמורות
            </p>
            <div className="flex space-x-4 space-x-reverse text-sm text-gray-500">
              <span className="hover:text-gray-400 cursor-pointer transition-colors duration-300">פרטיות</span>
              <span className="hover:text-gray-400 cursor-pointer transition-colors duration-300">תנאי שימוש</span>
              <span className="hover:text-gray-400 cursor-pointer transition-colors duration-300">נגישות</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
