import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToOrder = () => {
    document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[hsl(30,70%,93%)]/20 via-transparent to-transparent opacity-50"></div>
      
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
          Disponible tous les soirs de 1h30 à 5h30 du matin, SoirExpress dépanne vos soirées, afters, anniversaires ou simples envies de dernière minute.
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
