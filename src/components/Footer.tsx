
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-electric-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">שלום חשמל</h3>
            <p className="max-w-xs">
              שירותי חשמל מקצועיים ואמינים לבתים ועסקים באזור המרכז. 
              בעל רישיון חשמלאי מוסמך.
            </p>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">שירותים</h4>
            <ul className="space-y-2">
              <li>תיקון תקלות חשמל</li>
              <li>התקנות חשמל</li>
              <li>שדרוג לוחות חשמל</li>
              <li>בדיקות תקינות</li>
              <li>מערכות תאורה</li>
              <li>בית חכם</li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">צור קשר</h4>
            <ul className="space-y-2">
              <li>טלפון: 050-1234567</li>
              <li>אימייל: info@shalomelectric.co.il</li>
              <li>כתובת: רח' החשמל 123, תל אביב</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">שעות פעילות</h4>
            <ul className="space-y-2">
              <li>ימים א'-ה': 08:00-18:00</li>
              <li>יום ו': 08:00-13:00</li>
              <li className="font-bold mt-2">זמין 24/7 לקריאות חירום!</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} שלום חשמל. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
