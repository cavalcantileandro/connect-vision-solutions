import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      company: "Empresa de Logística",
      text: "A GF Connect revolucionou nossa infraestrutura de TI. O cabeamento estruturado foi impecável e o suporte técnico é excelente. Recomendo para qualquer empresa que busca qualidade.",
      rating: 5,
      service: "Cabeamento Estruturado"
    },
    {
      name: "Ana Paula Silva",
      company: "Clínica Médica",
      text: "O sistema de videomonitoramento instalado pela equipe nos deu total segurança. As câmeras são de alta qualidade e o acesso remoto funciona perfeitamente. Estamos muito satisfeitos!",
      rating: 5,
      service: "Videomonitoramento"
    },
    {
      name: "Roberto Santos",
      company: "Escritório de Advocacia",
      text: "Migrar para VoIP foi a melhor decisão. Reduzimos 60% dos custos com telefonia e ganhamos recursos que não tínhamos antes. A GF Connect fez um trabalho excepcional.",
      rating: 5,
      service: "VoIP"
    },
    {
      name: "Marina Costa",
      company: "Loja de Varejo",
      text: "O suporte técnico da GF Connect é incomparável. Sempre que precisamos, eles estão disponíveis e resolvem rapidamente. Nossa operação nunca para por problemas de TI.",
      rating: 5,
      service: "Suporte Técnico"
    },
    {
      name: "Eduardo Lima",
      company: "Indústria Alimentícia",
      text: "Contratamos um projeto completo: cabeamento, CCTV e VoIP. Tudo foi entregue no prazo e funcionando perfeitamente. Profissionalismo em todos os aspectos.",
      rating: 5,
      service: "Projeto Completo"
    },
    {
      name: "Fernanda Oliveira",
      company: "Consultoria Contábil",
      text: "Excelente atendimento desde o primeiro contato. A equipe é muito técnica e explica tudo detalhadamente. Nosso escritório ganhou muita produtividade com as soluções implementadas.",
      rating: 5,
      service: "Consultoria TI"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-tech bg-clip-text text-transparent">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 relative">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Quote className="text-primary/20" size={32} />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <div className="mt-2">
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-muted/50 rounded-full px-8 py-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">4.9/5</p>
              <p className="text-sm text-muted-foreground">Avaliação média</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;