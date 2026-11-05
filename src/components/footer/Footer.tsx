
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-900 pt-8 pb-5 text-gray-100">
      <div className="mx-auto max-w-7xl px-4 text-center md:text-left">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <h5 className="mb-4 text-lg font-bold uppercase">
              Zentro.
            </h5>
            <p className="text-gray-300">
              Your one-stop shop for quality products at affordable prices.
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-lg font-bold uppercase">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "About Us", href: "/about-us" },
                { name: "Contact Us", href: "/contact-us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-gray-300 no-underline transition-all duration-200 hover:translate-x-1 hover:text-sky-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-lg font-bold uppercase">
              Customer Service
            </h5>
            <ul className="space-y-3 text-gray-300">
              <li>Shipping & Delivery</li>
              <li>Returns & Refunds</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-lg font-bold uppercase">
              Contact
            </h5>
            <ul className="space-y-3 text-gray-300">
              <li>Chennai, India</li>
              <li>support@zentro.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>

        </div>

        <hr className="my-6 border-gray-600" />

        <div className="text-center text-sm text-gray-300">
          © 2026 Zentro. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
