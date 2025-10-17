import { Button } from "@/components/ui/button";
import { Sparkles, Wine, Coffee, Pizza } from "lucide-react";

export default function HeroSection() {
  const scrollToOrder = () => {
    document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[hsl(30,70%,93%)]/20 via-transparent to-transparent opacity-50"></div>
      
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-[10%] w-8 h-8 text-primary-foreground/20 animate-pulse" />
        <Sparkles className="absolute top-40 right-[15%] w-6 h-6 text-primary-foreground/15 animate-pulse delay-75" />
        <Wine className="absolute bottom-32 left-[20%] w-10 h-10 text-primary-foreground/10 animate-pulse delay-150" />
        <Coffee className="absolute top-[60%] right-[25%] w-8 h-8 text-primary-foreground/15 animate-pulse delay-300" />
        <Pizza className="absolute bottom-48 right-[10%] w-9 h-9 text-primary-foreground/10 animate-pulse delay-500" />
        <Sparkles className="absolute top-[30%] left-[5%] w-5 h-5 text-primary-foreground/20 animate-pulse delay-700" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl text-primary-foreground mb-4" data-testid="text-logo">
            SoiréeXpress
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-6 font-semibold">
            La soirée n'est jamais finie
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 leading-relaxed max-w-3xl mx-auto" data-testid="text-description">
          C'est votre service de livraison nocturne d'alcool, boissons et snacks à Lorient et alentours.
          Disponible Lun-Mar de 22h à 5h et Mer-Dim de 1h à 5h, SoiréeXpress dépanne vos soirées, afters, anniversaires ou simples envies de dernière minute.
        </p>
        
        <Button 
          size="lg" 
          variant="secondary"
          className="text-lg px-10 py-6 h-auto rounded-full font-semibold shadow-xl hover:scale-105 transition-transform"
          onClick={scrollToOrder}
          data-testid="button-commander"
        >
          Commander maintenant
        </Button>
      </div>
    </section>
  );
}
