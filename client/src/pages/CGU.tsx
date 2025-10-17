import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function CGU() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-center mb-8 text-foreground" data-testid="text-cgu-title">
            Conditions Générales d'Utilisation
          </h1>
          
          <Card className="p-8 space-y-6" data-testid="card-cgu-content">
            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">1. Objet</h2>
              <p className="text-muted-foreground">
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du service SoiréeXpress, 
                service de livraison nocturne d'alcool, boissons et snacks opérant à Lorient et dans les communes environnantes 
                dans un rayon de 25 km.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">2. Conditions d'accès au service</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Le service est réservé exclusivement aux personnes majeures (18 ans et plus).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Une pièce d'identité peut être demandée lors de la livraison pour vérifier l'âge du client.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Le service est disponible selon les horaires suivants : Lundi-Mardi de 22h à 5h, Mercredi-Dimanche de 1h à 5h.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">3. Modalités de commande</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Les commandes s'effectuent uniquement via WhatsApp au 07 66 45 82 05.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Montant minimum de commande : 30 € TTC.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>La livraison est gratuite dans la zone couverte.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Le client recevra une confirmation du livreur sur WhatsApp après validation de sa commande.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Si aucune réponse n'est reçue dans les 30 minutes suivant l'envoi de la commande, celle-ci est automatiquement annulée.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">4. Livraison</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>La zone de livraison couvre Lorient et les communes environnantes dans un rayon de 25 km.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Le livreur contactera le client par téléphone à son arrivée.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Le client doit être présent et disponible pour réceptionner sa commande.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>En cas d'absence du client, la commande pourra être annulée sans remboursement des frais éventuels.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">5. Paiement</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Le paiement s'effectue uniquement à la livraison.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Moyens de paiement acceptés : espèces et carte bancaire.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Le montant exact doit être préparé pour faciliter la transaction.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">6. Droit de refus</h2>
              <p className="text-muted-foreground mb-2">
                SoiréeXpress se réserve le droit de refuser une commande dans les cas suivants :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Comportement inapproprié ou agressif du client.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Adresse de livraison hors de la zone couverte.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Signes évidents d'abus d'alcool ou d'incapacité du client.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Client mineur ou incapable de justifier sa majorité.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">7. Responsabilité</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Le client reste seul responsable de sa consommation d'alcool.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>SoiréeXpress décline toute responsabilité en cas d'usage inapproprié des produits livrés.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Il est fortement conseillé de ne pas conduire après consommation d'alcool.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Des éthylotests sont disponibles sur notre site pour votre sécurité.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">8. Remboursement et réclamations</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Aucun remboursement n'est effectué après livraison des produits.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>En cas de problème avec la commande, contactez-nous immédiatement via WhatsApp.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Les réclamations doivent être formulées dans les 24 heures suivant la livraison.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">9. Acceptation des conditions</h2>
              <p className="text-muted-foreground">
                En passant commande auprès de SoiréeXpress, le client reconnaît avoir pris connaissance des présentes 
                Conditions Générales d'Utilisation et les accepte sans réserve.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">10. Modification des CGU</h2>
              <p className="text-muted-foreground">
                SoiréeXpress se réserve le droit de modifier les présentes CGU à tout moment. 
                Les nouvelles conditions seront applicables dès leur mise en ligne sur le site.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">11. Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant ces conditions, contactez-nous via WhatsApp au 07 66 45 82 05 
                ou sur nos réseaux sociaux (Instagram et Facebook).
              </p>
            </section>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
