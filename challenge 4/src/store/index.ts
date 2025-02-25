import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { RestaurantInterface } from "../interfaces";

interface RestaurantStore {
  favorites: RestaurantInterface[];
  addToFavorites: (favorite: RestaurantInterface) => void;
  removeFromFavorites: (id: string) => void;
}

export const useStore = create<RestaurantStore>()(
  devtools(
    persist(
      (set) => ({
        favorites: [],
        addToFavorites: (favorite) =>
          set((state) => ({ favorites: [...state.favorites, favorite] })),
        removeFromFavorites: (id) =>
          set((state) => ({
            favorites: state.favorites.filter((favRes) => favRes.id !== id),
          })),
      }),
      {
        name: "currentFavorites",
        getStorage: () => localStorage,
      }
    )
  )
);
