import React from 'react';
import { Check, Crown, Infinity, Users, Calendar, MessageCircle } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const OfferSection: React.FC = () => {
  const benefits = [
    {
      icon: <Infinity className="w-6 h-6 text-gold-premium" />,
      title: "Acesso Vitalício à Metodologia",
      description: "Tenha acesso para sempre ao conteúdo exclusivo e todas as atualizações futuras."
    },
    {
      icon: <Calendar className="w-6 h-6 text-gold-premium" />,
      title: "Encontros Ao Vivo Estratégicos",
      description: "Sessões quinzenais com Jackson para acelerar seus resultados e tirar dúvidas."
    },
    {
      icon: <Users className="w-6 h-6 text-gold-premium" />,
      title: "Comunidade Privada de Empresários",
      description: "Network exclusivo com outros empresários de alto nível em busca da liberdade financeira."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-gold-premium" />,
      title: "Suporte Direto do Jackson",
      description: "Tenha suas dúvidas respondidas diretamente pelo mentor através do canal exclusivo."
    }
  ];

  const bonuses = [
    "Planilhas exclusivas de controle financeiro",
    "Templates de relatórios gerenciais",
    "Calculadora de investimentos personalizada",
    "Guia completo de proteção patrimonial"
  ];

  return (
    <section id="oferta" className="py-20 bg-gradient-to-br from-gray-elegant to-white">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-premium text-black-deep px-6 py-3 rounded-full font-poppins font-semibold mb-6 animate-scale-in">
            <Crown className="w-5 h-5" />
            OFERTA EXCLUSIVA
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black-deep mb-6">
            Tudo que Você Recebe na <span className="text-gold-premium">Mentoria Êxodo</span>
          </h2>
          
          <p className="font-poppins text-xl text-gray-dark max-w-3xl mx-auto">
            Uma experiência completa e transformadora que vai muito além de um curso comum.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Benefits */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="font-playfair text-2xl font-bold text-black-deep mb-8">
              O que está incluído:
            </h3>
            
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-gold-premium/10 rounded-lg flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-black-deep mb-2">
                    {benefit.title}
                  </h4>
                  <p className="font-poppins text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bonus Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-black-deep to-gray-800 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-premium/10 rounded-full transform translate-x-16 -translate-y-16" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Crown className="w-8 h-8 text-gold-premium" />
                  <span className="font-poppins text-gold-premium font-semibold text-lg">
                    BÔNUS EXCLUSIVOS
                  </span>
                </div>
                
                <h3 className="font-playfair text-2xl font-bold mb-6">
                  Materiais de Apoio Premium
                </h3>
                
                <div className="space-y-4 mb-8">
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="font-poppins text-gray-300">{bonus}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-gold-premium mb-2">
                    Valor: R$ 5.000
                  </div>
                  <div className="font-poppins text-green-400 font-semibold">
                    à vista.
                  </div>
                </div>

                {/* Purchase Button */}
                <div className="mt-8">
                  <a
                    href="https://pay.hotmart.com/N101672544H?checkoutMode=10&bid=1682404373868"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button size="large" className="w-full">
                      Garantir Minha Vaga - 12x R$ 517,12
                    </Button>
                  </a>
                  <p className="font-poppins text-xs text-gray-400 mt-2 text-center">
                    ou R$ 5.000 à vista
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <p className="font-poppins text-lg text-gray-600 mb-8">
              Investimento que se paga sozinho com os primeiros resultados aplicados.
            </p>
            <a
              href="https://pay.hotmart.com/N101672544H?checkoutMode=10&bid=1682404373868"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button size="large" className="animate-scale-in">
                Garantir Minha Vaga Agora
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OfferSection;