
import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal-animation");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case elements are already visible
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl mx-auto text-center stagger-children">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal-animation">
            <span className="bg-clip-text text-transparent bg-coral-orange-gradient">
              Importações sob medida para suas necessidades
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 reveal-animation">
            Facilitamos a importação de produtos do exterior, conectando você ao mundo com eficiência e transparência.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-animation">
            <a
              href="#services"
              className="px-8 py-3 bg-coral-orange-gradient text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Nossos Serviços
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-jalupa-coral border border-jalupa-coral rounded-full font-medium hover:bg-jalupa-cream/20 transition-all"
            >
              Entre em Contato
            </a>
          </div>

          <div className="mt-16 reveal-animation">
            <p className="text-sm text-gray-600 mb-3">Conheça quem confia em nosso serviço</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 w-24 bg-gray-200/50 rounded-md flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Cliente {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="rotate-90 text-jalupa-coral" size={30} />
      </div>
    </section>
  );
};

export default HeroSection;
