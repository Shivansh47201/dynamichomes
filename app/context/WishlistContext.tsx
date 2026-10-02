"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Property, PROPERTIES } from "../data/properties";

interface WishlistContextType {
  wishlist: string[];
  toggleWishlist: (propertyId: string) => void;
  isInWishlist: (propertyId: string) => boolean;
  wishlistCount: number;
  wishlistProperties: Property[];
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dh_wishlist");
      if (saved) {
        const savedIds: unknown = JSON.parse(saved);
        const validIds = new Set(PROPERTIES.map((property) => property.id));
        setWishlist(
          Array.isArray(savedIds)
            ? savedIds.filter((id): id is string => typeof id === "string" && validIds.has(id))
            : [],
        );
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleWishlist = (propertyId: string) => {
    setWishlist((prev) => {
      const updated = prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId];
      try {
        localStorage.setItem("dh_wishlist", JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const isInWishlist = (propertyId: string) => wishlist.includes(propertyId);

  const wishlistProperties = PROPERTIES.filter((p) => wishlist.includes(p.id));

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount: wishlist.length,
        wishlistProperties,
        isWishlistOpen,
        setIsWishlistOpen,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
