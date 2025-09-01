import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Container from './ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-deep text-white py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-gold-premium mb-4">
              Mentoria Êxodo
            </h3>
            <p className="font-poppins text-gray-400 leading-relaxed">
              Transformando a vida financeira de empresários brasileiros através de 
              mentoria premium e metodologia comprovada.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-premium" />
                <span className="font-poppins text-gray-400">contato@szadigital.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-premium" />
                <span className="font-poppins text-gray-400">(85) 99986-2880</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold-premium" />
                <span className="font-poppins text-gray-400">Balneário Camboriú, SC</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Jackson Souza</h4>
            <p className="font-poppins text-gray-400 text-sm leading-relaxed">
              Especialista em Planejamento Financeiro Empresarial com mais de 10 anos de experiência. 
              Mentor de centenas de empresários brasileiros.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="font-poppins text-gray-500 text-sm">
            © 2025 Mentoria Êxodo - Jackson Souza. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;