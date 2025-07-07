import { Button } from '@/components/ui/button';
import { ArrowRight, Network, Shield, Monitor, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-tech.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Soluções em
            <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Tecnologia e Conectividade
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
            Especialistas em Cabeamento Estruturado, Videomonitoramento, 
            Informática e VoIP. Conectando sua empresa ao futuro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <a href="tel:81996854993">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/30 text-white hover:text-white"
              >
                <Phone className="mr-2" size={20} />
                (81) 99685-4993
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Network className="mx-auto mb-2 text-white/80" size={32} />
              <h3 className="text-2xl font-bold text-white">Cabeamento</h3>
              <p className="text-white/80">Estruturado</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto mb-2 text-white/80" size={32} />
              <h3 className="text-2xl font-bold text-white">Segurança</h3>
              <p className="text-white/80">CCTV</p>
            </div>
            <div className="text-center">
              <Monitor className="mx-auto mb-2 text-white/80" size={32} />
              <h3 className="text-2xl font-bold text-white">Suporte</h3>
              <p className="text-white/80">Técnico</p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto mb-2 text-white/80" size={32} />
              <h3 className="text-2xl font-bold text-white">VoIP</h3>
              <p className="text-white/80">Telefonia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;