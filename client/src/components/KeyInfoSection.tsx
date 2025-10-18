import { Card } from "@/components/ui/card";
import { Truck, Phone, CreditCard } from "lucide-react";

export default function KeyInfoSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-background to-[hsl(30,70%,98%)]">
      <div className="max-w-5xl mx-auto">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 shadow-xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Truck className="w-10 h-10 text-primary" />
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
                  LIVRAISON GRATUITE
                </h2>
              </div>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Vous ne payez QUE vos produits
              </p>
            </div>

            <div className="h-px bg-primary/20 my-6"></div>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-8 h-8 text-primary" />
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                  UNE QUESTION SUR VOTRE COMMANDE ?
                </h3>
              </div>
              <a 
                href="tel:0766458205"
                className="inline-block text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
                data-testid="link-phone-contact"
              >
                07 66 45 82 05
              </a>
            </div>

            <div className="h-px bg-primary/20 my-6"></div>

            <div className="flex items-center justify-center gap-3">
              <CreditCard className="w-8 h-8 text-primary" />
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Paiement sécurisé sur place
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
