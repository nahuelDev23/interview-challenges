/* eslint-disable prettier/prettier */
import { Cart } from "../../interface/cart"

import { ICartState } from "./CartProvider"

type CartActionPayload =
    | { type: 'ADD_TO_CART', payload: Cart }
    | { type: 'UPDATE_QUANTITY', payload: Cart[] }
    | {
        type: 'UPDATE_SUMARY', payload: {
            quantityProductsInCart: number;
            totalPrice: number;
        }
    }

export const cartReducer = (state: ICartState, action: CartActionPayload) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload] //aca solo viene el product, y le agrego el state.cart
            }
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cart: [...action.payload] //el resto llega en la condicion : p
            }
        case 'UPDATE_SUMARY':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
