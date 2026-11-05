import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zentro | Home</title>
        <meta
          name="description"
          content="Explore the latest trends and shop your favorite products at Zentro."
        />
      </Head>

      <div>
        {/* Hero Banner */}
        <section
          className="relative flex min-h-[380px] w-full items-center overflow-hidden bg-sky-100 bg-cover bg-center bg-no-repeat md:min-h-[420px]"
          style={{ backgroundImage: "url('/images/blue.bnner.png')" }}
        >
          <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-7/12">
                <h1 className="text-4xl font-bold text-cyan-800 md:text-5xl lg:text-6xl">
                  Discover Your
                  <span className="text-gray-700"> Perfect Style.</span>
                </h1>

                <p className="mt-3 text-lg text-slate-700 md:text-xl">
                  Explore the latest trends, find your favorites, and enjoy
                  amazing deals on products you love.
                </p>

                <Link
                  href="/products"
                  className="mt-7 inline-flex items-center gap-3 rounded-lg bg-sky-600 px-7 py-3.5 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-sky-700"
                >
                  Shop Now <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-gray-100 py-12">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="h-full rounded-lg bg-white shadow-sm hover:-translate-y-0.5">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900">
                    🚚 Free Shipping
                  </h4>
                  <p className="mt-2 text-gray-500">
                    On Orders Over $50
                  </p>
                </div>
              </div>

              <div className="h-full rounded-lg bg-white shadow-sm hover:-translate-y-0.5">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900">
                    🎧 24/7 Support
                  </h4>
                  <p className="mt-2 text-gray-500">
                    Powerful applications for mobile devices.
                  </p>
                </div>
              </div>

              <div className="h-full rounded-lg bg-white shadow-sm hover:-translate-y-0.5">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900">
                    🔒 Secure Payments
                  </h4>
                  <p className="mt-2 text-gray-500">
                    Clean and simple designs for modern applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collection */}
        <section className="mx-auto max-w-7xl space-y-6 px-4 py-8">
          {/* Promotional Banners */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center justify-between rounded-lg bg-sky-100 p-5">
              <div>
                <h2 className="font-bold text-slate-800">
                  Upgrade Your Tech Game
                </h2>
                <p className="text-sm text-slate-600">
                  Top brands. Latest gadgets.
                </p>
                <Link
                  href="/products"
                  className="mt-3 inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold"
                >
                  Shop Electronics →
                </Link>
              </div>

              <Image
                className="rounded-full"
                src="/images/headphone1.jpg"
                alt="Headphones"
                width={100}
                height={100}
              />
            </div>

            <div className="flex items-center justify-between rounded-lg bg-orange-100 p-5">
              <div>
                <h2 className="font-bold text-slate-800">
                  Refresh Your Wardrobe
                </h2>
                <p className="text-sm text-slate-600">
                  New arrivals. Fresh styles.
                </p>
                <Link
                  href="/products"
                  className="mt-3 inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold"
                >
                  Shop Fashion →
                </Link>
              </div>

              <span className="text-5xl">👜</span>
            </div>
          </div>

          {/* Section Heading */}
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Featured Collection
            </h2>
            <p className="text-sm text-slate-500">
              Discover products picked for you
            </p>
          </div>

          {/* Featured Products */}
          <FeaturedProducts />
        </section>

        {/* Newsletter */}
        <section className="mb-3 w-full bg-sky-100 px-6 py-6">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="font-bold text-slate-800">
                ✉ Be the First to Know
              </h2>
              <p className="text-sm text-slate-600">
                Get exclusive offers and new arrivals.
              </p>
            </div>

            <div className="flex w-full gap-2 sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="min-w-0 flex-1 rounded-full border bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400 sm:w-64"
              />

              <button className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-700">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}