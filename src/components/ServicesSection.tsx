
import React from "react";
import { Ship, Truck, FileText, Headphones, ShoppingBag, BarChart } from "lucide-react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <ShoppingBag className="text-jalupa-cream" />,
      title: "Importação por Encomenda",
      description: "Importamos produtos específicos de acordo com suas necessidades e especificações."
    },
    {
      icon: <Ship className="text-jalupa-cream" />,
      title: "Frete Internacional",
      description: "Gerenciamento completo da logística internacional desde a origem até o Brasil."
    },
    {
      icon: <FileText className="text-jalupa-cream" />,
      title: "Despacho Aduaneiro",
      description: "Cuidamos de toda documentação e processos para liberação nas aduanas."
    },
    {
      icon: <Truck className="text-jalupa-cream" />,
      title: "Entrega Nacional",
      description: "Transporte do produto do porto ou aeroporto até o destino final."
    },
    {
      icon: <BarChart className="text-jalupa-cream" />,
      title: "Consultoria em Comércio Exterior",
      description: "Orientação sobre processos, custos e legislação para importações."
    },
    {
      icon: <Headphones className="text-jalupa-cream" />,
      title: "Suporte Especializado",
      description: "Acompanhamento e suporte em todas as etapas da importação."
    }
  ];

  return (
    <section id="services" className="py-20 relative bg-coral-orange-gradient text-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 reveal-animation">Nossos Serviços</h2>
          <p className="max-w-2xl mx-auto text-jalupa-cream/90 reveal-animation">
            Oferecemos soluções completas em importação para atender às suas necessidades específicas,
            desde a busca pelo produto até a entrega final.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-colors reveal-animation"
            >
              <div className="bg-jalupa-coral p-3 rounded-xl inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-jalupa-cream/90 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-jalupa-coral/30 rounded-full -translate-y-1/2 -translate-x-1/3"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-jalupa-orange/30 rounded-full translate-y-1/3 translate-x-1/4"></div>
    </section>
  );
};

export default ServicesSection;
