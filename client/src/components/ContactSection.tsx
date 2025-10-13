import { Card } from "@/components/ui/card";
import qrCodeImg from "@assets/téléchargement_1760319792066.png";

export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-background" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl mb-12 text-foreground" data-testid="text-contact-title">
          Votre avis compte !
        </h2>
        
        <Card className="p-8 mb-8">
          <p className="text-lg text-foreground mb-8">
            N'hésitez pas à laisser un avis Google pour nous aider à améliorer notre service
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src={qrCodeImg} 
                alt="QR Code avis Google" 
                className="w-48 h-48 border-2 border-border rounded-lg"
                data-testid="img-qr-code"
              />
              <p className="text-sm text-muted-foreground mt-2">Scannez pour laisser un avis</p>
            </div>
            
            <div className="text-center md:text-left">
              <a 
                href="https://g.page/r/CRdjTvUWN-gOEAE/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover-elevate active-elevate-2 transition-all"
                data-testid="link-google-review"
              >
                ⭐ Laisser un avis Google
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Ou cliquez directement sur le lien ci-dessus
              </p>
            </div>
          </div>
        </Card>
        
        <p className="text-muted-foreground text-sm">
          Vos retours et suggestions sont précieux pour améliorer notre service
        </p>
      </div>
    </section>
  );
}
