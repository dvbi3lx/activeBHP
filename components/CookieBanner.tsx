"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none"
        >
          <div className="max-w-6xl mx-auto bg-card-dark/95 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto">
            
            <div className="flex items-start gap-4 flex-1">
              <span className="material-icons-outlined text-primary text-3xl shrink-0 mt-1">cookie</span>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Szanujemy Twoją prywatność</h3>
                <p className="text-slate-400 text-sm mb-0 leading-relaxed max-w-3xl">
                  Nasza strona korzysta z minimalnej ilości plików cookies niezbędnych do jej prawidłowego działania oraz celów analitycznych. Możesz dowiedzieć się więcej na temat tego, jak i dlaczego przetwarzamy Twoje dane, czytając naszą pełną{" "}
                  <Link href="/polityka-prywatnosci" className="text-primary hover:text-primary/80 underline decoration-primary/50 underline-offset-2 transition-colors">
                    Politykę Prywatności
                  </Link>.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={handleAccept}
                className="w-full md:w-auto bg-primary text-black font-bold py-3 px-8 rounded-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.3)] whitespace-nowrap"
              >
                Akceptuję
              </button>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
