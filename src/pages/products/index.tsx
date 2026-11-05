import Head from "next/head";
import type { GetServerSideProps } from "next";
import ProductCard from "../../components/product-card/ProductCard";
import { ProductService } from "../../services/products-services";

interface ProductsPageProps {
  products: any[];
}

export const getServerSideProps: GetServerSideProps<
  ProductsPageProps
> = async () => {
  try {
    const response: any = await ProductService.getProducts();

    const products = Array.isArray(response)
      ? response
      : response?.products || [];

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);

    return {
      props: {
        products: [],
      },
    };
  }
};

export default function Products({ products }: ProductsPageProps) {
  return (
    <>
      <Head>
        <title>Products | Zentro</title>
        <meta
          name="description"
          content="Explore our latest products at Zentro."
        />
      </Head>

      <div className="min-h-screen bg-gray-100 px-4 py-10">
        <div className="mx-auto max-w-7xl">

          {/* Page heading */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-[#232f3e]">
              Explore Our Products
            </h1>

            
          </div>

          {/* Product list */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-gray-500">
              No products available.
            </p>
          )}

        </div>
      </div>
    </>
  );
}