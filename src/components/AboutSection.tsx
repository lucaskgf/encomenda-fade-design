
import React from "react";
import { cn } from "@/lib/utils";
import { Globe, Package, TrendingUp, Shield } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 reveal-animation">
            <span className="bg-clip-text text-transparent bg-coral-orange-gradient">
              Sobre a Jalupa Importações
            </span>
          </h2>
          <p className="text-gray-700 reveal-animation">
            Somos especialistas em trazer o melhor do mundo para você. Com anos de experiência
            no mercado de importação, facilitamos todo o processo para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 stagger-children">
            <div className="reveal-animation">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Nossa Missão</h3>
              <p className="text-gray-600">
                Facilitar o acesso a produtos internacionais, proporcionando uma experiência
                de importação transparente, eficiente e personalizada.
              </p>
            </div>

            <div className="reveal-animation">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser a principal referência em importação sob demanda no Brasil,
                conectando pessoas e negócios ao mercado global.
              </p>
            </div>

            <div className="reveal-animation">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Nossos Valores</h3>
              <p className="text-gray-600">
                Transparência, eficiência, personalização e compromisso com
                a satisfação total dos nossos clientes em cada importação.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 stagger-children">
            {[
              {
                icon: <Globe className="text-jalupa-coral" size={32} />,
                title: "Alcance Global",
                description: "Acesso a produtos de qualquer lugar do mundo"
              },
              {
                icon: <Package className="text-jalupa-orange" size={32} />,
                title: "Logística Completa",
                description: "Do fornecedor até você, sem preocupações"
              },
              {
                icon: <TrendingUp className="text-jalupa-coral" size={32} />,
                title: "Eficiência",
                description: "Processos otimizados para economia de tempo e custo"
              },
              {
                icon: <Shield className="text-jalupa-orange" size={32} />,
                title: "Segurança",
                description: "Garantia total em todas as etapas do processo"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "p-6 rounded-2xl reveal-animation",
                  index % 2 === 0 ? "bg-jalupa-cream/30" : "bg-white border border-jalupa-coral/20"
                )}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-jalupa-orange/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-jalupa-coral/10 rounded-full translate-y-1/2 -translate-x-1/3"></div>
    </section>
  );
};

export default AboutSection;
