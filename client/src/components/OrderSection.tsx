import { Card } from "@/components/ui/card";
import { ShoppingCart, CreditCard, MapPin, Send } from "lucide-react";

const orderSteps = [
  {
    icon: ShoppingCart,
    title: "1. Sélectionne tes produits",
    description: "Ajoute les produits au panier avec les quantités souhaitées",
  },
  {
    icon: CreditCard,
    title: "2. Choisis ton mode de paiement",
    description: "Carte bancaire ou espèces (paiement à la livraison)",
  },
  {
    icon: MapPin,
    title: "3. Entre ton adresse",
    description: "Saisis ton adresse de livraison à Lorient et alentours",
  },
  {
    icon: Send,
    title: "4. Envoie sur WhatsApp",
    description: "Ton panier sera automatiquement envoyé au livreur via WhatsApp",
  },
];

export default function OrderSection() {
  return (
    <section className="py-20 px-6 bg-primary" id="commander">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12 text-primary-foreground" data-testid="text-order-title">
          Comment commander
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {orderSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-[hsl(30,70%,93%)] hover-elevate transition-all"
                data-testid={`card-order-step-${index + 1}`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm text-primary-foreground/70">
            Minimum de commande : 30 € • Livraison Lun-Mar: 22h-5h | Mer-Dim: 1h-5h
          </p>
          
          <Card className="p-6 bg-[hsl(30,70%,93%)] max-w-2xl mx-auto" data-testid="card-delivery-info">
            <p className="text-sm text-muted-foreground mb-2">
              ✅ Après validation, vous recevrez une confirmation du livreur sur WhatsApp.
            </p>
            <p className="text-sm text-muted-foreground">
              ⚠️ Si vous ne recevez aucune réponse dans les 30 minutes, la commande est automatiquement annulée.
            </p>
            <p className="text-sm font-medium text-foreground mt-2">
              📞 Le livreur vous appellera lorsqu'il sera arrivé.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
