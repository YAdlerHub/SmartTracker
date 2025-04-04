import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/constants";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const { contact } = personalInfo;
  const encodedMessage = encodeURIComponent(contact.whatsapp.defaultMessage);
  const whatsappUrl = `https://wa.me/972${contact.parent.phone.substring(1)}?text=${encodedMessage}`;

  return (
    <section id="contact" className="py-10 section-transition">
      <Card>
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">צור קשר</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">פרטי קשר</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">
                  <h4 className="font-bold text-lg">{contact.parent.name}</h4>
                  <p className="text-gray-600">({contact.parent.relation})</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary rounded-full p-2 text-white">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="mr-3">
                      <p className="text-gray-700">טלפון נייד</p>
                      <p className="font-bold">{contact.parent.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-primary rounded-full p-2 text-white">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="mr-3">
                      <p className="text-gray-700">אימייל</p>
                      <p className="font-bold">{contact.parent.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${contact.parent.phone}`}>
                    <Button className="bg-primary hover:bg-blue-700 text-white w-full sm:w-auto">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>התקשר</span>
                    </Button>
                  </a>
                  <a href={`mailto:${contact.parent.email}`}>
                    <Button variant="secondary" className="w-full sm:w-auto">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>שלח אימייל</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">שלח הודעה בוואטסאפ</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  לחץ על הכפתור מטה כדי לשלוח הודעת וואטסאפ מוכנה מראש.
                </p>
                
                <div className="border border-gray-300 rounded-lg p-4 mb-6 bg-white">
                  <p className="text-gray-700">תוכן ההודעה המוכנה:</p>
                  <p className="font-medium mt-2">
                    {contact.whatsapp.defaultMessage}
                  </p>
                </div>
                
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>שלח הודעה בוואטסאפ</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
