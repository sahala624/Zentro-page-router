import Link from "next/link";
import { useContext } from "react";
import SearchBox from "../SearchBox";
import { CartContext } from "../../context/CartContext";

function Navigation() {
  const cartContext = useContext(CartContext);
  const cartCount = cartContext?.cartCount || 0;

  const categories = [
    { name: "Beauty", id: "beauty" },
    { name: "Fragrances", id: "fragrances" },
    { name: "Furniture", id: "furniture" },
    { name: "Groceries", id: "groceries" },
    { name: "Laptops", id: "laptops" },
    { name: "Smartphones", id: "smartphones" },
  ];

  return (
    <div>
      {/* Main Navigation */}
      <nav className="bg-gray-100 px-3 py-3">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-4xl font-bold tracking-wide text-sky-500 no-underline px-3"
          >
            Z<span className="text-sky-300">entro.</span>
          </Link>

          <SearchBox />

          <div className="flex items-center gap-5 px-3">
            <Link href="/" className="font-medium text-blue-600 no-underline">
              Home
            </Link>

            <Link href="/contact-us" className="font-medium text-blue-600 no-underline">
              Contact
            </Link>

            <Link href="/products" className="font-medium text-blue-600 no-underline">
              Products
            </Link>

            <Link href="/about-us" className="font-medium text-blue-600 no-underline">
              About Us
            </Link>

            <Link
              href="/cart"
              className="relative flex items-center gap-2 font-medium text-blue-600 no-underline"
            >
              <span className="text-2xl">🛒</span>
             

              {cartCount > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-sky-500 px-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Category Navigation */}
      <nav className="flex h-[50px] items-center gap-1 overflow-x-auto whitespace-nowrap bg-gray-700 px-2 text-white">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-white no-underline hover:border hover:border-white sm:text-base"
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Navigation;