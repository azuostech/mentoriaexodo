import React from 'react';
import { AlertTriangle, TrendingDown, Brain, Clock } from 'lucide-react';
import Container from './ui/Container';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "Falta de Organização Financeira",
      description: "Suas contas estão espalhadas, sem controle real sobre entradas e saídas, gerando ansiedade constante."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      title: "Lucros Não Maximizados",
      description: "Você trabalha muito, mas não consegue extrair o máximo de rentabilidade do seu negócio."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "Patrimônio Sem Estratégia",
      description: "Não tem um plano claro para construir e proteger seu patrimônio a longo prazo."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Ansiedade Financeira",
      description: "Vive preocupado com o futuro financeiro, sem a tranquilidade de ter controle total sobre suas finanças."
    }
  ];

  return (
    <section className="py-20 bg-gray-elegant">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black-deep mb-6">
            Se você é um empresário que...
          </h2>
          <p className="font-poppins text-xl text-gray-dark max-w-3xl mx-auto">
            Reconhece essas situações no seu dia a dia, você não está sozinho. 
            Milhares de empresários enfrentam os mesmos desafios financeiros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-100 rounded-full">
                  {problem.icon}
                </div>
                <h3 className="font-poppins font-semibold text-lg text-black-deep mb-3">
                  {problem.title}
                </h3>
                <p className="font-poppins text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="font-poppins text-2xl font-medium text-gray-dark">
            É hora de <span className="text-gold-premium font-semibold">transformar essa realidade</span> de uma vez por todas.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSection;