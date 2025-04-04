import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";
import { PhotoCarousel } from "@/components/ui/photo-carousel";
import { ShareButton } from "@/components/ui/share-button";

const Home = () => {
  const [_, navigate] = useLocation();
  
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-6xl mx-auto mb-8">
        <div className="w-full md:w-1/2 max-w-lg">
          <PhotoCarousel className="h-96 shadow-xl" />
        </div>
        
        <div className="w-full md:w-1/2 text-center md:text-right">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 bg-gradient-to-l from-primary/80 to-primary bg-clip-text text-transparent">{personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mb-6">
            {personalInfo.about}
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button 
              onClick={() => handleNavigate("/contact")}
              className="gradient-bg hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg"
            >
              צור קשר עכשיו
            </Button>
            <ShareButton />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 w-full max-w-5xl">
        <div 
          onClick={() => handleNavigate("/about")}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:translate-y-[-5px]"
        >
          <h2 className="text-xl font-bold text-primary mb-3">אודות</h2>
          <p className="text-gray-600 mb-4">מידע אישי, השכלה והשקפת עולם</p>
          <div className="flex justify-end">
            <ArrowLeft className="h-5 w-5 text-primary" />
          </div>
        </div>
        
        <div 
          onClick={() => handleNavigate("/experience")}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:translate-y-[-5px]"
        >
          <h2 className="text-xl font-bold text-primary mb-3">ניסיון מקצועי</h2>
          <p className="text-gray-600 mb-4">תפקידים, כישורים ושאיפות מקצועיות</p>
          <div className="flex justify-end">
            <ArrowLeft className="h-5 w-5 text-primary" />
          </div>
        </div>
        
        <div 
          onClick={() => handleNavigate("/family")}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:translate-y-[-5px]"
        >
          <h2 className="text-xl font-bold text-primary mb-3">משפחה</h2>
          <p className="text-gray-600 mb-4">מידע על הורים, סבים ואחים</p>
          <div className="flex justify-end">
            <ArrowLeft className="h-5 w-5 text-primary" />
          </div>
        </div>
        
        <div 
          onClick={() => handleNavigate("/recommendations")}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:translate-y-[-5px]"
        >
          <h2 className="text-xl font-bold text-primary mb-3">המלצות</h2>
          <p className="text-gray-600 mb-4">חברים, מכרים ומחנכים</p>
          <div className="flex justify-end">
            <ArrowLeft className="h-5 w-5 text-primary" />
          </div>
        </div>
        
        <div 
          onClick={() => handleNavigate("/contact")}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:translate-y-[-5px]"
        >
          <h2 className="text-xl font-bold text-primary mb-3">צור קשר</h2>
          <p className="text-gray-600 mb-4">פרטי התקשרות ואפשרויות יצירת קשר</p>
          <div className="flex justify-end">
            <ArrowLeft className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
