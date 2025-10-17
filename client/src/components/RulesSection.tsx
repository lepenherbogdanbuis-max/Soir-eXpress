import { Card } from "@/components/ui/card";

const rules = [
  "Service réservé aux personnes majeures (18+).",
  "Livraison : Lun-Mar de 22h à 5h, Mer-Dim de 1h à 5h, dans la zone couverte.",
  "Minimum de commande : 30 € TTC.",
  "Paiement sur place (espèces ou CB).",
  "SoiréeXpress se réserve le droit de refuser une commande (comportement inapproprié, zone hors périmètre, ou abus d'alcool).",
  "Aucun remboursement après livraison.",
  "Le client reste responsable de sa consommation d'alcool.",
  "SoiréeXpress décline toute responsabilité en cas d'usage inapproprié des produits livrés.",
  "En commandant, le client accepte ces conditions.",
];

export default function RulesSection() {
  return (
    <section className="py-20 px-6 bg-[hsl(30,70%,93%)]" id="reglement">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12 text-foreground" data-testid="text-rules-title">
          Règlement SoiréeXpress
        </h2>
        
        <Card className="p-8" data-testid="card-rules">
          <ul className="space-y-4">
            {rules.map((rule, index) => (
              <li 
                key={index} 
                className="flex gap-3 text-foreground"
                data-testid={`text-rule-${index}`}
              >
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
