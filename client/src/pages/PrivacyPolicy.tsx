import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-center mb-8 text-foreground" data-testid="text-privacy-title">
            Politique de Confidentialité
          </h1>
          
          <Card className="p-8 space-y-6" data-testid="card-privacy-content">
            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground">
                SoiréeXpress accorde une grande importance à la protection de vos données personnelles. 
                Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations 
                lorsque vous utilisez notre service de livraison nocturne.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">2. Données collectées</h2>
              <p className="text-muted-foreground mb-3">
                Dans le cadre de notre service, nous collectons les informations suivantes :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Informations de contact :</strong> Numéro de téléphone WhatsApp, adresse de livraison.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Informations de commande :</strong> Produits commandés, montant de la commande, horaire de livraison.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages consultées (via Google Tag Manager).</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">3. Utilisation des données</h2>
              <p className="text-muted-foreground mb-3">
                Vos données personnelles sont utilisées uniquement pour :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Traiter et livrer vos commandes.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Communiquer avec vous concernant votre commande (confirmation, suivi).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Améliorer notre service et votre expérience utilisateur.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Analyser les statistiques de fréquentation du site (Google Tag Manager).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Respecter nos obligations légales (vérification de l'âge pour la vente d'alcool).</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">4. Conservation des données</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Les données de commande sont conservées pendant la durée nécessaire au traitement de votre commande.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Les conversations WhatsApp sont conservées selon les paramètres de l'application WhatsApp.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Les données de navigation sont conservées conformément aux politiques de Google Analytics.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">5. Partage des données</h2>
              <p className="text-muted-foreground mb-3">
                Nous ne vendons, ne louons et ne partageons jamais vos données personnelles avec des tiers, sauf dans les cas suivants :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Avec notre équipe de livraison, uniquement pour le traitement de votre commande.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Avec WhatsApp (Meta) pour la gestion des communications.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Avec Google (via Google Tag Manager) pour l'analyse statistique anonymisée.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Si la loi l'exige (autorités compétentes, réquisition judiciaire).</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">6. Cookies et technologies similaires</h2>
              <p className="text-muted-foreground mb-3">
                Notre site utilise des cookies et technologies similaires pour :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Mémoriser votre panier d'achat (stockage local du navigateur).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Analyser le trafic et l'utilisation du site (Google Tag Manager).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Améliorer votre expérience de navigation.</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités du site.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">7. Sécurité des données</h2>
              <p className="text-muted-foreground">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données 
                contre tout accès non autorisé, modification, divulgation ou destruction. Cependant, aucune transmission de données 
                sur Internet ne peut être garantie à 100% sécurisée.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">8. Vos droits (RGPD)</h2>
              <p className="text-muted-foreground mb-3">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Droit d'accès :</strong> Obtenir une copie des données que nous détenons sur vous.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Droit de rectification :</strong> Corriger vos données si elles sont inexactes.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Droit à l'effacement :</strong> Demander la suppression de vos données personnelles.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré.</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Pour exercer ces droits, contactez-nous via WhatsApp au 07 66 45 82 05.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">9. Services tiers</h2>
              <p className="text-muted-foreground mb-3">
                Notre site utilise les services tiers suivants :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>WhatsApp (Meta) :</strong> Pour la gestion des commandes et communications.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Google Tag Manager :</strong> Pour l'analyse du trafic et des statistiques.</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Ces services ont leurs propres politiques de confidentialité que nous vous encourageons à consulter.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">10. Mineurs</h2>
              <p className="text-muted-foreground">
                Notre service est strictement réservé aux personnes majeures (18 ans et plus). 
                Nous ne collectons pas sciemment de données personnelles auprès de mineurs. 
                Si nous découvrons qu'un mineur nous a fourni des données, nous les supprimerons immédiatement.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">11. Modifications de la politique</h2>
              <p className="text-muted-foreground">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Toute modification sera publiée sur cette page avec une date de mise à jour. 
                Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">12. Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles, 
                contactez-nous via :
              </p>
              <ul className="space-y-2 text-muted-foreground mt-3">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>WhatsApp : 07 66 45 82 05</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Instagram : @soireexpress</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Facebook : SoiréeXpress</span>
                </li>
              </ul>
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
