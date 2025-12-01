import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSun, FiMoon, FiHome } from "react-icons/fi";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") !== "false";
    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark");
  };

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: FiHome, onClick: scrollToHero, label: "Home" },
    { icon: FiGithub, href: "https://github.com/panendrajadav", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/panendra-jadav-6b458a27a", label: "LinkedIn" },
    { icon: FiMail, href: "mailto:panendrajadav@gmail.com", label: "Email" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 bottom-4 sm:bottom-8 z-50 flex justify-center"
    >
        <div className="bg-card/80 backdrop-blur-lg border border-border rounded-full px-6 py-3 shadow-lg pointer-events-auto">
        <div className="flex items-center justify-center gap-2">
          {socialLinks.map((link, index) => (
            link.onClick ? (
              <motion.button
                key={link.label}
                onClick={link.onClick}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 hover:bg-accent/10 rounded-full transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.button>
            ) : (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 hover:bg-accent/10 rounded-full transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            )
          ))}

          <div className="w-px h-6 bg-border mx-2" />

          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-3 hover:bg-accent/10 rounded-full transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};
