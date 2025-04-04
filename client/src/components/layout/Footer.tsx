import { Link } from "wouter";
import { navLinks, personalInfo } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">{personalInfo.name}</h2>
            <p className="text-gray-400">קורות חיים ופרטים ליצירת קשר</p>
          </div>
          <div className="flex space-x-4 space-x-reverse">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a className="text-gray-400 hover:text-white transition duration-200">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} כל הזכויות שמורות | פרטיות ותנאי שימוש</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
