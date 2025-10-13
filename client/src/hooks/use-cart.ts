import { useState, useEffect } from "react";
import type { CartItem } from "@/../../shared/schema";

const CART_STORAGE_KEY = "soireexpress_cart";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (item: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    const quantity = item.quantity || 1;
    const itemId = item.variant ? `${item.id}-${item.variant}` : item.id;
    
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => {
        const existingId = i.variant ? `${i.id}-${i.variant}` : i.id;
        return existingId === itemId;
      });

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }

      return [...prev, { ...item, quantity } as CartItem];
    });
  };

  const removeItem = (itemId: string, variant?: string) => {
    setItems((prev) => {
      return prev.filter((item) => {
        const currentId = item.variant ? `${item.id}-${item.variant}` : item.id;
        const targetId = variant ? `${itemId}-${variant}` : itemId;
        return currentId !== targetId;
      });
    });
  };

  const updateQuantity = (itemId: string, quantity: number, variant?: string) => {
    if (quantity <= 0) {
      removeItem(itemId, variant);
      return;
    }

    setItems((prev) => {
      return prev.map((item) => {
        const currentId = item.variant ? `${item.id}-${item.variant}` : item.id;
        const targetId = variant ? `${itemId}-${variant}` : itemId;
        
        if (currentId === targetId) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    total,
    itemCount,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
}
