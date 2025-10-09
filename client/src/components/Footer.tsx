import { SiInstagram } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 bg-[hsl(0,0%,11%)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl text-[hsl(30,70%,93%)] mb-2" data-testid="text-footer-logo">
              SoiréeXpress
            </h3>
            <p className="text-[hsl(30,70%,93%)]/80 text-sm mb-3" data-testid="text-footer-tagline">
              Le plan B préféré des fêtards 🍾
            </p>
            <p className="text-[hsl(30,70%,93%)]/70 text-xs" data-testid="text-footer-feedback">
              N'hésitez pas à faire votre retour sur Insta et à nous envoyer des messages pour votre retour ou idées
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-4 items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[hsl(30,70%,93%)]/80 hover:text-primary transition-colors"
              data-testid="link-accueil"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('catalogue')}
              className="text-[hsl(30,70%,93%)]/80 hover:text-primary transition-colors"
              data-testid="link-catalogue"
            >
              Catalogue
            </button>
            <button 
              onClick={() => scrollToSection('commander')}
              className="text-[hsl(30,70%,93%)]/80 hover:text-primary transition-colors"
              data-testid="link-commander"
            >
              Commander
            </button>
            <button 
              onClick={() => scrollToSection('reglement')}
              className="text-[hsl(30,70%,93%)]/80 hover:text-primary transition-colors"
              data-testid="link-reglement"
            >
              Règlement
            </button>
          </nav>
          
          <div className="flex justify-center md:justify-end items-center">
            <a 
              href="https://www.instagram.com/soireexpress" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[hsl(30,70%,93%)]/80 hover:text-primary transition-colors"
              data-testid="link-instagram"
              aria-label="Instagram"
            >
              <SiInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-[hsl(30,70%,93%)]/20">
          <p className="text-[hsl(30,70%,93%)]/70 text-sm" data-testid="text-copyright">
            Copyright © 2025 SoiréeXpress
          </p>
        </div>
      </div>
    </footer>
  );
}
