import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Network, Shield, Monitor, Phone, Cable, Camera, Wrench, Headphones } from 'lucide-react';
import structuredCablingImage from '@/assets/structured-cabling.jpg';
import videoMonitoringImage from '@/assets/video-monitoring.jpg';
import itSupportImage from '@/assets/it-support.jpg';
import voipSystemImage from '@/assets/voip-system.jpg';

const Services = () => {
  const services = [
    {
      icon: Network,
      title: "Cabeamento Estruturado",
      description: "Projeto e instalação de redes estruturadas seguindo as normas técnicas. Infraestrutura robusta para sua conectividade.",
      image: structuredCablingImage,
      features: [
        "Projeto técnico detalhado",
        "Instalação profissional",
        "Certificação de rede",
        "Garantia de qualidade"
      ]
    },
    {
      icon: Shield,
      title: "Videomonitoramento",
      description: "Sistemas de segurança com câmeras IP de alta definição. Monitoramento 24/7 para proteger seu patrimônio.",
      image: videoMonitoringImage,
      features: [
        "Câmeras Full HD/4K",
        "Acesso remoto",
        "Armazenamento em nuvem",
        "Monitoramento 24h"
      ]
    },
    {
      icon: Monitor,
      title: "Informática e Suporte",
      description: "Manutenção preventiva e corretiva de equipamentos. Suporte técnico especializado para sua empresa.",
      image: itSupportImage,
      features: [
        "Manutenção preventiva",
        "Suporte remoto",
        "Configuração de equipamentos",
        "Consultoria técnica"
      ]
    },
    {
      icon: Phone,
      title: "Serviços de VoIP",
      description: "Telefonia IP moderna e eficiente. Reduza custos e aumente a produtividade da sua comunicação.",
      image: voipSystemImage,
      features: [
        "Telefonia IP completa",
        "Integração com sistemas",
        "Economia de custos",
        "Recursos avançados"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-tech bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em tecnologia para empresas de todos os tamanhos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <IconComponent size={32} className="mr-3" />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                
                <CardHeader>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Cable className="mx-auto mb-2 text-primary" size={32} />
              <h4 className="font-semibold text-lg">50+</h4>
              <p className="text-muted-foreground">Projetos Realizados</p>
            </div>
            <div className="text-center">
              <Camera className="mx-auto mb-2 text-primary" size={32} />
              <h4 className="font-semibold text-lg">100+</h4>
              <p className="text-muted-foreground">Câmeras Instaladas</p>
            </div>
            <div className="text-center">
              <Wrench className="mx-auto mb-2 text-primary" size={32} />
              <h4 className="font-semibold text-lg">24/7</h4>
              <p className="text-muted-foreground">Suporte Técnico</p>
            </div>
            <div className="text-center">
              <Headphones className="mx-auto mb-2 text-primary" size={32} />
              <h4 className="font-semibold text-lg">500+</h4>
              <p className="text-muted-foreground">Ramais VoIP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;