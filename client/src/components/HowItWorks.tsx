import { ShoppingCart, Smartphone, Truck, PartyPopper } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    icon: ShoppingCart,
    title: "Choisis tes produits",
    description: "Parcours notre catalogue plus bas 👇",
  },
  {
    number: 2,
    icon: Smartphone,
    title: "Envoie un message au 07 66 45 82 05",
    description: "Commande par SMS, WhatsApp ou appel. La commande sera validée dès que notre livreur vous contactera par WhatsApp ou par appel.",
  },
  {
    number: 3,
    icon: Truck,
    title: "Livraison rapide sur place",
    description: "Paiement en espèces ou carte",
  },
  {
    number: 4,
    icon: PartyPopper,
    title: "Profite de ta soirée",
    description: "C'est aussi simple que ça ! 🎉",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-[hsl(30,70%,93%)]" id="comment-ca-marche">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16 text-foreground" data-testid="text-how-it-works-title">
          Comment ça marche
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card 
                key={step.number} 
                className="p-8 text-center hover-elevate transition-all"
                data-testid={`card-step-${step.number}`}
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                
                <div className="text-5xl font-bold text-primary mb-4" data-testid={`text-step-number-${step.number}`}>
                  {step.number}
                </div>
                
                <h3 className="font-semibold text-xl mb-3 text-foreground" data-testid={`text-step-title-${step.number}`}>
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground" data-testid={`text-step-description-${step.number}`}>
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
