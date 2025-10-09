import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function OrderSection() {
  const whatsappMessage = encodeURIComponent(
    `Salut SoiréeXpress 👋

Nom : 
Adresse : 
Commande : 
Heure souhaitée : 
Paiement : 

Merci 🍻`
  );

  const whatsappLink = `https://wa.me/33766458205?text=${whatsappMessage}`;

  return (
    <section className="py-20 px-6 bg-primary" id="commander">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12 text-primary-foreground" data-testid="text-order-title">
          Commander
        </h2>
        
        <div className="text-center mb-12">
          <p className="text-xl text-primary-foreground/90 mb-6">
            📞 Commande uniquement par message
          </p>
          
          <a 
            href="tel:0766458205" 
            className="inline-flex items-center gap-3 text-3xl md:text-4xl font-bold text-primary-foreground hover:text-primary-foreground/90 transition-colors"
            data-testid="link-phone"
          >
            <Phone className="w-8 h-8" />
            07 66 45 82 05
          </a>
          
          <p className="text-primary-foreground/80 mt-4">
            Commande par SMS, WhatsApp ou appel direct
          </p>
        </div>

        <Card className="p-8 mb-8 bg-[hsl(30,70%,93%)]" data-testid="card-message-example">
          <h3 className="font-semibold text-lg mb-4 text-foreground">
            📝 Exemple de message à envoyer :
          </h3>
          <pre className="font-mono text-sm bg-background/50 p-4 rounded-md text-foreground whitespace-pre-wrap" data-testid="text-message-template">
{`Salut SoiréeXpress 👋

Nom : Thomas
Adresse : 14 rue du Stade, Guidel
Commande : 1 pack Despe + 1 Chips Breizh + 1 Briquet
Heure souhaitée : 2h15
Paiement : Carte

Merci les gars 🍻`}
          </pre>
        </Card>

        <div className="text-center">
          <Button 
            size="lg" 
            asChild
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-lg px-10 py-6 h-auto rounded-full font-semibold shadow-xl hover:scale-105 transition-transform border-0"
            data-testid="button-whatsapp"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <SiWhatsapp className="w-6 h-6" />
              📩 Envoyer mon message
            </a>
          </Button>
          
          <p className="text-sm text-primary-foreground/70 mt-6">
            Minimum de commande : 30 € • Livraison de 1h30 à 5h
          </p>
        </div>
      </div>
    </section>
  );
}
