import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-tech bg-clip-text text-transparent">
              GF Connect
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:81996854993" 
              className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors"
            >
              <Phone size={16} />
              <span>(81) 99685-4993</span>
            </a>
            <a 
              href="https://www.instagram.com/gf_connect/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <a 
                  href="tel:81996854993" 
                  className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors"
                >
                  <Phone size={16} />
                  <span>(81) 99685-4993</span>
                </a>
                <a 
                  href="https://www.instagram.com/gf_connect/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-glow transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;