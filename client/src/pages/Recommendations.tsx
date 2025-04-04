import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/lib/constants";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Recommendations = () => {
  const { recommendations } = personalInfo;

  const RecommendationCard = ({ person }: { person: any }) => (
    <div className="bg-gray-50 p-4 rounded-lg flex flex-col h-full">
      <div className="flex-grow">
        <h4 className="font-bold">{person.name}</h4>
        {person.location && <p className="text-gray-600">{person.location}</p>}
        {person.title && <p className="text-gray-600">{person.title}</p>}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-gray-700">
          <Phone className="h-4 w-4 text-primary inline mr-1" /> {person.phone}
        </div>
        <a 
          href={`tel:${person.primaryPhone || person.phone.split(' / ')[0].replace(/\D/g, '')}`} 
          className="text-primary hover:text-secondary transition duration-200"
        >
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Phone className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );

  return (
    <section id="recommendations" className="py-10 section-transition">
      <Card>
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">המלצות</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">מכרים וחברים של המשפחה</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.familyFriends.map((person, index) => (
                <RecommendationCard key={index} person={person} />
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">חברים</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.friends.map((person, index) => (
                <RecommendationCard key={index} person={person} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">מורים, מחנכים וראש ישיבה</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.teachers.map((person, index) => (
                <RecommendationCard key={index} person={person} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Recommendations;
