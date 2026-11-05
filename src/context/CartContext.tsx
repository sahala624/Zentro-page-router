

import { createContext, useState, ReactNode } from "react";

export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    thumbnail: string;
    quantity: number;
}

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    cartCount: number;
    totalPrice: number;
}

export const CartContext = createContext<CartContextType | undefined>(
    undefined
);

export default function CartProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart((previousCart) => {
            const existingProduct = previousCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return previousCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...previousCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((previousCart) =>
            previousCart.filter((item) => item.id !== id)
        );
    };

    const updateQuantity = (id: number, quantity: number) => {
        if (quantity < 1) return;

        setCart((previousCart) =>
            previousCart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                cartCount,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}