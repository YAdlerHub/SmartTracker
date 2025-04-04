import { personalInfo } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-10 section-transition">
      <Card className="overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <div className="h-64 md:h-full gradient-bg flex items-center justify-center">
              <div className="h-48 w-48 rounded-full bg-white/20 flex items-center justify-center text-white text-5xl font-bold shadow-lg border-4 border-white">
                {personalInfo.name.substring(0, 1)}
              </div>
            </div>
          </div>
          <CardContent className="md:w-2/3 p-8">
            <div className="uppercase tracking-wide text-sm text-primary font-semibold">פרופיל אישי</div>
            <h2 className="mt-2 text-3xl leading-tight font-bold text-gray-900">{personalInfo.name}</h2>
            <div className="mt-2 text-gray-600">תאריך לידה: {personalInfo.birthDate} | גובה: {personalInfo.height}</div>
            
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900">על יוני בכמה מילים</h3>
              <p className="mt-2 text-gray-600">
                {personalInfo.about}
              </p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900">השכלה</h3>
              <div className="mt-2 space-y-2">
                {personalInfo.education.map((edu, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-primary mr-2">
                      {edu.icon === "graduation-cap" ? 
                        <GraduationCap className="h-5 w-5" /> : 
                        <School className="h-5 w-5" />
                      }
                    </div>
                    <div>
                      <div className="font-medium">{edu.degree}</div>
                      <div className="text-sm text-gray-500">{edu.institution}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900">על השידוך שיוני מחפש</h3>
              <p className="mt-2 text-gray-600">
                {personalInfo.lookingFor}
              </p>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
};

export default About;
