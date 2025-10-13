import { useState } from "react";
import { CreditCard, Banknote, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import type { PaymentMethod } from "@/../../shared/schema";

interface CheckoutProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Checkout({ open, onOpenChange }: CheckoutProps) {
  const { items, total, clearCart } = useCart();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cash");
  const [address, setAddress] = useState("");
  const [addressVerified, setAddressVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const verifyAddress = async () => {
    if (!address.trim()) {
      toast({
        title: "Adresse requise",
        description: "Veuillez entrer une adresse de livraison",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    
    try {
      const google = (window as any).google;
      const geocoder = new google.maps.Geocoder();
      
      // @ts-ignore - Google Maps types
      const result = await new Promise<any[]>((resolve, reject) => {
        // @ts-ignore - Google Maps types
        geocoder.geocode({ address }, (results: any[], status: string) => {
          if (status === "OK" && results) {
            resolve(results);
          } else {
            reject(new Error("Adresse non trouvée"));
          }
        });
      });

      const location = result[0].geometry.location;
      const lorientCenter = { lat: 47.7482, lng: -3.3667 };
      
      const distance = google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(lorientCenter.lat, lorientCenter.lng),
        location
      );

      if (distance > 25000) {
        toast({
          title: "Hors zone de livraison",
          description: "Cette adresse est en dehors de notre zone de livraison (25km autour de Lorient)",
          variant: "destructive",
        });
        setAddressVerified(false);
      } else {
        setAddressVerified(true);
        toast({
          title: "✅ Adresse vérifiée",
          description: `Adresse valide et dans notre zone de livraison (${(distance / 1000).toFixed(1)}km de Lorient)`,
        });
      }
    } catch (error) {
      toast({
        title: "Erreur de vérification",
        description: "Impossible de vérifier l'adresse. Veuillez réessayer.",
        variant: "destructive",
      });
      setAddressVerified(false);
    } finally {
      setIsVerifying(false);
    }
  };

  const generateWhatsAppMessage = () => {
    let message = "🛒 *Nouvelle commande SoiréeXpress*\n\n";
    message += "*Produits:*\n";
    
    items.forEach((item) => {
      const itemName = item.variant ? `${item.name} (${item.variant})` : item.name;
      message += `• ${item.quantity}x ${itemName} - ${(item.price * item.quantity).toFixed(2)} €\n`;
    });
    
    message += `\n*Total: ${total.toFixed(2)} €*\n\n`;
    message += `*Mode de paiement:* ${paymentMethod === "card" ? "Carte bancaire" : "Espèces"} (à la livraison)\n\n`;
    message += `*Adresse de livraison:*\n${address}`;
    
    return encodeURIComponent(message);
  };

  const handleSendOrder = () => {
    if (!addressVerified) {
      toast({
        title: "Adresse non vérifiée",
        description: "Veuillez vérifier votre adresse avant de commander",
        variant: "destructive",
      });
      return;
    }

    setShowConfirmDialog(true);
  };

  const confirmOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappNumber = "33757911933";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    
    setShowConfirmDialog(false);
    setOrderSent(true);
    
    setTimeout(() => {
      clearCart();
      setOrderSent(false);
      onOpenChange(false);
      setAddress("");
      setAddressVerified(false);
      setPaymentMethod("cash");
    }, 5000);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle data-testid="text-checkout-title">Finaliser la commande</DialogTitle>
            <DialogDescription>
              Choisissez votre mode de paiement et entrez votre adresse de livraison
            </DialogDescription>
          </DialogHeader>

          {orderSent ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground" data-testid="text-order-sent">
                  ✅ Commande envoyée
                </h3>
                <p className="text-muted-foreground">
                  Veuillez attendre la confirmation du livreur.
                </p>
                <p className="text-sm text-muted-foreground">
                  Si aucune réponse n'est reçue sous 30 minutes, la commande est automatiquement annulée.
                </p>
                <p className="text-sm font-medium text-foreground">
                  Le livreur vous appellera lorsqu'il sera arrivé.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Récapitulatif</h3>
                <div className="space-y-2">
                  {items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.quantity}x {item.name} {item.variant ? `(${item.variant})` : ""}
                      </span>
                      <span className="font-medium">{(item.price * item.quantity).toFixed(2)} €</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-lg font-bold border-t pt-2">
                    <span>Total</span>
                    <span className="text-primary">{total.toFixed(2)} €</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-base font-semibold">Mode de paiement (à la livraison)</Label>
                <RadioGroup value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as PaymentMethod)}>
                  <div className="flex items-center space-x-2 border p-3 rounded-lg hover-elevate">
                    <RadioGroupItem value="card" id="card" data-testid="radio-payment-card" />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                      <CreditCard className="w-5 h-5" />
                      <span>Carte bancaire</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border p-3 rounded-lg hover-elevate">
                    <RadioGroupItem value="cash" id="cash" data-testid="radio-payment-cash" />
                    <Label htmlFor="cash" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Banknote className="w-5 h-5" />
                      <span>Espèces</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label htmlFor="address" className="text-base font-semibold">
                  Adresse de livraison
                </Label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      id="address"
                      placeholder="Ex: 5 Rue du Port, 56100 Lorient"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        setAddressVerified(false);
                      }}
                      data-testid="input-address"
                    />
                    <Button
                      variant="outline"
                      onClick={verifyAddress}
                      disabled={isVerifying || !address.trim()}
                      data-testid="button-verify-address"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      {isVerifying ? "Vérification..." : "Vérifier"}
                    </Button>
                  </div>
                  {addressVerified && (
                    <p className="text-sm text-green-600 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Adresse vérifiée et dans la zone de livraison
                    </p>
                  )}
                </div>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={handleSendOrder}
                disabled={!addressVerified}
                data-testid="button-send-whatsapp"
              >
                <Send className="w-4 h-4 mr-2" />
                Envoyer sur WhatsApp
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle data-testid="text-confirm-title">Confirmer la commande ?</AlertDialogTitle>
            <AlertDialogDescription>
              Votre commande sera envoyée par WhatsApp au livreur.
              Vous serez redirigé vers WhatsApp pour finaliser l'envoi.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-testid="button-cancel-order">Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={confirmOrder} data-testid="button-confirm-order">
              Confirmer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
