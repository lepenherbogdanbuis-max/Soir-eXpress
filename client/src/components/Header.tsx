import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (id: string) => {
    if (location !== '/') {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToHome = () => {
    if (location !== '/') {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary-border shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToHome}
            className="font-heading font-bold text-2xl text-primary-foreground"
            data-testid="link-header-logo"
          >
            SoiréeXpress
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={scrollToHome}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              data-testid="link-header-accueil"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('catalogue')}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              data-testid="link-header-tarifs"
            >
              Tarifs
            </button>
            <button 
              onClick={() => scrollToSection('commander')}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              data-testid="link-header-commander"
            >
              Commander
            </button>
            <Link 
              href="/about"
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              data-testid="link-header-about"
            >
              À propos
            </Link>
            <Button 
              variant="secondary"
              size="sm"
              onClick={() => scrollToSection('commander')}
              data-testid="button-header-commander"
            >
              Commander maintenant
            </Button>
          </nav>

          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button 
              onClick={scrollToHome}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-left"
              data-testid="link-mobile-accueil"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('catalogue')}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-left"
              data-testid="link-mobile-tarifs"
            >
              Tarifs
            </button>
            <button 
              onClick={() => scrollToSection('commander')}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-left"
              data-testid="link-mobile-commander"
            >
              Commander
            </button>
            <Link 
              href="/about"
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-left"
              data-testid="link-mobile-about"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <Button 
              variant="secondary"
              size="sm"
              onClick={() => scrollToSection('commander')}
              className="w-full"
              data-testid="button-mobile-commander"
            >
              Commander maintenant
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
