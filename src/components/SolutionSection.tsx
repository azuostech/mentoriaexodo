import React from 'react';
import { Target, CheckCircle, Star } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 bg-black-deep text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gold-premium rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-gold-premium rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-gold-premium" />
              <span className="font-poppins text-gold-premium font-semibold">A SOLUÇÃO</span>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Apresento a <span className="text-gold-premium">Mentoria Êxodo</span>
            </h2>
            
            <p className="font-poppins text-xl text-gray-300 mb-8 leading-relaxed">
              Um programa de mentoria exclusivo e personalizado, onde você terá acesso direto 
              ao Jackson Souza e à metodologia que já transformou a vida financeira de mais de 
              150 empresários brasileiros.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Metodologia exclusiva testada e aprovada",
                "Acompanhamento direto e personalizado",
                "Foco específico em empresários",
                "Resultados reais e mensuráveis"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="font-poppins text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <Button size="large">
              Conhecer a Metodologia
            </Button>
          </div>

          {/* Image */}
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Empresário analisando gráficos financeiros"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gold-premium text-black-deep p-4 rounded-2xl shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <div className="text-center">
                    <div className="font-poppins font-bold text-sm">150+</div>
                    <div className="font-poppins text-xs">Transformados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SolutionSection;