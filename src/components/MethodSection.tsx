import React from 'react';
import { PieChart, TrendingUp, Banknote } from 'lucide-react';
import Container from './ui/Container';

const MethodSection: React.FC = () => {
  const pillars = [
    {
      icon: <PieChart className="w-12 h-12 text-gold-premium" />,
      title: "Organizar Finanças",
      subtitle: "PILAR 1",
      description: "Tenha clareza e controle total sobre suas finanças empresariais. Saiba exatamente onde está seu dinheiro e como está sendo utilizado.",
      benefits: [
        "Fluxo de caixa organizado",
        "Controle de receitas e despesas", 
        "Planejamento orçamentário",
        "Dashboard financeiro personalizado"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-gold-premium" />,
      title: "Aumentar Lucratividade",
      subtitle: "PILAR 2", 
      description: "Implemente estratégias comprovadas para maximizar seus resultados e otimizar a rentabilidade do seu negócio.",
      benefits: [
        "Análise de margem de lucro",
        "Otimização de processos",
        "Precificação estratégica",
        "Redução de custos desnecessários"
      ]
    },
    {
      icon: <Banknote className="w-12 h-12 text-gold-premium" />,
      title: "Conquistar Liberdade Financeira",
      subtitle: "PILAR 3",
      description: "Desenvolva um sistema de controle sólido da sua lutratividade, fluxo de caixa e indicadores de um negócio resiliente a impactos financeiros.",
      benefits: [
        "Diversificação de investimentos",
        "Fontes de receitas previsíveis",
        "Estratégias de proteção patrimonial",
        "Distribuição de Lucros"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-elegant to-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black-deep mb-6">
            O <span className="text-gold-premium">Método Êxodo</span>
          </h2>
          <p className="font-poppins text-xl text-gray-dark max-w-3xl mx-auto">
            Três pilares fundamentais que vão transformar sua relação com o dinheiro 
            e garantir sua liberdade financeira.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-4 relative overflow-hidden h-full">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-premium/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Pillar Badge */}
                <div className="inline-block bg-black-deep text-gold-premium px-4 py-2 rounded-full font-poppins font-semibold text-sm mb-6">
                  {pillar.subtitle}
                </div>
                
                {/* Icon */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-playfair text-2xl font-bold text-black-deep mb-4">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="font-poppins text-gray-600 mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                
                {/* Benefits */}
                <ul className="space-y-3">
                  {pillar.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold-premium rounded-full mt-2 flex-shrink-0" />
                      <span className="font-poppins text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MethodSection;