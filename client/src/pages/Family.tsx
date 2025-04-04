import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/lib/constants";
import { Users, User, UserRound } from "lucide-react";

const Family = () => {
  const { family } = personalInfo;

  return (
    <section id="family" className="py-10 section-transition">
      <Card>
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">משפחה</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">הורים</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {family.parents.map((parent, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="rounded-full bg-blue-100 p-3">
                      {parent.icon === "male" ? 
                        <User className="h-5 w-5 text-primary" /> : 
                        <UserRound className="h-5 w-5 text-primary" />
                      }
                    </div>
                    <div className="mr-4">
                      <h4 className="font-bold">{parent.name}</h4>
                      <p className="text-gray-600">{parent.origin}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">
                    {parent.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">סבים וסבתות</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {family.grandparents.map((grandparent, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">{grandparent.name}</h4>
                  <p className="text-gray-600">{grandparent.location}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">אחים ואחיות</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {family.siblings.map((sibling, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">{sibling.name} ({sibling.age})</h4>
                  {sibling.spouse && <p className="text-gray-600">{sibling.spouse}</p>}
                  <p className="text-gray-700">{sibling.occupation}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Family;
