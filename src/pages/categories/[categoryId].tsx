
import Head from "next/head";
import type { GetServerSideProps } from "next";
import ProductCard from "../../components/product-card/ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  rating: number;
}

interface CategoryPageProps {
  categoryName: string;
  products: Product[];
}

export const getServerSideProps: GetServerSideProps<
  CategoryPageProps
> = async (context) => {
  const categoryName = context.params?.categoryId as string;

  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${encodeURIComponent(categoryName)}?limit=30`
    );

    if (!response.ok) {
      return { notFound: true };
    }

    const data = await response.json();

    return {
      props: {
        categoryName,
        products: data.products || [],
      },
    };
  } catch (error) {
    console.error("Category fetching error:", error);

    return {
      props: {
        categoryName,
        products: [],
      },
    };
  }
};

export default function CategoryProducts({
  categoryName,
  products,
}: CategoryPageProps) {
  return (
    <>
      <Head>
        <title>{categoryName} | Zentro</title>
        <meta
          name="description"
          content={`Explore ${categoryName} products at Zentro.`}
        />
      </Head>

      <main className="min-h-screen bg-gray-100 px-4 py-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <h1 className="text-3xl font-bold capitalize text-[#232f3e]">
              {categoryName}
            </h1>

            <div className="mt-3 h-1 w-20 rounded-full bg-sky-500"></div>

            <p className="mt-3 text-gray-500">
              Explore our {categoryName} collection.
            </p>
          </div>

          {products.length === 0 ? (
            <p className="py-10 text-center text-gray-500">
              No products found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}

        </div>
      </main>
    </>
  );
}
