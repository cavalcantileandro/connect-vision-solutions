import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">GF Connect</h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Especialistas em soluções tecnológicas para empresas. 
              Conectamos sua empresa ao futuro com qualidade e eficiência.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/gf_connect/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="tel:81996854993"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Cabeamento Estruturado</li>
              <li>Videomonitoramento</li>
              <li>Informática e Suporte</li>
              <li>Serviços de VoIP</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(81) 99685-4993</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram size={16} />
                <span>@gf_connect</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Recife - PE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {currentYear} GF Connect. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;