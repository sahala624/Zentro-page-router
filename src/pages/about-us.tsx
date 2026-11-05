export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Introduction */}
      <section className="bg-[#e0f7ff] px-6 py-16 text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-[#009fe3]">
          Get to know us
        </p>

        <h1 className="text-4xl font-bold text-[#232f3e]">
          About ShopEase
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Your everyday shopping destination. We bring together quality
          products, great choices and a simple shopping experience.
        </p>
      </section>

      {/* Who We Are */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="mb-5 text-3xl font-bold text-[#232f3e]">
            Who We Are
          </h2>

          <p className="mb-4 leading-8 text-gray-600">
            ShopEase is an online shopping platform created to make
            shopping easy and convenient. From everyday essentials to
            the latest products, we bring different categories together
            in one place.
          </p>

          <p className="leading-8 text-gray-600">
            Our goal is to help customers explore products, compare
            choices and enjoy a smooth shopping experience.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-md">
          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-sky-100 p-6 text-center">
              <span className="text-4xl">🛍️</span>
              <h3 className="mt-3 font-bold text-[#232f3e]">
                Easy Shopping
              </h3>
            </div>

            <div className="rounded-xl bg-sky-100 p-6 text-center">
              <span className="text-4xl">📦</span>
              <h3 className="mt-3 font-bold text-[#232f3e]">
                Great Choices
              </h3>
            </div>

            <div className="rounded-xl bg-sky-100 p-6 text-center">
              <span className="text-4xl">💙</span>
              <h3 className="mt-3 font-bold text-[#232f3e]">
                Customer Care
              </h3>
            </div>

            <div className="rounded-xl bg-sky-100 p-6 text-center">
              <span className="text-4xl">✨</span>
              <h3 className="mt-3 font-bold text-[#232f3e]">
                Simple Experience
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

          <div className="rounded-xl border-t-4 border-[#009fe3] bg-gray-50 p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-[#232f3e]">
              Our Mission
            </h2>

            <p className="leading-8 text-gray-600">
              To make online shopping simple, accessible and enjoyable
              by providing a variety of products in one convenient place.
            </p>
          </div>

          <div className="rounded-xl border-t-4 border-[#009fe3] bg-gray-50 p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-[#232f3e]">
              Our Vision
            </h2>

            <p className="leading-8 text-gray-600">
              To become a trusted shopping destination where customers
              can discover products and enjoy a comfortable online
              shopping experience.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="mb-10 text-center text-3xl font-bold text-[#232f3e]">
          Why Choose ShopEase?
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-xl bg-white p-7 text-center shadow-md">
            <span className="text-4xl">🚚</span>
            <h3 className="my-3 text-xl font-semibold text-[#232f3e]">
              Free Shipping
            </h3>
            <p className="text-gray-600">
              Enjoy convenient delivery on eligible orders.
            </p>
          </div>

          <div className="rounded-xl bg-white p-7 text-center shadow-md">
            <span className="text-4xl">🎧</span>
            <h3 className="my-3 text-xl font-semibold text-[#232f3e]">
              Customer Support
            </h3>
            <p className="text-gray-600">
              We aim to make your shopping experience smooth.
            </p>
          </div>

          <div className="rounded-xl bg-white p-7 text-center shadow-md">
            <span className="text-4xl">🔒</span>
            <h3 className="my-3 text-xl font-semibold text-[#232f3e]">
              Safe Shopping
            </h3>
            <p className="text-gray-600">
              Shop with confidence and browse with ease.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}