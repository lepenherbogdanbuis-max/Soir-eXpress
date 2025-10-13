import { MapPin, Clock, Euro } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const cities = [
  "Lorient",
  "Lanester", 
  "Quéven",
  "Pont-Scorff",
  "Rédené",
  "Guidel",
  "Larmor-Plage",
  "Moëlan-sur-Mer",
  "Quimperlé",
];

export default function DeliveryMap() {
  return (
    <section className="py-20 px-6 bg-background" id="zone">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-8 text-foreground" data-testid="text-map-title">
          Zone de livraison
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Carte visuelle de la zone */}
          <Card className="p-8 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5" data-testid="delivery-zone-visual">
            <div className="relative">
              <div className="w-48 h-48 rounded-full border-4 border-primary/30 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-4 border-primary/50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2">
                <Badge className="bg-primary text-primary-foreground">25 km</Badge>
              </div>
            </div>
            <p className="mt-6 text-center font-semibold text-lg text-foreground">
              Rayon de 25 km autour de Lorient
            </p>
          </Card>

          {/* Villes desservies */}
          <Card className="p-8" data-testid="cities-list">
            <h3 className="font-semibold text-xl mb-6 text-center text-foreground flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Villes desservies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {cities.map((city, index) => (
                <div 
                  key={city} 
                  className="flex items-center gap-2 text-foreground"
                  data-testid={`city-item-${index}`}
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{city}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground text-center">
              Et toutes les communes dans un rayon de 25 km
            </p>
          </Card>
        </div>

        {/* Informations importantes */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover-elevate transition-all" data-testid="info-hours">
            <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Horaires</h4>
            <p className="text-muted-foreground text-sm">
              1h30 - 5h00 du matin
            </p>
          </Card>

          <Card className="p-6 text-center hover-elevate transition-all" data-testid="info-minimum">
            <Euro className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Commande minimum</h4>
            <p className="text-muted-foreground text-sm">
              30 € minimum
            </p>
          </Card>

          <Card className="p-6 text-center hover-elevate transition-all" data-testid="info-delivery">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Livraison gratuite</h4>
            <p className="text-muted-foreground text-sm">
              0 frais de livraison
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
