import { useState } from "react";
import { CreditCard, Banknote, Send, CheckCircle, Info, AlertTriangle, Truck } from "lucide-react";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/CartContext";
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
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const MINIMUM_ORDER = 30;
  const isBelowMinimum = total < MINIMUM_ORDER;

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
    if (!address.trim()) {
      toast({
        title: "Adresse requise",
        description: "Veuillez entrer une adresse de livraison",
        variant: "destructive",
      });
      return;
    }

    setShowConfirmDialog(true);
  };

  const confirmOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappNumber = "33766458205";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    
    setShowConfirmDialog(false);
    setOrderSent(true);
    
    setTimeout(() => {
      clearCart();
      setOrderSent(false);
      onOpenChange(false);
      setAddress("");
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

          <Alert className="hidden md:block bg-primary/10 border-primary/20" data-testid="alert-desktop-info">
            <Info className="h-4 w-4" />
            <AlertTitle>Pour les utilisateurs sur PC</AlertTitle>
            <AlertDescription>
              Une fois votre panier validé, vous pouvez également envoyer votre commande par message ou WhatsApp au <strong className="font-semibold">07 66 45 82 05</strong> en indiquant votre adresse de livraison.
            </AlertDescription>
          </Alert>

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
                  <div className="flex items-center justify-center gap-2 bg-primary/10 text-primary rounded-md px-3 py-2 mt-2">
                    <Truck className="w-4 h-4" />
                    <span className="text-sm font-semibold">Livraison gratuite - 0 frais !</span>
                  </div>
                </div>
              </div>

              {isBelowMinimum && (
                <Alert variant="destructive" data-testid="alert-minimum-order">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Montant minimum non atteint</AlertTitle>
                  <AlertDescription>
                    Le montant minimum de commande est de <strong>30,00 €</strong>. 
                    Il vous manque <strong>{(MINIMUM_ORDER - total).toFixed(2)} €</strong> pour valider votre commande.
                  </AlertDescription>
                </Alert>
              )}

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
                <Input
                  id="address"
                  placeholder="Ex: 5 Rue du Port, 56100 Lorient"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  data-testid="input-address"
                />
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={handleSendOrder}
                disabled={!address.trim() || isBelowMinimum}
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
