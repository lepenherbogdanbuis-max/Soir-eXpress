import { Wine, Coffee, Popcorn, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import desperadosImg from "@assets/desparados x1 33cl_1760319800255.png";
import desperadosPackImg from "@assets/desparadox x12 33cl_1760319800255.png";
import laChouffeImg from "@assets/chouffe 33 cl_1760319800255.png";
import vodkaImg from "@assets/poliakov 70 cl_1760319800254.png";
import darkRumImg from "@assets/Havana ambré 70 cl_1760319800254.png";
import whiteRumImg from "@assets/Havana Blanc 70cl_1760319800254.png";
import whiskyImg from "@assets/clan campbell 70cl_1760319800254.png";
import ricardImg from "@assets/Ricard 70cl_1760319800255.png";
import get27Img from "@assets/jet 27 70cl_1760319800255.png";
import cokaImg from "@assets/Coca 1L_1760327215987.png";
import fantaImg from "@assets/Fanta 1L_1760327215987.png";
import lemonadeImg from "@assets/Limonade 1L_1760327215989.png";
import oranginaImg from "@assets/Orangina 1l_1760327215989.png";
import waterImg from "@assets/cristaline 1l_1760327215989.png";
import redBullImg from "@assets/ChatGPT Image 13 oct. 2025, 05_35_51_1760327215988.png";
import redBullJuneberryImg from "@assets/Red Bull juneberry_1760327215988.png";
import redBullPastèqueImg from "@assets/RedBull pasteque_1760327215988.png";
import redBullPêcheImg from "@assets/RedBull peche blanche_1760327215989.png";
import redBullPommeImg from "@assets/Red bull Pomme fuidji & Gingembre_1760327215989.png";
import megaForceImg from "@assets/Boisson énergisante 1L_1760327215988.png";
import chipsImg from "@assets/Chips Breizh_1760327215987.png";
import pringlesImg from "@assets/stock_images/pringles_chips_can_68ec4378.jpg";
import curlyImg from "@assets/stock_images/curly_snacks_bag_97acb948.jpg";
import monsterMunchImg from "@assets/stock_images/monster_munch_crisps_db31ed8e.jpg";
import condomImg from "@assets/stock_images/condom_package_55a88b21.jpg";
import lighterImg from "@assets/stock_images/lighter_dc74efca.jpg";
import cardsImg from "@assets/stock_images/playing_cards_deck_1bbc0d5a.jpg";
import sunglassesImg from "@assets/stock_images/party_sunglasses_b1857205.jpg";
import tshirtImg from "@assets/stock_images/t-shirt_mockup_0c85e506.jpg";

const products = {
  alcool: [
    { name: "Desperados 33cl", price: "4 €", image: desperadosImg },
    { name: "Pack Desperados 12x33cl", price: "35 €", image: desperadosPackImg },
    { name: "La Chouffe 33cl", price: "7 €", image: laChouffeImg },
    { name: "Vodka Poliakoff 70cl", price: "35 €", image: vodkaImg },
    { name: "Rhum Ambré Havana Club 70cl", price: "39 €", image: darkRumImg },
    { name: "Rhum blanc Havana Club 70cl", price: "38 €", image: whiteRumImg },
    { name: "Whisky Clan Campbell 70cl", price: "40 €", image: whiskyImg },
    { name: "Ricard 70cl", price: "38 €", image: ricardImg },
    { name: "GET 27 70cl", price: "40 €", image: get27Img },
  ],
  softs: [
    { name: "Coca 1L", price: "5 €", image: cokaImg },
    { name: "Fanta 1L", price: "5 €", image: fantaImg },
    { name: "Limonade Plancoët 1.5L", price: "5 €", image: lemonadeImg },
    { name: "Orangina 1L", price: "5 €", image: oranginaImg },
    { name: "Eau Cristaline 1L", price: "2 €", image: waterImg },
    { name: "Red Bull Original", price: "5 €", image: redBullImg },
    { name: "Red Bull Juneberry", price: "5 €", image: redBullJuneberryImg },
    { name: "Red Bull Pastèque", price: "5 €", image: redBullPastèqueImg },
    { name: "Red Bull Pêche Blanche", price: "5 €", image: redBullPêcheImg },
    { name: "Red Bull Pomme Fuji & Gingembre", price: "5 €", image: redBullPommeImg },
    { name: "Mega Force 1L", price: "8 €", image: megaForceImg },
  ],
  snacks: [
    { name: "Chips Breizh 125g", price: "5 €", image: chipsImg },
    { name: "Pringles", price: "5 €", image: pringlesImg },
    { name: "Curly", price: "5 €", image: curlyImg },
    { name: "Monster Munch", price: "5 €", image: monsterMunchImg },
  ],
  accessoires: [
    { name: "Préservatif x1", price: "3 €", image: condomImg },
    { name: "Préservatifs x12", price: "15 €", image: condomImg },
    { name: "Briquet", price: "5 €", image: lighterImg },
    { name: "Jeu de cartes", price: "7 €", image: cardsImg },
    { name: "Lunettes", price: "5 €", image: sunglassesImg },
    { name: "T-shirt SoiréeXpress", price: "10 €", image: tshirtImg },
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
                    className="overflow-hidden hover-elevate transition-all"
                    data-testid={`card-product-${cat.id}-${index}`}
                  >
                    <div className="aspect-square w-full bg-background/50 flex items-center justify-center p-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain"
                        data-testid={`img-product-${index}`}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2 text-foreground" data-testid={`text-product-name-${index}`}>
                        {product.name}
                      </h3>
                      <p className="text-2xl font-bold text-primary" data-testid={`text-product-price-${index}`}>
                        {product.price}
                      </p>
                    </div>
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
