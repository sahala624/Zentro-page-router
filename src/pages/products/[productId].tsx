import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import type { GetServerSideProps } from "next";

import { ProductService } from "../../services/products-services";
import { CartContext } from "../../context/CartContext";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  images?: string[];
  rating?: number;
}

interface ProductDetailsProps {
  product: Product;
}

export const getServerSideProps: GetServerSideProps<
  ProductDetailsProps
> = async (context) => {
  try {
    const productId = context.params?.productId as string;

    const product = await ProductService.getProductById(Number(productId));
    if (!product) {
      return { notFound: true };
    }

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);

    return { notFound: true };
  }
};

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("ProductDetails must be inside CartProvider");
  }

  const { addToCart } = cartContext;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      thumbnail: product.thumbnail,
      quantity: 1,
    });
  };

  return (
    <>
      <Head>
        <title>{product.title} | Zentro</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="flex min-h-[500px] items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-4xl rounded-xl bg-white p-8 shadow-lg">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

            {/* Product Image */}
            <div>
              <img
                src={product.images?.[0] || product.thumbnail}
                alt={product.title}
                className="h-80 w-full object-contain"
              />
            </div>

            {/* Product Information */}
            <div>
              <h2 className="mb-4 text-3xl font-bold text-green-700">
                {product.title}
              </h2>

              <p className="mb-4 text-gray-600">
                {product.description}
              </p>

              <p className="mb-3 capitalize text-gray-500">
                Category: {product.category}
              </p>

              {product.rating !== undefined && (
                <p className="mb-4 text-yellow-600">
                  ⭐ {product.rating} / 5
                </p>
              )}

              <h3 className="mb-4 text-2xl font-bold text-black">
                ${product.price}
              </h3>

              <Link
                href="/products"
                className="mb-5 mr-3 inline-block rounded bg-gray-700 px-5 py-2 text-white no-underline shadow hover:bg-gray-900"
              >
                ← Back
              </Link>

              <button
                onClick={handleAddToCart}
                className="rounded bg-sky-500 px-5 py-2 font-semibold text-white shadow hover:bg-sky-600"
              >
                Add to Cart
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}