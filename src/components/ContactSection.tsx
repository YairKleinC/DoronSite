
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { 
  PhoneIcon, 
  MailIcon, 
  MapPinIcon,
  UserIcon 
} from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      phone: !/^05\d{8}$/.test(formData.phone),
      message: formData.message.trim() === ''
    };
    
    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form submission logic would go here
      console.log('Form submitted:', formData);
      
      toast({
        title: "הטופס נשלח בהצלחה",
        description: "נחזור אליך בהקדם האפשרי",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      toast({
        variant: "destructive",
        title: "שגיאה",
        description: "אנא מלא את כל השדות בצורה תקינה",
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-16 text-center">צור קשר</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3">
            <div className="bg-electric-blue text-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 ml-3" />
                  <div>
                    <p className="font-semibold">טלפון</p>
                    <p dir="ltr">050-1234567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MailIcon className="h-5 w-5 ml-3" />
                  <div>
                    <p className="font-semibold">אימייל</p>
                    <p dir="ltr">info@shalomelectric.co.il</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 ml-3" />
                  <div>
                    <p className="font-semibold">כתובת</p>
                    <p>רח' החשמל 123, תל אביב</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-3">שעות פעילות</h4>
                <p>ימים א'-ה': 08:00-18:00</p>
                <p>יום ו': 08:00-13:00</p>
                <p className="mt-2 font-bold">זמין 24/7 לקריאות חירום!</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">שם מלא*</label>
                <div className="relative">
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                    <UserIcon className="h-5 w-5" />
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                      "w-full p-3 pr-10 border rounded-md focus:ring-2 focus:ring-electric-blue focus:border-electric-blue",
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    )}
                    placeholder="הכנס את שמך"
                  />
                </div>
                {formErrors.name && <p className="text-red-500 text-sm mt-1">נא להזין שם מלא</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">אימייל*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                      "w-full p-3 border rounded-md focus:ring-2 focus:ring-electric-blue focus:border-electric-blue",
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    )}
                    placeholder="your@email.com"
                    dir="ltr"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">נא להזין אימייל תקין</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">טלפון*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={cn(
                      "w-full p-3 border rounded-md focus:ring-2 focus:ring-electric-blue focus:border-electric-blue",
                      formErrors.phone ? "border-red-500" : "border-gray-300"
                    )}
                    placeholder="050-1234567"
                    dir="ltr"
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-1">נא להזין מספר טלפון תקין (05xxxxxxxx)</p>}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">הודעה*</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={cn(
                    "w-full p-3 border rounded-md focus:ring-2 focus:ring-electric-blue focus:border-electric-blue",
                    formErrors.message ? "border-red-500" : "border-gray-300"
                  )}
                  placeholder="כיצד אוכל לעזור לך?"
                ></textarea>
                {formErrors.message && <p className="text-red-500 text-sm mt-1">נא להזין הודעה</p>}
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full text-lg"
              >
                שלח הודעה
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
