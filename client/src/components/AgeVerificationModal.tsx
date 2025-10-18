import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnderage, setIsUnderage] = useState(false);

  useEffect(() => {
    const hasVerified = localStorage.getItem('age_verified');
    if (!hasVerified) {
      setIsOpen(true);
    }
  }, []);

  const handleYes = () => {
    localStorage.setItem('age_verified', 'true');
    setIsOpen(false);
  };

  const handleNo = () => {
    setIsUnderage(true);
  };

  if (isUnderage) {
    return (
      <div className="fixed inset-0 z-50 bg-background flex items-center justify-center p-6">
        <div className="max-w-md text-center space-y-6">
          <AlertTriangle className="w-16 h-16 text-primary mx-auto" />
          <h1 className="font-heading font-bold text-3xl text-foreground">
            Accès refusé
          </h1>
          <p className="text-muted-foreground text-lg">
            L'accès au site est réservé aux personnes majeures.
          </p>
          <p className="text-sm text-muted-foreground">
            Ce site propose la vente d'alcool et est strictement réservé aux personnes de 18 ans et plus.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent 
        className="sm:max-w-md [&>button]:hidden"
        data-testid="dialog-age-verification"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-center">
            Vérification d'âge
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-4">
            Êtes-vous majeur ? (18+)
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex items-center justify-center py-4">
          <AlertTriangle className="w-12 h-12 text-primary" />
        </div>
        
        <p className="text-sm text-muted-foreground text-center">
          Ce site propose la vente d'alcool et est réservé aux personnes de 18 ans et plus.
        </p>

        <DialogFooter className="flex-row gap-3 sm:gap-3">
          <Button
            variant="outline"
            onClick={handleNo}
            className="flex-1"
            data-testid="button-age-no"
          >
            Non
          </Button>
          <Button
            onClick={handleYes}
            className="flex-1"
            data-testid="button-age-yes"
          >
            Oui
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
