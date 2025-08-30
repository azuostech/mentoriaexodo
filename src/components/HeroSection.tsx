import React from 'react';
import { ArrowRight, Users, Award } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black-deep via-gray-900 to-black-deep overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-black-deep/50 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gold-premium/10 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-gold-premium/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      <Container className="relative z-10 flex flex-col justify-center min-h-screen py-20">
        {/* Authority Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="flex items-center gap-2 bg-gold-premium/10 border border-gold-premium/30 rounded-full px-6 py-2 backdrop-blur-sm">
            <Users className="w-5 h-5 text-gold-premium" />
            <span className="text-gold-premium font-poppins font-medium">+150 Empresários Transformados</span>
            <Award className="w-5 h-5 text-gold-premium" />
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Transforme a gestão  <span className="text-gold-premium">financeira </span>
            do seu negócio 
          </h1>
          
          <p className="font-poppins text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Mentoria premium para empresários que querem transformar sua gestão financeira, 
            maximizar resultados e conquistar total controle sobre seu negócio.
          </p>

          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button size="large" className="group">
              Quero Entrar na Mentoria Êxodo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-poppins">Metodologia Comprovada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gold-premium rounded-full animate-pulse" />
              <span className="font-poppins">Acompanhamento Direto</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              <span className="font-poppins">Resultados Garantidos</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;