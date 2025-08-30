import React from 'react';
import { Star, Quote } from 'lucide-react';
import Container from './ui/Container';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "CEO - TechStart Solutions",
      image: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      content: "Em 6 meses, consegui aumentar minha margem de lucro em 40% e organizar completamente meu fluxo de caixa. A metodologia do Jackson é realmente transformadora.",
      result: "+40% Lucratividade"
    },
    {
      name: "Ana Paula Silva",
      role: "Fundadora - EcoDesign",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      content: "Finalmente consegui ter clareza sobre meus investimentos e criar um plano sólido para minha aposentadoria. Jackson mudou minha visão sobre dinheiro.",
      result: "Liberdade Financeira"
    },
    {
      name: "Roberto Lima",
      role: "Diretor - Construtora Lima",
      image: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      content: "Saí do vermelho para um patrimônio de 7 dígitos em menos de 2 anos. O acompanhamento direto fez toda a diferença nos meus resultados.",
      result: "R$ 1M+ Patrimônio"
    }
  ];

  return (
    <section className="py-20 bg-black-deep text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-gold-premium rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gold-premium rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Histórias de <span className="text-gold-premium">Transformação</span>
          </h2>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça empresários que mudaram suas vidas financeiras com a Mentoria Êxodo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white text-black-deep p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 relative overflow-hidden">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-gold-premium/30 absolute top-6 right-6" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-premium fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="font-poppins text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Result Badge */}
                <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-poppins font-semibold text-sm mb-6">
                  {testimonial.result}
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-poppins font-semibold text-black-deep">
                      {testimonial.name}
                    </div>
                    <div className="font-poppins text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Social Proof */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gold-premium/10 border border-gold-premium/30 rounded-full px-8 py-4">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-8 h-8 bg-gold-premium rounded-full border-2 border-white" />
              ))}
            </div>
            <span className="font-poppins text-gray-300">
              +150 empresários já transformaram suas finanças
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;