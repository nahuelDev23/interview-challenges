import {createContext} from "react";

import {Cart} from "../../interface/cart";
import {Product} from "../../types";

interface IContextProps {
  cart: Cart[];
  quantityProductsInCart: number;
  totalPrice: number;

  addProduct: (product: Cart) => void;
  isProductInCart: (product: Product) => boolean;
  updateQuantity: (product: Cart, action: number) => void;
}

export const CartContext = createContext({} as IContextProps);
