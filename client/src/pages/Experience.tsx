import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/lib/constants";
import { Code, CheckCircle, Star } from "lucide-react";

const Experience = () => {
  const { experience } = personalInfo;

  return (
    <section id="experience" className="py-10 section-transition">
      <Card>
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">ניסיון מקצועי</h2>
          
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-primary p-3 text-white">
                <Code className="h-5 w-5" />
              </div>
              <div className="mr-4">
                <h3 className="text-xl font-bold">{experience.current.title}</h3>
                <p className="text-gray-600">{experience.current.company}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                {experience.current.description}
              </p>
              <div className="mt-3 flex flex-wrap">
                {experience.current.skills.map((skill, index) => (
                  <Badge key={index} variant="default" className="bg-primary text-white mr-2 mt-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">כישורים טכניים</h3>
              <ul className="space-y-2">
                {experience.technicalSkills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900">שאיפות ויעדים</h3>
              <ul className="space-y-2">
                {experience.goals.map((goal, index) => (
                  <li key={index} className="flex items-center">
                    <Star className="h-5 w-5 text-primary mr-2" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Experience;
