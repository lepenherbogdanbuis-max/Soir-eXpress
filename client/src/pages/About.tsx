import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cocktails = [
  {
    name: "Mojito Classique",
    ingredients: [
      "5 cl de Rhum blanc Havana Club",
      "2 cl de jus de citron vert",
      "6 feuilles de menthe fraîche",
      "2 cuillères à café de sucre",
      "Eau gazeuse",
      "Glaçons"
    ],
    preparation: "Écrasez la menthe avec le sucre et le citron vert au fond d'un verre. Ajoutez le rhum et les glaçons. Complétez avec de l'eau gazeuse et mélangez délicatement."
  },
  {
    name: "Cuba Libre",
    ingredients: [
      "5 cl de Rhum blanc Havana Club",
      "12 cl de Coca Cola",
      "1/2 citron vert",
      "Glaçons"
    ],
    preparation: "Remplissez un verre de glaçons, ajoutez le rhum, pressez le demi-citron vert et complétez avec du Coca. Mélangez et décorez avec une rondelle de citron."
  },
  {
    name: "Desperados Sunrise",
    ingredients: [
      "1 Desperados 33cl",
      "3 cl de jus d'orange",
      "1 cl de grenadine",
      "Glaçons"
    ],
    preparation: "Dans un grand verre avec des glaçons, versez la Desperados et le jus d'orange. Ajoutez délicatement la grenadine qui va descendre au fond pour créer l'effet sunrise."
  },
  {
    name: "Whisky Coca",
    ingredients: [
      "4 cl de Whisky Clan Campbell",
      "12 cl de Coca Cola",
      "Glaçons",
      "1 tranche de citron (optionnel)"
    ],
    preparation: "Remplissez un verre de glaçons, versez le whisky puis le Coca. Mélangez doucement et ajoutez une tranche de citron si désiré."
  },
  {
    name: "Vodka Energy",
    ingredients: [
      "4 cl de Vodka Poliakoff",
      "1 Red Bull",
      "Glaçons",
      "1 quartier de citron vert"
    ],
    preparation: "Dans un verre rempli de glaçons, versez la vodka puis le Red Bull. Pressez légèrement le quartier de citron vert et ajoutez-le dans le verre."
  },
  {
    name: "Get 27 Tonic",
    ingredients: [
      "4 cl de GET 27",
      "12 cl de Limonade Plancoët",
      "Glaçons",
      "Feuilles de menthe fraîche"
    ],
    preparation: "Remplissez un verre de glaçons, ajoutez le GET 27 et complétez avec la limonade. Décorez avec quelques feuilles de menthe fraîche."
  },
  {
    name: "Pastis Vitaminé",
    ingredients: [
      "2 cl de Ricard",
      "1 cl de sirop de menthe",
      "Eau fraîche",
      "Glaçons"
    ],
    preparation: "Dans un verre, versez le Ricard et le sirop de menthe. Ajoutez des glaçons et complétez avec de l'eau fraîche selon votre goût."
  },
  {
    name: "Rhum Ambré Cola",
    ingredients: [
      "5 cl de Rhum Ambré Havana Club",
      "12 cl de Coca Cola",
      "1 quartier de citron vert",
      "Glaçons"
    ],
    preparation: "Remplissez un verre de glaçons, versez le rhum ambré puis le Coca. Pressez le quartier de citron vert au-dessus et mélangez."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-center mb-8 text-foreground" data-testid="text-about-title">
            Idées de Cocktails à Faire à la Maison
          </h1>
          
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
            Découvrez nos recettes de cocktails simples et délicieux à réaliser chez vous avec les produits disponibles sur SoiréeXpress.
            Parfait pour impressionner vos invités ou profiter d'une soirée réussie !
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {cocktails.map((cocktail, index) => (
              <Card 
                key={index} 
                className="p-6 hover-elevate transition-all"
                data-testid={`card-cocktail-${index}`}
              >
                <h3 className="font-heading font-bold text-2xl mb-4 text-primary" data-testid={`text-cocktail-name-${index}`}>
                  {cocktail.name}
                </h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Ingrédients :</h4>
                  <ul className="space-y-1">
                    {cocktail.ingredients.map((ingredient, i) => (
                      <li key={i} className="text-muted-foreground flex gap-2" data-testid={`text-ingredient-${index}-${i}`}>
                        <span className="text-primary">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Préparation :</h4>
                  <p className="text-muted-foreground" data-testid={`text-preparation-${index}`}>
                    {cocktail.preparation}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">
                🍸 Conseil du barman
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                La clé d'un bon cocktail : des ingrédients frais, des proportions respectées et une présentation soignée. 
                N'hésitez pas à ajuster les quantités selon vos goûts personnels. 
                Et surtout, consommez avec modération !
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
