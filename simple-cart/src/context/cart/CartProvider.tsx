/* eslint-disable prettier/prettier */
import { useReducer, useEffect } from 'react';

import { Cart } from '../../interface/cart';
import { Product } from '../../types';

import { CartContext } from "./CartContext"
import { cartReducer } from "./cartReducer";

export interface ICartState {
    cart: Cart[];
    quantityProductsInCart: number;
    totalPrice: number;
}

const INITIAL_CART_STATE: ICartState = {
    cart: [],
    quantityProductsInCart: 0,
    totalPrice: 0,
}

export const CartProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE)

    useEffect(() => {
        state.cart.map(item => {
            if (item.quantity === 0) {
                dispatch({
                    type: "UPDATE_QUANTITY",
                    payload: state.cart.filter(p => p.quantity > 0)
                })
            }
        })
    }, [state.cart]);

    useEffect(() => {
        const quantityProductsInCart = state.cart.reduce((prev,current) => prev + current.quantity,0)
        const totalPrice = state.cart.reduce((prev, current) => prev + current.price * current.quantity, 0)

        dispatch({
            type: "UPDATE_SUMARY",
            payload: {
                quantityProductsInCart,
                totalPrice,
            }
        })
    }, [state.cart]);

    const isProductInCart = (product: Product):  boolean => {

        return !!state.cart.find((item) => item.id === product.id)
    }

    const addProduct = (product: Cart) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: product
        })
    }

    const updateQuantity = (product: Cart, action: number) => {
        dispatch({
            type: "UPDATE_QUANTITY",
            payload: state.cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + action } : item)
        })
    }

    return (
        <CartContext.Provider
            value={{
                ...state,
                addProduct,
                isProductInCart,
                updateQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
