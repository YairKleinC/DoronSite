
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-electric-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-16 text-center">אודות</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-electric-yellow rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="חשמלאי מקצועי" 
                className="w-full h-auto rounded-lg object-cover shadow-lg relative z-10"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-right">
            <h3 className="text-2xl font-bold mb-4 text-electric-dark">שלום, אני יוסי</h3>
            <p className="text-lg mb-4">
              עם יותר מ-20 שנות ניסיון בתחום החשמל, אני מספק שירותי חשמל מקצועיים ואמינים לבתים ועסקים באזור המרכז. 
            </p>
            <p className="text-lg mb-6">
              המומחיות שלי כוללת תיקון תקלות חשמל, התקנת מערכות תאורה, שדרוג לוחות חשמל, והתקנת מערכות חשמל חכמות. 
              אני מאמין בשירות אישי, מקצועי ואמין, ותמיד זמין לכל פנייה.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-right">
                <span className="ml-2 text-electric-blue">✓</span>
                <span>בעל רישיון חשמלאי מוסמך</span>
              </li>
              <li className="flex items-center text-right">
                <span className="ml-2 text-electric-blue">✓</span>
                <span>זמינות 24/7 לקריאות חירום</span>
              </li>
              <li className="flex items-center text-right">
                <span className="ml-2 text-electric-blue">✓</span>
                <span>מחירים הוגנים ושקיפות מלאה</span>
              </li>
              <li className="flex items-center text-right">
                <span className="ml-2 text-electric-blue">✓</span>
                <span>אחריות על כל העבודות</span>
              </li>
            </ul>
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              צור קשר
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
