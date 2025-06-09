// src/components/PlayerShowcase.tsx

import Image from "next/image";
import Link from "next/link";

const players = [
  {
    name: "Ada Hegerberg",
    position: "Angriper",
    club: "Olympique Lyonnais Féminin",
    clubLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Olympique_Lyonnais_Logo.svg/1200px-Olympique_Lyonnais_Logo.svg.png",
    imageUrl:
      "https://images.unsplash.com/photo-1579727409-f19b52479e0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjY3NTB8MHwxfGFsbHx8fHx8fHx8fDE2NzQwOTM2Mjd8&ixlib=rb-4.0.3&q=80&w=1080", // More robust Unsplash URL
    profileUrl: "/players/ada-hegerberg",
  },
  {
    name: "Martin Ødegaard",
    position: "Midtbanespiller",
    club: "Arsenal FC",
    clubLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png",
    imageUrl:
      "https://images.unsplash.com/photo-1599583151847-2e11e3b6e8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjY3NTB8MHwxfGFsbHx8fHx8fHx8fDE2NzQwOTM2Mjd8&ixlib=rb-4.0.3&q=80&w=1080", // More robust Unsplash URL
    profileUrl: "/players/martin-ødegaard",
  },
  {
    name: "Erling Haaland",
    position: "Angriper",
    club: "Manchester City FC",
    clubLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_logo.svg/1200px-Manchester_City_FC_logo.svg.png",
    imageUrl:
      "https://images.unsplash.com/photo-1600987979207-a9a3b9f3e4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjY3NTB8MHwxfGFsbHx8fHx8fHx8fDE2NzQwOTM2Mjd8&ixlib=rb-4.0.3&q=80&w=1080", // More robust Unsplash URL
    profileUrl: "/players/erling-haaland",
  },
  {
    name: "Caroline Graham Hansen",
    position: "Angriper",
    club: "FC Barcelona Femení",
    clubLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
    imageUrl:
      "https://images.unsplash.com/photo-1587563061324-42f0a1c3e3e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjY3NTB8MHwxfGFsbHx8fHx8fHx8fDE2NzQwOTM2Mjd8&ixlib=rb-4.0.3&q=80&w=1080", // More robust Unsplash URL
    profileUrl: "/players/caroline-graham-hansen",
  },
  {
    name: "Alexander Sørloth",
    position: "Angriper",
    club: "Villarreal CF",
    clubLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Villarreal_CF_logo.svg/1200px-Villarreal_CF_logo.svg.png",
    imageUrl:
      "https://images.unsplash.com/photo-1579727409-f19b52479e0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjY3NTB8MHwxfGFsbHx8fHx8fHx8fDE2NzQwOTM2Mjd8&ixlib=rb-4.0.3&q=80&w=1080", // More robust Unsplash URL
    profileUrl: "/players/alexander-sørloth",
  },
  {
    name: "Ingrid Syrstad Engen",
    position: "Midtbanespiller",
    club: "FC Barcelona Femení",
    clubLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
    imageUrl:
      "https://images.unsplash.com/photo-1587563061324-42f0a1c3e3e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjY3NTB8MHwxfGFsbHx8fHx8fHx8fDE2NzQwOTM2Mjd8&ixlib=rb-4.0.3&q=80&w=1080", // More robust Unsplash URL
    profileUrl: "/players/ingrid-syrstad-engen",
  },
];

export default function PlayerShowcase() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl leading-tight">
            Møt Våre Profesjonelle Spillere
          </h2>
          <p className="mt-5 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dyktige utøvere som stolt representerer de beste talentene fra
            Norges fotballscene.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {players.map((player) => (
            <div
              key={player.name}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden group transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="relative h-64">
                <Image
                  src={player.imageUrl}
                  alt={`Bilde av ${player.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-5 left-5 flex items-end gap-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={player.clubLogoUrl}
                      alt={`${player.club} logo`}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-full border-3 border-white shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-snug">
                      {player.name}
                    </h3>
                    <p className="text-base text-gray-300 mt-0.5">
                      {player.club}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-7">
                <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg mb-4">
                  {player.position}
                </p>
                <Link href={player.profileUrl} passHref>
                  <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-lg">
                    Se full profil
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
