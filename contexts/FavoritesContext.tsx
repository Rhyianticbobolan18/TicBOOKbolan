import React, { createContext, useContext, useMemo, useState } from "react";

type FavoritesContextValue = {
  favoriteIds: string[];
  isFavorite: (bookId: string) => boolean;
  toggleFavorite: (bookId: string) => void;
  removeFavorite: (bookId: string) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(["1", "3"]);

  const value = useMemo(
    () => ({
      favoriteIds,
      isFavorite: (bookId: string) => favoriteIds.includes(bookId),
      toggleFavorite: (bookId: string) => {
        setFavoriteIds((currentIds) =>
          currentIds.includes(bookId)
            ? currentIds.filter((id) => id !== bookId)
            : [...currentIds, bookId],
        );
      },
      removeFavorite: (bookId: string) => {
        setFavoriteIds((currentIds) =>
          currentIds.filter((id) => id !== bookId),
        );
      },
    }),
    [favoriteIds],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }

  return context;
}
