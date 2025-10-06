import React from "react";
import { Github, Instagram } from "lucide-react";

const Footer = () => {
  const socialIcons = {
    star: (
      <svg
        className="w-6 h-6 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    spiral: (
      <svg
        className="w-6 h-6 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 7.431c-.876 1.041-1.884 1.941-3.014 2.683l.263 1.285c.108.528.207 1.067.263 1.612.057.526-.058 1.062-.344 1.514-.286.452-.738.779-1.272.92l-.183.05c-.528.143-1.084.089-1.567-.151-.483-.24-.873-.647-1.099-1.144l-.046-.101c-.226-.497-.302-1.056-.214-1.573l.038-.225c.088-.517.251-1.009.479-1.463l.07-.14c.228-.454.518-.861.855-1.209l.088-.091c.337-.348.719-.636 1.133-.856l.121-.064c.414-.22.856-.371 1.309-.447l.15-.025c.453-.076.914-.081 1.366-.014.452.067.889.202 1.291.4l.127.063c.402.198.768.448 1.084.741.316.293.583.627.793.986z" />
      </svg>
    ),
  };

  // Social Links Data
  const socials = [
    { href: "https://github.com/krishnasai89", icon: <Github /> },
    { href: "#", icon: socialIcons.star },
    { href: "#", icon: socialIcons.spiral },
    { href: "#", icon: <Instagram /> },
  ];
  const navLinks = [
    { href: "/", link: "Home" },
    { href: "#", link: "About" },
    { href: "#", link: "Portfolio" },
    { href: "#", link: "Contact" },
  ];

  return (
    <footer className="relative bg-blue-600 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        {[150, 100].map((r, i) => (
          <circle
            key={i}
            cx="200"
            cy="200"
            r={r}
            fill={
              i === 0
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(255, 255, 255, 0.03)"
            }
            transform={i === 0 ? "scale(1.5)" : "scale(1.2)"}
          />
        ))}
      </div>

      <div className="relative z-10 px-8 py-16">
        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          {socials.map(({ href, icon }, i) => (
            <a
              key={i}
              href={href}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
            >
              {React.cloneElement(icon, { className: "w-6 h-6 text-white" })}
            </a>
          ))}
        </div>

        {/* Navigation */}
        <nav className="flex justify-center items-center space-x-8 mb-8">
          {navLinks.map(({ href, link }, i) => (
            <a
              key={i}
              href={href}
              className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Map Section */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-white/10">
          <h1 className="text-white text-base leading-relaxed p-4">
            The Triyuginarayan Temple in Uttarakhand, India, is the sacred site
            where Lord Shiva and Goddess Parvati are believed to have had their
            divine marriage. Known as the "Shiv Parvati Marriage Sthal" or the
            "Vivah Sthal," the temple is famous for its Akhand Dhuni (eternal
            flame), which has been continuously burning since the celestial
            wedding. Lord Vishnu is said to have acted as a witness for the
            ceremony. Today, couples perform their own weddings at the temple to
            recreate the divine union.
          </h1>

          <iframe
            title="Triyuginarayan Temple Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878779.8730753832!2d78.49560212137655!3d30.641456722807753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390847a500000001%3A0xc2ca18c7d6d6d5bf!2sTriyuginarayan%20Temple!5e0!3m2!1sen!2sin!4v1759172843070!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Copyright */}
        <div className="text-center py-10">
          <p className="text-white text-sm opacity-80">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
