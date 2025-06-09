// src/components/Footer.tsx
import Link from "next/link";

// Ikoner for sosiale medier
const TwitterIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);
const InstagramIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.161 4.573a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5zm-3.085 1.5a3.75 3.75 0 116.472 2.657 3.75 3.75 0 01-6.472-2.657z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Footer() {
  const navLinks = [
    { name: "Hjem", href: "/" },
    { name: "Om Oss", href: "/about" },
    { name: "Spillere", href: "/players" },
    { name: "Kontakt", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Om agenturet */}
          <div>
            <h3 className="text-xl font-bold">Tempo Sports Group</h3>
            <p className="mt-4 text-gray-400">
              Din partner for en profesjonell fotballkarriere. Vi bygger
              fremtiden, en spiller av gangen.
            </p>
          </div>
          {/* Navigasjon */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider">
              Meny
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Kontakt og Sosiale Medier */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider">
              Kontakt Oss
            </h3>
            <address className="mt-4 not-italic text-gray-400 space-y-2">
              <p>Storgata 1, 0155 Oslo</p>
              <p>Telefon: +47 123 45 678</p>
              <p>E-post: kontakt@dittagentur.no</p>
            </address>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <TwitterIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Ditt Agentur AS. Alle rettigheter
            forbeholdt.
          </p>
        </div>
      </div>
    </footer>
  );
}
