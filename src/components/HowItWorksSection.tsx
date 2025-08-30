import React from 'react';
import { BookOpen, Video, FileText, Users } from 'lucide-react';
import Container from './ui/Container';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <BookOpen className="w-8 h-8 text-gold-premium" />,
      number: "01",
      title: "Metodologia Gravada",
      description: "Acesse frameworks exclusivos e aulas detalhadas sobre gestão financeira empresarial."
    },
    {
      icon: <Video className="w-8 h-8 text-gold-premium" />,
      number: "02", 
      title: "Encontros Ao Vivo",
      description: "Participe de sessões estratégicas em grupo para tirar dúvidas e acelerar resultados."
    },
    {
      icon: <FileText className="w-8 h-8 text-gold-premium" />,
      number: "03",
      title: "Planos de Ação",
      description: "Receba seu mapa financeiro individualizado com passos específicos para seu negócio."
    },
    {
      icon: <Users className="w-8 h-8 text-gold-premium" />,
      number: "04",
      title: "Acompanhamento Direto",
      description: "Tenha suporte e feedback personalizado diretamente do Jackson Souza."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black-deep mb-6">
            Como Funciona a <span className="text-gold-premium">Mentoria Êxodo</span>
          </h2>
          <p className="font-poppins text-xl text-gray-dark max-w-3xl mx-auto">
            Um processo estruturado e eficiente que vai te levar do caos financeiro 
            à total organização e controle do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-gold-premium to-transparent" />
              )}
              
              <div className="bg-gray-elegant p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold-premium/5 rounded-full transform translate-x-10 -translate-y-10" />
                
                {/* Step Number */}
                <div className="font-playfair text-6xl font-bold text-gold-premium/20 absolute top-4 right-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="mb-6 p-3 bg-white rounded-xl shadow-md w-fit">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="font-poppins font-semibold text-xl text-black-deep mb-4">
                  {step.title}
                </h3>
                <p className="font-poppins text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;