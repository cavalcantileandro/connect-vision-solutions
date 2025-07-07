import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento:
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Mensagem: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5581996854993?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-tech bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar a tecnologia da sua empresa? Fale conosco!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Solicitar Orçamento</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(81) 99999-9999"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="service">Serviço de Interesse</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-input rounded-md bg-background"
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="cabeamento">Cabeamento Estruturado</option>
                    <option value="videomonitoramento">Videomonitoramento</option>
                    <option value="informatica">Informática e Suporte</option>
                    <option value="voip">Serviços de VoIP</option>
                    <option value="completo">Projeto Completo</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva suas necessidades..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <a href="tel:81996854993" className="text-primary hover:text-primary-glow">
                      (81) 99685-4993
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Instagram className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <a 
                      href="https://www.instagram.com/gf_connect/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow"
                    >
                      @gf_connect
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Atendimento</p>
                    <p className="text-muted-foreground">Recife e Região Metropolitana</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Horário de Atendimento</p>
                    <p className="text-muted-foreground">Segunda à Sexta: 8h às 18h</p>
                    <p className="text-muted-foreground">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Atendimento Rápido</h3>
                <p className="mb-6 opacity-90">
                  Orçamentos em até 24 horas. Entre em contato agora mesmo!
                </p>
                <a href="https://wa.me/5581996854993" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white hover:text-white"
                  >
                    <Phone className="mr-2" size={20} />
                    WhatsApp Direto
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;