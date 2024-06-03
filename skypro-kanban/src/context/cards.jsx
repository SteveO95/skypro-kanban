import { createContext, useContext } from "react";

export const CardsContext = createContext(null);

export function useCardsContext() {
  return useContext(CardsContext);
}
