import type { AppProps } from "next/app";
import "../styles/globals.css";

import CartProvider from "../context/CartContext";
import Navigation from "../components/nav/Navigation";
import Footer from "../components/footer/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Navigation />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </CartProvider>
  );
}