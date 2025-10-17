import { SiInstagram, SiFacebook } from "react-icons/si";
import { Link, useLocation } from "wouter";
import { AlertTriangle } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Footer() {
  const [location, setLocation] = useLocation();
  const pendingScrollRef = useRef<string | null>(null);

  useEffect(() => {
    // Si on est sur la page d'accueil et qu'on a un scroll en attente
    if (location === '/' && pendingScrollRef.current) {
      const sectionId = pendingScrollRef.current;
      pendingScrollRef.current = null;

      // Essayer de scroller avec un retry pour s'assurer que l'élément existe
      const scrollToElement = (retries = 10) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (retries > 0) {
          setTimeout(() => scrollToElement(retries - 1), 50);
        }
      };

      scrollToElement();
    }
  }, [location]);

  const handleNavigation = (sectionId?: string) => {
    if (location !== '/') {
      // Si on n'est pas sur la page d'accueil, enregistrer le scroll en attente
      if (sectionId) {
        pendingScrollRef.current = sectionId;
      }
      setLocation('/');
      
      // Si pas de section spécifique, juste scroller en haut après navigation
      if (!sectionId) {
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      }
    } else {
      // Si on est déjà sur la page d'accueil, scroller directement
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
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
              onClick={() => handleNavigation()}
              className="text-[hsl(30,70%,93%)]/80 hover:text-primary transition-colors"
              data-testid="link-accueil"
            >
              Accueil
            </button>
            <button 
              onClick={() => handleNavigation('catalogue')}
              className="text-[hsl(30,70%,93%)]/80 hover:text-primary transition-colors"
              data-testid="link-catalogue"
            >
              Catalogue
            </button>
            <button 
              onClick={() => handleNavigation('commander')}
              className="text-[hsl(30,70%,93%)]/80 hover:text-primary transition-colors"
              data-testid="link-commander"
            >
              Commander
            </button>
            <button 
              onClick={() => handleNavigation('reglement')}
              className="text-[hsl(30,70%,93%)]/80 hover:text-primary transition-colors"
              data-testid="link-reglement"
            >
              Règlement
            </button>
          </nav>
          
          <div className="flex justify-center md:justify-end items-center gap-6">
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
            <a 
              href="https://www.facebook.com/profile.php?id=61581789040254" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[hsl(30,70%,93%)]/80 hover:text-primary transition-colors"
              data-testid="link-facebook"
              aria-label="Facebook"
            >
              <SiFacebook className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-[hsl(30,70%,93%)]/20 space-y-3">
          <div className="flex justify-center gap-4 text-sm">
            <Link 
              href="/cgu"
              className="text-[hsl(30,70%,93%)]/70 hover:text-primary transition-colors"
              data-testid="link-cgu"
            >
              CGU
            </Link>
            <span className="text-[hsl(30,70%,93%)]/30">•</span>
            <Link 
              href="/politique-de-confidentialite"
              className="text-[hsl(30,70%,93%)]/70 hover:text-primary transition-colors"
              data-testid="link-privacy"
            >
              Politique de confidentialité
            </Link>
          </div>
          
          <p className="text-[hsl(30,70%,93%)]/70 text-xs flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
            <span>L'abus d'alcool est dangereux pour la santé. Ne conduisez pas après avoir consommé de l'alcool. Des éthylotests sont disponibles sur notre site.</span>
          </p>
          
          <p className="text-[hsl(30,70%,93%)]/70 text-sm" data-testid="text-copyright">
            Copyright © 2025 SoiréeXpress
          </p>
        </div>
      </div>
    </footer>
  );
}
