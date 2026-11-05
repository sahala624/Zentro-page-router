
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState<any[]>([]);
    const [showResults, setShowResults] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (search.trim() === "") {
            setProducts([]);
            setShowResults(false);
            return;
        }

        const timer = setTimeout(async () => {
            try {
                const response = await fetch(
                    "https://dummyjson.com/products?limit=0"
                );

                const data = await response.json();

                const matchingProducts = data.products.filter(
                    (product: any) =>
                        product.title.toLowerCase().includes(search.toLowerCase())
                );

                matchingProducts.sort((a: any, b: any) => {
                    const aStarts = a.title.toLowerCase().startsWith(search.toLowerCase());
                    const bStarts = b.title.toLowerCase().startsWith(search.toLowerCase());

                    return Number(bStarts) - Number(aStarts);
                });

                setProducts(matchingProducts);
                setShowResults(true);

            } catch (error) {
                console.log("Search error:", error);
            }
        }, 300);

        return () => clearTimeout(timer);

    }, [search]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (search.trim()) {
            setShowResults(false);
            router.push("/search/" + encodeURIComponent(search.trim()));
        }
    }

    function handleProductClick(productId: number) {
        setShowResults(false);
        setSearch("");
        router.push(`/products/${productId}`);
    }

    return (
        <div className="relative w-96">

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={() => {
                        if (search.trim()) {
                            setShowResults(true);
                        }
                    }}
                    className="w-full rounded-full border border-gray-300 bg-white px-5 py-3 text-black outline-none focus:border-blue-500"
                />
            </form>

            {showResults && search.trim() && (
                <div  className="absolute left-0 top-full z-50 mt-2 max-h-96 w-full overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl">

                    {products.length > 0 ? (

                        products.map((product: any) => (
                            <div
                                key={product.id}
                                onClick={() => handleProductClick(product.id)}
                                className="flex cursor-pointer items-center gap-3 border-b border-gray-200 p-3 text-black shadow-sm transition hover:bg-gray-50 hover:shadow-md"
                            >
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="h-14 w-14 object-contain"
                                />

                                <div>
                                    <p className="font-medium">
                                        {product.title}
                                    </p>

                                    <p className="text-sm text-gray-600">
                                        ${product.price}
                                    </p>
                                </div>
                            </div>
                        ))

                    ) : (
                        <p className="p-4 text-gray-500">
                            No products found.
                        </p>
                    )}

                </div>
            )}

        </div>
    );
}
