

import Link from "next/link";
import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

export default function ProductCard(props: any) {
  const prod = props.product;

  const context = useContext(CartContext);

  if (!context) {
    throw new Error("ProductCard must be inside CartProvider");
  }

  const { addToCart } = context;

  const handleAddToCart = () => {
    addToCart({
      id: prod.id,
      title: prod.title,
      price: prod.price,
      category: prod.category,
      thumbnail: prod.thumbnail,
      quantity: 1,
    });
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/products/${prod.id}`}>
        <div className="flex h-64 items-center justify-center bg-gray-100 p-5">
          <img
            src={prod.thumbnail}
            alt={prod.title}
            className="h-full w-full object-contain"
          />
        </div>
      </Link>

      <div className="p-5">
        <h4 className="mb-2 text-lg font-semibold text-[#232f3e]">
          {prod.title}
        </h4>


        <p className="mb-2 text-sm capitalize text-gray-500">
          Category: {prod.category}
        </p>

        <p className="mb-2 text-xl font-bold text-sky-600">${prod.price}</p>

        <p className="mb-4 text-sm text-yellow-600">⭐ {prod.rating} / 5</p>

        <button
          onClick={handleAddToCart}
          className="block w-full rounded-lg bg-sky-500 px-4 py-2 text-center font-semibold text-white shadow transition hover:bg-sky-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
