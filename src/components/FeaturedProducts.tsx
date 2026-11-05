
import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  thumbnail: string;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=5"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="py-5 text-gray-500">Loading products...</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {products.map((product) => (
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          className="rounded-lg border bg-white p-3 text-inherit !no-underline shadow-sm transition hover:!shadow-lg"
        >
          <div className="flex h-28 items-center justify-center bg-gray-50 p-2">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full w-full object-contain"
            />
          </div>

          <h3 className="mt-3 text-[#232f3e]">
            {product.title}
          </h3>

          <p className="mt-1 text-sm font-bold text-sky-600">
            ${product.price}
          </p>

          <p className="text-sm text-yellow-500">
            ⭐ {product.rating.toFixed(1)} / 5
          </p>
        </Link>
      ))}
    </div>
  );
}
