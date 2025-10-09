import { Wine, Coffee, Popcorn, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const products = {
  alcool: [
    { name: "Desperados 33cl", price: "4 €" },
    { name: "Pack Desperados 12x33cl", price: "35 €" },
    { name: "La Chouffe 33cl", price: "7 €" },
    { name: "Vodka Poliakoff 70cl", price: "35 €" },
    { name: "Rhum brun Havana Club 70cl", price: "39 €" },
    { name: "Rhum blanc Havana Club 70cl", price: "38 €" },
    { name: "Whisky Clan Campbell 70cl", price: "40 €" },
    { name: "Ricard 70cl", price: "38 €" },
    { name: "GET 27 70cl", price: "40 €" },
  ],
  softs: [
    { name: "Coca 1L", price: "5 €" },
    { name: "Fanta 1L", price: "5 €" },
    { name: "Limonade Plancoët 1.5L", price: "5 €" },
    { name: "Orangina 1L", price: "5 €" },
    { name: "Eau Cristaline 1L", price: "2 €" },
    { name: "Red Bull", price: "5 €" },
    { name: "Boisson énergisante", price: "5 €" },
  ],
  snacks: [
    { name: "Chips Breizh 125g", price: "5 €" },
    { name: "Pringles", price: "5 €" },
    { name: "Curly", price: "5 €" },
    { name: "Monster Munch", price: "5 €" },
  ],
  accessoires: [
    { name: "Préservatif x1", price: "3 €" },
    { name: "Préservatifs x12", price: "15 €" },
    { name: "Briquet", price: "5 €" },
    { name: "Jeu de cartes", price: "7 €" },
    { name: "Lunettes", price: "5 €" },
    { name: "T-shirt SoiréeXpress", price: "10 €" },
  ],
};

const categories = [
  { id: "alcool", label: "Alcool", icon: Wine },
  { id: "softs", label: "Softs", icon: Coffee },
  { id: "snacks", label: "Snacks", icon: Popcorn },
  { id: "accessoires", label: "Accessoires", icon: Sparkles },
];

export default function ProductCatalog() {
  return (
    <section className="py-20 px-6 bg-[hsl(30,70%,93%)]" id="catalogue">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16 text-foreground" data-testid="text-catalog-title">
          Notre catalogue
        </h2>
        
        <Tabs defaultValue="alcool" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 h-auto gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id} 
                  className="flex items-center gap-2 py-3"
                  data-testid={`tab-${cat.id}`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products[cat.id as keyof typeof products].map((product, index) => (
                  <Card 
                    key={index} 
                    className="p-6 hover-elevate transition-all"
                    data-testid={`card-product-${cat.id}-${index}`}
                  >
                    <h3 className="font-semibold text-lg mb-2 text-foreground" data-testid={`text-product-name-${index}`}>
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary" data-testid={`text-product-price-${index}`}>
                      {product.price}
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
