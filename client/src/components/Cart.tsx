import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import Checkout from "@/components/Checkout";

export default function Cart() {
  const { items, total, itemCount, updateQuantity, removeItem, isCartOpen, setIsCartOpen } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative" data-testid="button-open-cart">
          <ShoppingCart className="w-5 h-5" />
          {itemCount > 0 && (
            <Badge 
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              data-testid="badge-cart-count"
            >
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle data-testid="text-cart-title">Panier</SheetTitle>
          <SheetDescription>
            {itemCount === 0 ? "Votre panier est vide" : `${itemCount} article${itemCount > 1 ? "s" : ""} dans votre panier`}
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
              <ShoppingCart className="w-16 h-16 mb-4 opacity-20" />
              <p>Ajoutez des produits à votre panier pour commencer</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <div 
                  key={`${item.id}-${item.variant || ""}`}
                  className="flex gap-4 p-3 border rounded-lg"
                  data-testid={`cart-item-${index}`}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-contain bg-background/50 rounded"
                    data-testid={`img-cart-item-${index}`}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm" data-testid={`text-cart-item-name-${index}`}>
                      {item.name}
                    </h4>
                    {item.variant && (
                      <p className="text-xs text-muted-foreground" data-testid={`text-cart-item-variant-${index}`}>
                        {item.variant}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1 border rounded-md">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                          data-testid={`button-decrease-cart-${index}`}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium" data-testid={`text-cart-quantity-${index}`}>
                          {item.quantity}
                        </span>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                          data-testid={`button-increase-cart-${index}`}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <p className="font-bold text-primary" data-testid={`text-cart-item-price-${index}`}>
                        {(item.price * item.quantity).toFixed(2)} €
                      </p>
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => removeItem(item.id, item.variant)}
                    data-testid={`button-remove-cart-${index}`}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="border-t pt-4 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span data-testid="text-total-label">Total</span>
              <span className="text-primary" data-testid="text-total-amount">{total.toFixed(2)} €</span>
            </div>
            <Button 
              className="w-full" 
              size="lg"
              onClick={() => setCheckoutOpen(true)}
              data-testid="button-proceed-checkout"
            >
              Valider la commande
            </Button>
            <Checkout open={checkoutOpen} onOpenChange={setCheckoutOpen} />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
