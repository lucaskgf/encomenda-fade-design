
import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 reveal-animation">
            <span className="bg-clip-text text-transparent bg-coral-orange-gradient">
              Entre em Contato
            </span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto reveal-animation">
            Estamos prontos para atender sua solicitação e esclarecer todas as suas dúvidas
            sobre o processo de importação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div className="space-y-8 stagger-children">
            <div className="reveal-animation">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-jalupa-coral/10 p-2 rounded-full">
                    <Phone className="text-jalupa-coral" size={20} />
                  </div>
                  <span className="ml-4 text-gray-700">(11) 99999-9999</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-jalupa-orange/10 p-2 rounded-full">
                    <Mail className="text-jalupa-orange" size={20} />
                  </div>
                  <span className="ml-4 text-gray-700">contato@jalupa.com.br</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-jalupa-teal/10 p-2 rounded-full">
                    <MapPin className="text-jalupa-teal" size={20} />
                  </div>
                  <span className="ml-4 text-gray-700">
                    Av. Paulista, 1000 - São Paulo, SP
                  </span>
                </div>
              </div>
            </div>
            
            <div className="reveal-animation">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Horário de Atendimento</h3>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Segunda a Sexta:</span> 09:00 - 18:00
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Sábado:</span> 09:00 - 13:00
              </p>
            </div>
          </div>

          <div className="reveal-animation">
            <form className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-jalupa-coral focus:ring-1 focus:ring-jalupa-coral outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-jalupa-coral focus:ring-1 focus:ring-jalupa-coral outline-none transition-all"
                  placeholder="exemplo@email.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-jalupa-coral focus:ring-1 focus:ring-jalupa-coral outline-none transition-all"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-jalupa-coral focus:ring-1 focus:ring-jalupa-coral outline-none transition-all"
                  placeholder="Descreva sua solicitação em detalhes..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-coral-orange-gradient text-white py-3 rounded-lg font-medium flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                Enviar Mensagem
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-jalupa-coral/5 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-jalupa-orange/5 rounded-full"></div>
    </section>
  );
};

export default ContactSection;
