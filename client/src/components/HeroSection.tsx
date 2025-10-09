import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToOrder = () => {
    document.getElementById('commander')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[hsl(30,70%,93%)]/20 via-transparent to-transparent opacity-50"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl text-primary-foreground mb-4" data-testid="text-logo">
            SoiréeXpress
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/95 mb-12 leading-relaxed font-medium" data-testid="text-slogan">
          La soirée n'est jamais finie — SoiréeXpress te livre entre 1h30 et 5h du matin 🍾
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
