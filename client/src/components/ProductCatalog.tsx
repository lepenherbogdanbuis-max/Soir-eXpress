import { Wine, Coffee, Popcorn, Sparkles, ChevronLeft, ChevronRight, Plus, Minus, ShoppingCart, Truck, Beer, Grape, Candy, UtensilsCrossed } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

// Images importées
import vodkaImg from "@assets/poliakov 70 cl_1760319800254.png";
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

// Nouvelles images produits fournies
import jackDanielsImg from "@assets/jack-daniels-70cl.png";
import jackDanielsMielImg from "@assets/jack-daniels-miel-70cl.png";
import ginImg from "@assets/gin-70cl.png";
import jagermeisterImg from "@assets/jagermeister-70cl.png";
import darkRumImg from "@assets/havana-ambre-70cl.png";
import chipsImg from "@assets/chips-breizh.png";
import curlyImg from "@assets/curly.png";
import dragibusImg from "@assets/dragibus-haribo.png";
import lighterImg from "@assets/briquet.png";
import ethylotestImg from "@assets/ethylotest.png";
import baileysImg from "@assets/baileys-70cl.png";

// Nouvelles images des produits
const desperadosPackImg = "/products/desperados-pack-12.png";
const heinekenPackImg = "/products/heineken-pack-12.png";
const goudalePackImg = "/products/goudale-pack-12.png";
const santErwannPackImg = "/products/sant-erwann-pack-12.png";
const tequilaImg = "/products/tequila.png";
const vinBlancImg = "/products/vin-blanc.png";
const vinRoseImg = "/products/vin-rose.png";
const vinRougeImg = "/products/vin-rouge.png";
const pringlesImg = "/products/pringles.png";
const monsterMunchImg = "/products/monster-munch.png";
const saucissonImg = "/products/saucisson.png";
const maltesersImg = "/products/maltesers.png";
const mmsImg = "/products/mms.png";
const kinderBuenoImg = "/products/kinder-bueno.png";
const preservatifImg = "/products/preservatif.png";
const cartesImg = "/products/cartes.png";
const lunettesImg = "/products/lunettes.png";
const tshirtImg = "/products/tshirt.png";

// Image placeholder pour les produits sans image
const placeholderImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23f5f5f5' width='400' height='400'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EImage à venir%3C/text%3E%3C/svg%3E";

const products = {
  spiritueux: [
    // Whisky
    { name: "Jack Daniel's 70cl", price: "45 €", image: jackDanielsImg },
    { name: "Jack Daniel's Miel 70cl", price: "45 €", image: jackDanielsMielImg },
    { name: "Clan Campbell 70cl", price: "38 €", image: whiskyImg },
    // Vodka
    { name: "Poliakov 70cl", price: "30 €", image: vodkaImg },
    // Rhum
    { name: "Havana Club blanc 70cl", price: "34 €", image: whiteRumImg },
    { name: "Havana Club ambré 70cl", price: "35 €", image: darkRumImg },
    // Tequila
    { name: "Tequila 70cl", price: "38 €", image: tequilaImg },
    // Gin
    { name: "Gin 70cl", price: "35 €", image: ginImg },
    // Liqueurs
    { name: "Ricard 70cl", price: "38 €", image: ricardImg },
    { name: "Get 27 70cl", price: "35 €", image: get27Img },
    { name: "Baileys 70cl", price: "35 €", image: baileysImg },
    { name: "Jägermeister 70cl", price: "40 €", image: jagermeisterImg },
  ],
  biere: [
    { name: "Pack 12 Desperados 33cl", price: "30 €", image: desperadosPackImg },
    { name: "Pack 12 Heineken 25cl", price: "25 €", image: heinekenPackImg },
    { name: "Pack 12 Goudale 25cl", price: "25 €", image: goudalePackImg },
    { name: "Pack 12 Sant Erwann 25cl", price: "28 €", image: santErwannPackImg },
  ],
  vin: [
    { name: "Vin blanc 70cl", price: "12 €", image: vinBlancImg },
    { name: "Vin rosé 70cl", price: "12 €", image: vinRoseImg },
    { name: "Vin rouge 70cl", price: "12 €", image: vinRougeImg },
  ],
  softs: [
    { name: "Coca 1L", price: "5 €", image: cokaImg },
    { name: "Fanta 1L", price: "5 €", image: fantaImg },
    { name: "Limonade Plancoët 1.5L", price: "5 €", image: lemonadeImg },
    { name: "Orangina 1L", price: "5 €", image: oranginaImg },
    { name: "Eau Cristaline 1L", price: "2 €", image: waterImg },
    { 
      name: "Red Bull", 
      price: "5 €", 
      isCarousel: true,
      variants: [
        { name: "Original", image: redBullImg },
        { name: "Juneberry", image: redBullJuneberryImg },
        { name: "Pastèque", image: redBullPastèqueImg },
        { name: "Pêche Blanche", image: redBullPêcheImg },
        { name: "Pomme Fuji & Gingembre", image: redBullPommeImg },
      ]
    },
    { name: "Mega Force 1L", price: "8 €", image: megaForceImg },
  ],
  sale: [
    { name: "Chips Breizh", price: "5 €", image: chipsImg },
    { name: "Pringles", price: "5 €", image: pringlesImg },
    { name: "Curly", price: "5 €", image: curlyImg },
    { name: "Monster Munch", price: "5 €", image: monsterMunchImg },
    { name: "Saucisson sec", price: "8 €", image: saucissonImg },
  ],
  sucre: [
    { name: "Maltesers Billes chocolatées", price: "7 €", image: maltesersImg },
    { name: "M&Ms", price: "7 €", image: mmsImg },
    { name: "Dragibus Haribo", price: "5 €", image: dragibusImg },
    { name: "Kinder Bueno Chocolat au lait x2", price: "4 €", image: kinderBuenoImg },
  ],
  accessoires: [
    { name: "Préservatif x3", price: "6 €", image: preservatifImg },
    { name: "Briquet", price: "3 €", image: lighterImg },
    { name: "Jeu de cartes", price: "5 €", image: cartesImg },
    { name: "Lunettes", price: "5 €", image: lunettesImg },
    { name: "Éthylotest", price: "3 €", image: ethylotestImg },
    { 
      name: "T-shirt SoiréeXpress", 
      price: "10 €", 
      isCarousel: true,
      variants: [
        { name: "Taille S", image: tshirtImg },
        { name: "Taille M", image: tshirtImg },
        { name: "Taille L", image: tshirtImg },
      ]
    },
  ],
};

const categories = [
  { id: "alcool", label: "Alcool", icon: Wine, subcategories: [
    { id: "spiritueux", label: "Spiritueux", icon: Wine },
    { id: "biere", label: "Bière", icon: Beer },
    { id: "vin", label: "Vin", icon: Grape },
  ]},
  { id: "softs", label: "Softs", icon: Coffee },
  { id: "snacks", label: "Snacks", icon: Popcorn, subcategories: [
    { id: "sale", label: "Salé", icon: UtensilsCrossed },
    { id: "sucre", label: "Sucré", icon: Candy },
  ]},
  { id: "accessoires", label: "Accessoires", icon: Sparkles },
];

function ProductCard({ product, index, categoryId }: { product: any, index: number, categoryId: string }) {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem, setIsCartOpen } = useCart();
  const { toast } = useToast();
  
  const parsePrice = (priceStr: string): number => {
    return parseFloat(priceStr.replace("€", "").replace(",", ".").trim());
  };
  
  const handleAddToCart = () => {
    const price = parsePrice(product.price);
    const variant = product.isCarousel ? product.variants[currentVariant] : null;
    
    addItem({
      id: product.name.toLowerCase().replace(/\s+/g, "-"),
      name: product.name,
      price,
      quantity,
      variant: variant?.name,
      image: variant?.image || product.image,
    });
    
    toast({
      title: "✅ Ajouté au panier",
      description: `${quantity}x ${product.name}${variant ? ` (${variant.name})` : ""} - ${(price * quantity).toFixed(2)} €`,
      action: (
        <Button 
          size="sm" 
          variant="outline" 
          onClick={() => setIsCartOpen(true)}
          data-testid="button-view-cart-toast"
        >
          Voir le panier
        </Button>
      ),
    });
    
    setQuantity(1);
  };
  
  if (product.isCarousel && product.variants) {
    const variant = product.variants[currentVariant];
    
    const nextVariant = () => {
      setCurrentVariant((prev) => (prev + 1) % product.variants.length);
    };
    
    const prevVariant = () => {
      setCurrentVariant((prev) => (prev - 1 + product.variants.length) % product.variants.length);
    };
    
    return (
      <Card 
        className="overflow-hidden hover-elevate transition-all"
        data-testid={`card-product-${categoryId}-${index}`}
      >
        <div className="aspect-square w-full bg-background/50 flex items-center justify-center p-4 relative">
          <img 
            src={variant.image} 
            alt={`${product.name} - ${variant.name}`}
            className="w-full h-full object-contain"
            data-testid={`img-product-${index}`}
          />
          
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 pointer-events-none">
            <Button
              size="icon"
              variant="secondary"
              onClick={prevVariant}
              className="pointer-events-auto opacity-80 hover:opacity-100"
              data-testid={`button-prev-variant-${index}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              onClick={nextVariant}
              className="pointer-events-auto opacity-80 hover:opacity-100"
              data-testid={`button-next-variant-${index}`}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="p-6 space-y-3">
          <div>
            <h3 className="font-semibold text-lg mb-1 text-foreground" data-testid={`text-product-name-${index}`}>
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-2" data-testid={`text-variant-name-${index}`}>
              {variant.name}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-primary" data-testid={`text-product-price-${index}`}>
              {product.price}
            </p>
            <p className="text-xs text-muted-foreground">
              {currentVariant + 1}/{product.variants.length}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 border rounded-md">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                data-testid={`button-decrease-qty-${index}`}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center font-medium" data-testid={`text-quantity-${index}`}>{quantity}</span>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setQuantity(quantity + 1)}
                data-testid={`button-increase-qty-${index}`}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <Button
              className="flex-1"
              onClick={handleAddToCart}
              data-testid={`button-add-to-cart-${index}`}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </div>
      </Card>
    );
  }
  
  return (
    <Card 
      className="overflow-hidden hover-elevate transition-all"
      data-testid={`card-product-${categoryId}-${index}`}
    >
      <div className="aspect-square w-full bg-background/50 flex items-center justify-center p-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain"
          data-testid={`img-product-${index}`}
        />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="font-semibold text-lg mb-2 text-foreground" data-testid={`text-product-name-${index}`}>
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-primary" data-testid={`text-product-price-${index}`}>
          {product.price}
        </p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border rounded-md">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              data-testid={`button-decrease-qty-${index}`}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="w-8 text-center font-medium" data-testid={`text-quantity-${index}`}>{quantity}</span>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setQuantity(quantity + 1)}
              data-testid={`button-increase-qty-${index}`}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <Button
            className="flex-1"
            onClick={handleAddToCart}
            data-testid={`button-add-to-cart-${index}`}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Ajouter
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default function ProductCatalog() {
  const [activeAlcoolTab, setActiveAlcoolTab] = useState("spiritueux");
  const [activeSnacksTab, setActiveSnacksTab] = useState("sale");

  return (
    <section className="py-20 px-6 bg-[hsl(30,70%,93%)]" id="catalogue">
      <div className="max-w-6xl mx-auto">
        {/* Bannière promotionnelle - Livraison gratuite */}
        <div className="mb-12 -mx-6 sm:mx-0">
          <div className="bg-gradient-to-r from-primary via-primary/90 to-primary py-4 px-6 shadow-lg animate-pulse" data-testid="banner-free-delivery">
            <div className="flex items-center justify-center gap-3 text-primary-foreground">
              <Truck className="w-6 h-6 animate-bounce" />
              <p className="text-lg md:text-2xl font-bold text-center">
                🎉 LIVRAISON GRATUITE - 0 FRAIS DE LIVRAISON ! 🎉
              </p>
              <Truck className="w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>

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
          
          {/* Alcool avec sous-menus */}
          <TabsContent value="alcool">
            <Tabs value={activeAlcoolTab} onValueChange={setActiveAlcoolTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                {categories[0].subcategories!.map((subcat) => {
                  const Icon = subcat.icon;
                  return (
                    <TabsTrigger 
                      key={subcat.id} 
                      value={subcat.id}
                      className="flex items-center gap-2"
                      data-testid={`tab-${subcat.id}`}
                    >
                      <Icon className="w-4 h-4" />
                      {subcat.label}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              
              {categories[0].subcategories!.map((subcat) => (
                <TabsContent key={subcat.id} value={subcat.id}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products[subcat.id as keyof typeof products].map((product, index) => (
                      <ProductCard 
                        key={index} 
                        product={product} 
                        index={index} 
                        categoryId={subcat.id}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>

          {/* Softs sans sous-menus */}
          <TabsContent value="softs">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.softs.map((product, index) => (
                <ProductCard 
                  key={index} 
                  product={product} 
                  index={index} 
                  categoryId="softs"
                />
              ))}
            </div>
          </TabsContent>

          {/* Snacks avec sous-menus */}
          <TabsContent value="snacks">
            <Tabs value={activeSnacksTab} onValueChange={setActiveSnacksTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                {categories[2].subcategories!.map((subcat) => {
                  const Icon = subcat.icon;
                  return (
                    <TabsTrigger 
                      key={subcat.id} 
                      value={subcat.id}
                      className="flex items-center gap-2"
                      data-testid={`tab-${subcat.id}`}
                    >
                      <Icon className="w-4 h-4" />
                      {subcat.label}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              
              {categories[2].subcategories!.map((subcat) => (
                <TabsContent key={subcat.id} value={subcat.id}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products[subcat.id as keyof typeof products].map((product, index) => (
                      <ProductCard 
                        key={index} 
                        product={product} 
                        index={index} 
                        categoryId={subcat.id}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>

          {/* Accessoires sans sous-menus */}
          <TabsContent value="accessoires">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.accessoires.map((product, index) => (
                <ProductCard 
                  key={index} 
                  product={product} 
                  index={index} 
                  categoryId="accessoires"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
