
import React from "react";
import { Search, Clipboard, CreditCard, PackageCheck } from "lucide-react";

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Search size={32} className="text-jalupa-teal" />,
      title: "1. Consulta Inicial",
      description: "Entre em contato conosco detalhando o produto que deseja importar. Nossa equipe irá avaliar a viabilidade e fornecer informações iniciais."
    },
    {
      icon: <Clipboard size={32} className="text-jalupa-coral" />,
      title: "2. Proposta Detalhada",
      description: "Elaboramos uma proposta completa com valores, prazos e todas as informações necessárias para você tomar a melhor decisão."
    },
    {
      icon: <CreditCard size={32} className="text-jalupa-orange" />,
      title: "3. Contratação e Pagamento",
      description: "Aprovada a proposta, iniciamos o processo de importação mediante contrato e condições de pagamento acordadas."
    },
    {
      icon: <PackageCheck size={32} className="text-jalupa-teal" />,
      title: "4. Importação e Entrega",
      description: "Cuidamos de todo o processo de importação e logística até a entrega final do produto no endereço informado."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 reveal-animation">
            <span className="bg-clip-text text-transparent bg-coral-orange-gradient">
              Como Funciona
            </span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto reveal-animation">
            Nosso processo é simples e transparente. Acompanhe como realizamos sua importação
            do início ao fim, mantendo você informado em cada etapa.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto stagger-children">
          {/* Connecting line */}
          <div className="absolute left-[21px] top-10 bottom-10 w-1 bg-gray-200 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start mb-12 md:mb-16 reveal-animation">
              <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md z-10">
                {step.icon}
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-8">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
