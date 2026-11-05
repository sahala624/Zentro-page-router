"use client";

import { useContext } from "react";
import Link from "next/link";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("CartPage must be inside CartProvider");
    }

    const {
        cart,
        removeFromCart,
        updateQuantity,
        cartCount,
        totalPrice,
    } = context;

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-10">
            <div className="mx-auto max-w-6xl">

                

                {cart.length === 0 ? (
                    <div className="rounded-xl bg-white p-10 text-center shadow">
                        <h2 className="mb-3 text-2xl font-semibold text-[#232f3e]">
                            Your cart is empty
                        </h2>

                        <p className="mb-6 text-gray-500">
                            You haven't added any products to your cart yet.
                        </p>

                        <Link
                            href="/products"
                            className="inline-block rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-600"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-3">

                        {/* Cart Products */}
                        <div className="space-y-4 md:col-span-2">

                            {cart.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex flex-col gap-5 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
                                >
                                    <div className="flex h-32 w-full items-center justify-center rounded-lg bg-gray-100 p-3 sm:w-32">
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <h2 className="mb-2 text-lg font-semibold text-[#232f3e]">
                                            {product.title}
                                        </h2>

                                        <p className="mb-2 text-sm capitalize text-gray-500">
                                            {product.category}
                                        </p>

                                        <p className="text-lg font-bold text-sky-600">
                                            ${product.price}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        

                                        <button
                                            onClick={() =>
                                                removeFromCart(product.id)
                                            }
                                            className="text-sm font-semibold text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="h-fit rounded-xl bg-white p-6 shadow-sm">
                            <h2 className="mb-5 text-xl font-bold text-[#232f3e]">
                                Order Summary
                            </h2>

                            <div className="mb-4 flex justify-between text-gray-600">
                                <span>Total Items</span>
                                <span>{cartCount}</span>
                            </div>

                            <div className="mb-4 flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className="mb-4 flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>

                            <hr className="my-4" />

                            <div className="mb-6 flex justify-between text-lg font-bold text-[#232f3e]">
                                <span>Total</span>
                                <span className="text-sky-600">
                                    ${totalPrice.toFixed(2)}
                                </span>
                            </div>

                            <button
                                onClick={() =>
                                    alert("Order placed successfully!")
                                }
                                className="w-full rounded-lg bg-sky-500 px-4 py-3 font-semibold text-white transition hover:bg-sky-600"
                            >
                                Proceed to Checkout
                            </button>

                            <Link
                                href="/products"
                                className="mt-4 block text-center text-sm font-semibold text-sky-600 hover:underline"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}