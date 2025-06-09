// src/components/ServicesSection.tsx

// Eksempel på ikoner (inline SVG). Disse er fra Heroicons (av Tailwind CSS-teamet).
const ContractIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);
const CareerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);
const MarketingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-3.174 7.625-7.25V5.882"
    />
  </svg>
);

const services = [
  {
    title: "Kontraktsforhandlinger",
    description:
      "Vi sikrer de beste vilkårene og betingelsene for deg, slik at du kan fokusere fullt på spillet.",
    icon: <ContractIcon />,
  },
  {
    title: "Karriereplanlegging",
    description:
      "Sammen legger vi en strategisk plan for din karriere, fra klubbvalg til langsiktige mål.",
    icon: <CareerIcon />,
  },
  {
    title: "Sponsing & Markedsføring",
    description:
      "Vi bygger din personlige merkevare og kobler deg med de rette kommersielle partnerne.",
    icon: <MarketingIcon />,
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Hva Vi Gjør For Deg
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Vårt dedikerte team jobber på alle fronter for å maksimere din
          suksess.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
