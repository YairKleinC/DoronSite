
import React from 'react';

const services = [
  {
    id: 1,
    title: "תיקון תקלות חשמל",
    description: "איתור וטיפול בקצרים, הפסקות חשמל ותקלות מורכבות במערכת החשמל הביתית או העסקית.",
    icon: "⚡"
  },
  {
    id: 2,
    title: "התקנות חשמל",
    description: "התקנת נקודות חשמל חדשות, שקעים, מפסקים, גופי תאורה ואביזרי חשמל נוספים.",
    icon: "🔌"
  },
  {
    id: 3,
    title: "שדרוג לוחות חשמל",
    description: "שיפור, הרחבה והחלפת לוחות חשמל ישנים או לא תקינים בהתאם לתקן הישראלי.",
    icon: "🔧"
  },
  {
    id: 4,
    title: "בדיקות תקינות",
    description: "בדיקות תקופתיות של מערכות החשמל לאיתור תקלות ומניעת סכנות בטיחותיות.",
    icon: "📋"
  },
  {
    id: 5,
    title: "מערכות תאורה",
    description: "תכנון והתקנה של מערכות תאורה חדשניות, חסכוניות ומעוצבות לבית ולעסק.",
    icon: "💡"
  },
  {
    id: 6,
    title: "בית חכם",
    description: "התקנה ותכנות של מערכות בית חכם, שליטה מרחוק ואוטומציה ביתית.",
    icon: "🏠"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-16 text-center">השירותים שלנו</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card animate-fade-in"
              style={{ animationDelay: `${0.1 * service.id}s` }}
            >
              <div className="text-5xl mb-4 text-electric-blue">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-6">
            לא מצאתם את השירות שחיפשתם? צרו איתנו קשר ונשמח לעזור בכל בעיית חשמל.
          </p>
          <button 
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            לפרטים נוספים
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
