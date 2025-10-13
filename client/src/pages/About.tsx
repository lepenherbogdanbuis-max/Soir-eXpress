import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiInstagram, SiFacebook } from "react-icons/si";

const cocktails = [
  {
    name: "Mojito Classique",
    subtitle: "Le roi des apéros",
    ingredients: [
      "5 cl de rhum blanc",
      "1/2 citron vert coupé en 4 morceaux",
      "2 c. à café de sucre de canne",
      "8 feuilles de menthe fraîche",
      "Eau gazeuse",
      "Glaçons"
    ],
    preparation: "Mets les morceaux de citron vert et le sucre dans le verre. Écrase doucement avec un pilon pour faire sortir le jus (pas besoin de tout broyer). Claque les feuilles de menthe entre tes mains pour libérer l'arôme sans les abîmer, puis ajoute-les. Ajoute les glaçons, puis verse le rhum. Complète avec de l'eau gazeuse et mélange doucement.",
    tip: "Frais, équilibré, et surtout pas amer. Le vrai goût du Mojito !"
  },
  {
    name: "Sex on the Beach",
    subtitle: "Le classique ambiance plage",
    ingredients: [
      "4 cl de vodka",
      "2 cl de liqueur de pêche",
      "4 cl de jus d'orange",
      "4 cl de jus de cranberry",
      "Glaçons"
    ],
    preparation: "Mets tout dans un shaker (ou une bouteille que tu fermes bien). Secoue 10 secondes et verse dans un grand verre rempli de glaçons.",
    tip: "Doux, fruité, parfait pour démarrer la soirée sans se casser la tête."
  },
  {
    name: "Caïpirinha",
    subtitle: "L'énergie du Brésil",
    ingredients: [
      "5 cl de cachaça (ou rhum blanc si t'en as pas)",
      "1 citron vert",
      "2 c. à café de sucre de canne",
      "Glaçons"
    ],
    preparation: "Coupe le citron en morceaux dans le verre, ajoute le sucre. Pile doucement pour extraire le jus. Ajoute la cachaça et remplis de glaçons. Mélange bien.",
    tip: "Simple, fort, sucré, parfait pour les soirées qui bougent."
  },
  {
    name: "Piña Colada Maison",
    subtitle: "Version tropicale facile",
    ingredients: [
      "4 cl de rhum blanc",
      "6 cl de jus d'ananas",
      "4 cl de lait de coco",
      "Glaçons"
    ],
    preparation: "Mets tout dans un shaker (ou un grand pot avec couvercle). Secoue bien 15 secondes. Verse sur des glaçons.",
    tip: "Goût vacances garanti, même sous la pluie."
  },
  {
    name: "Blue Lagoon",
    subtitle: "Le bleu de la fête",
    ingredients: [
      "4 cl de vodka",
      "2 cl de curaçao bleu",
      "10 cl de limonade",
      "Glaçons"
    ],
    preparation: "Mets la vodka et le curaçao dans le verre. Ajoute les glaçons puis la limonade. Mélange doucement.",
    tip: "Look stylé, goût frais, et effet 'wow' garanti."
  },
  {
    name: "Tequila Sunrise",
    subtitle: "Simple et photogénique",
    ingredients: [
      "4 cl de tequila",
      "8 cl de jus d'orange",
      "1 cl de grenadine",
      "Glaçons"
    ],
    preparation: "Verse la tequila et le jus d'orange dans le verre avec les glaçons. Verse lentement la grenadine pour créer le dégradé.",
    tip: "Pas besoin de shaker, juste un peu de patience et un beau verre."
  },
  {
    name: "Gin Tonic Fraise & Citron",
    subtitle: "Chic et rafraîchissant",
    ingredients: [
      "5 cl de gin",
      "10 cl de tonic",
      "2 fraises fraîches coupées",
      "2 rondelles de citron",
      "Glaçons"
    ],
    preparation: "Mets le gin dans un grand verre ballon. Ajoute les fruits, les glaçons et le tonic.",
    tip: "Un classique revisité, super frais et très léger."
  },
  {
    name: "Malibu Sunrise",
    subtitle: "Douceur tropicale",
    ingredients: [
      "4 cl de Malibu",
      "8 cl de jus d'ananas",
      "2 cl de grenadine",
      "Glaçons"
    ],
    preparation: "Verse le Malibu et le jus d'ananas dans le verre. Ajoute les glaçons puis la grenadine lentement pour le dégradé.",
    tip: "Goût coco-ananas + look coloré = combo parfait."
  },
  {
    name: "Rhum Pomme Cannelle",
    subtitle: "Idéal pour l'hiver",
    ingredients: [
      "5 cl de rhum ambré",
      "10 cl de jus de pomme",
      "1 pincée de cannelle",
      "Glaçons"
    ],
    preparation: "Verse le rhum et le jus de pomme dans le verre. Ajoute la cannelle et les glaçons.",
    tip: "Simple, chaud en goût, parfait pour les soirées plus calmes."
  },
  {
    name: "Virgin Mojito",
    subtitle: "Sans alcool, mais full ambiance",
    ingredients: [
      "1/2 citron vert",
      "2 c. à café de sucre de canne",
      "8 feuilles de menthe fraîche",
      "Eau gazeuse",
      "Glaçons"
    ],
    preparation: "Mets le citron et le sucre dans le verre et pile doucement. Claque la menthe entre tes mains, ajoute-la. Mets les glaçons puis verse l'eau gazeuse.",
    tip: "Même sans rhum, ça reste frais et festif."
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
          
          <p className="text-center text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Découvrez nos recettes de cocktails simples et délicieux à réaliser chez vous avec les produits disponibles sur SoiréeXpress.
            Parfait pour impressionner vos invités ou profiter d'une soirée réussie !
          </p>

          <Card className="p-6 mb-16 bg-primary/5 border-primary/20">
            <div className="text-center">
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">
                📱 Suivez-nous sur les réseaux !
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                On publie régulièrement de nouvelles recettes de cocktails, astuces de mixologie et contenus exclusifs sur Instagram et Facebook.
                Abonnez-vous pour ne rien rater !
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  asChild
                  variant="default"
                  size="lg"
                  className="gap-2"
                  data-testid="button-instagram-follow"
                >
                  <a 
                    href="https://www.instagram.com/soireexpress" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <SiInstagram className="w-5 h-5" />
                    Suivre sur Instagram
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="default"
                  size="lg"
                  className="gap-2"
                  data-testid="button-facebook-follow"
                >
                  <a 
                    href="https://www.facebook.com/profile.php?id=61581789040254" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <SiFacebook className="w-5 h-5" />
                    Suivre sur Facebook
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {cocktails.map((cocktail, index) => (
              <Card 
                key={index} 
                className="p-6 hover-elevate transition-all"
                data-testid={`card-cocktail-${index}`}
              >
                <h3 className="font-heading font-bold text-2xl mb-1 text-primary" data-testid={`text-cocktail-name-${index}`}>
                  {cocktail.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 italic">{cocktail.subtitle}</p>
                
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
                
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Préparation :</h4>
                  <p className="text-muted-foreground" data-testid={`text-preparation-${index}`}>
                    {cocktail.preparation}
                  </p>
                </div>

                <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                  <p className="text-sm text-foreground">
                    👉 {cocktail.tip}
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
