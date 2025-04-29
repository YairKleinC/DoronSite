
import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-electrical-power-lines-at-sunset-time-20890-large.mp4"
            type="video/mp4"
          />
          דפדפן שלך אינו תומך בהפעלת וידאו.
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-end text-right text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          שלום חשמל
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          שירותי חשמל מקצועיים
        </h2>
        <p className="max-w-lg text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          שירותי חשמל מקצועיים ואמינים לבתים ועסקים באזור המרכז. זמינות גבוהה ופתרונות מהירים.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary ml-4"
          >
            צור קשר
          </button>
          <button
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary"
          >
            השירותים שלנו
          </button>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center">
        <button
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="animate-bounce cursor-pointer focus:outline-none"
          aria-label="גלול למטה לאזור אודות"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white hover:text-electric-yellow transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
