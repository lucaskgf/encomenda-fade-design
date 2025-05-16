
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-jalupa-coral rounded-md flex items-center justify-center mr-3">
                <div className="w-6 h-6 rounded-full bg-jalupa-cream flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-jalupa-coral"></div>
                </div>
                <div className="absolute top-1 left-1 w-8 h-4 border-t-2 border-l-2 border-r-2 rounded-t-full border-jalupa-cream"></div>
              </div>
              <div>
                <span className="text-jalupa-cream font-bold text-xl">Jalupa</span>
                <span className="block text-xs uppercase tracking-wider text-gray-400">
                  Importações
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Facilitamos sua conexão com o mundo através de importações seguras e eficientes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-jalupa-coral transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-jalupa-coral transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-jalupa-coral transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-jalupa-coral transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-jalupa-cream transition-colors text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-jalupa-cream transition-colors text-sm">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-jalupa-cream transition-colors text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-jalupa-cream transition-colors text-sm">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-jalupa-cream transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-medium mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-jalupa-cream transition-colors text-sm">
                  Importação por Encomenda
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-jalupa-cream transition-colors text-sm">
                  Frete Internacional
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-jalupa-cream transition-colors text-sm">
                  Despacho Aduaneiro
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-jalupa-cream transition-colors text-sm">
                  Consultoria em Comércio Exterior
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-medium mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                <span className="block">Av. Paulista, 1000</span>
                <span className="block">São Paulo, SP - Brasil</span>
              </li>
              <li className="text-gray-400 text-sm">
                contato@jalupa.com.br
              </li>
              <li className="text-gray-400 text-sm">
                (11) 99999-9999
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Jalupa Importações. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
