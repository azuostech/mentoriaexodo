import React from 'react';
import { Clock, ArrowRight, Shield } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black-deep via-gray-900 to-black-deep text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-premium rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-premium rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-full font-poppins font-semibold mb-8 animate-pulse">
            <Clock className="w-5 h-5" />
            Últimas Vagas Disponíveis
          </div>

          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Chegou a Hora de <span className="text-gold-premium">Transformar</span> 
            <br />Sua Vida Financeira
          </h2>
          
          <p className="font-poppins text-xl text-gray-300 mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Não deixe para amanhã a decisão que pode mudar sua vida financeira para sempre. 
            As vagas são limitadas e a próxima turma só abre em 6 meses.
          </p>

          {/* Main CTA */}
          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button size="large" className="mb-8 text-xl px-16 py-6">
              Quero Garantir Minha Vaga na Mentoria Êxodo
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="font-poppins">100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gold-premium" />
              <span className="font-poppins">Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="font-poppins">Satisfação Garantida</span>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-16 p-8 bg-gold-premium/10 border border-gold-premium/30 rounded-2xl backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="font-poppins text-lg text-gray-300 mb-4">
              "O melhor momento para começar foi há 10 anos. 
              O segundo melhor momento é agora."
            </p>
            <p className="font-poppins font-semibold text-gold-premium">
              — Jackson Souza
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;