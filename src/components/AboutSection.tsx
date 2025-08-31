import React from 'react';
import { Award, Users, TrendingUp, Star } from 'lucide-react';
import Container from './ui/Container';

const AboutSection: React.FC = () => {
  const achievements = [
    { icon: <Users className="w-6 h-6" />, number: "150+", label: "Empresários Transformados" },
    { icon: <TrendingUp className="w-6 h-6" />, number: "10+", label: "Anos de Experiência" },
    { icon: <Award className="w-6 h-6" />, number: "R$ 50M+", label: "Em Patrimônio Gerenciado" },
    { icon: <Star className="w-6 h-6" />, number: "4.9", label: "Avaliação dos Alunos" }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src="/jackson.png?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Jackson Souza - Mentor financeiro"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-black-deep text-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-gold-premium" />
                  <span className="font-poppins font-semibold">Certificado</span>
                </div>
                <p className="font-poppins text-sm text-gray-300">
                  Especialista em Planejamento Financeiro Empresarial
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black-deep mb-6">
              Conheça <span className="text-gold-premium">Jackson Souza</span>
            </h2>
            
            <p className="font-poppins text-xl text-gray-600 mb-8 leading-relaxed">
              Especialista em planejamento financeiro empresarial com mais de 10 anos de experiência. 
              Jackson desenvolveu uma metodologia única que já transformou a vida de centenas de empresários, 
              ajudando-os a organizar suas finanças, aumentar a lucratividade e conquistar a total controle de               seus negócios.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-gray-elegant rounded-xl hover:bg-gold-premium/10 transition-colors duration-300"
                >
                  <div className="flex justify-center mb-2 text-gold-premium">
                    {achievement.icon}
                  </div>
                  <div className="font-playfair text-2xl font-bold text-black-deep">
                    {achievement.number}
                  </div>
                  <div className="font-poppins text-sm text-gray-600">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-gold-premium pl-6 italic">
              <p className="font-poppins text-lg text-gray-600 mb-4">
                "Minha missão é simples: transformar a vida financeira de empresários brasileiros, 
                dando a eles as ferramentas e estratégias para alcançar total controle de seus negócios."
              </p>
              <footer className="font-poppins font-semibold text-black-deep">
                — Jackson Souza
              </footer>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;