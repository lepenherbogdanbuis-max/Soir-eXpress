import { Package, Clock, MapPin, CreditCard } from "lucide-react";

const infos = [
  {
    icon: Package,
    label: "Minimum de commande",
    value: "30 €",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun-Mar: 22h-5h | Mer-Dim: 1h-5h",
  },
  {
    icon: MapPin,
    label: "Zone",
    value: "Lorient et alentours",
  },
  {
    icon: CreditCard,
    label: "Paiement",
    value: "Espèces ou CB",
  },
];

export default function PracticalInfo() {
  return (
    <section className="py-12 px-6 bg-primary" id="infos">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infos.map((info, index) => {
            const Icon = info.icon;
            return (
              <div 
                key={index} 
                className="text-center"
                data-testid={`info-${index}`}
              >
                <Icon className="w-8 h-8 text-primary-foreground/90 mx-auto mb-3" />
                <div className="text-sm text-primary-foreground/80 mb-1" data-testid={`text-info-label-${index}`}>
                  {info.label}
                </div>
                <div className="text-xl font-bold text-primary-foreground" data-testid={`text-info-value-${index}`}>
                  {info.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
