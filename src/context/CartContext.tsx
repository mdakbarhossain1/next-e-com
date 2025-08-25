"use client";
import React, { createContext, useContext, useMemo, useReducer } from "react";

type CartItem = {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
};
type CartState = { items: CartItem[]; total: number };

type Action =
  | { type: "ADD"; payload: CartItem }
  | { type: "REMOVE"; payload: { productId: string } }
  | { type: "SET_QTY"; payload: { productId: string; quantity: number } }
  | { type: "CLEAR" };

const CartCtx = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find(
        (i) => i.productId === action.payload.productId
      );
      let items = existing
        ? state.items.map((i) =>
            i.productId === action.payload.productId
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          )
        : [...state.items, action.payload];
      const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
      return { items, total };
    }
    case "REMOVE": {
      const items = state.items.filter(
        (i) => i.productId !== action.payload.productId
      );
      const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
      return { items, total };
    }
    case "SET_QTY": {
      const items = state.items.map((i) =>
        i.productId === action.payload.productId
          ? { ...i, quantity: action.payload.quantity }
          : i
      );
      const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
      return { items, total };
    }
    case "CLEAR":
      return { items: [], total: 0 };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [], total: 0 });
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
