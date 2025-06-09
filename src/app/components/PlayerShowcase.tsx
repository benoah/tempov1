// src/components/PlayerShowcase.tsx

import Image from "next/image";
import Link from "next/link";

// Eksempel på hvordan du kan strukturere spillerdata.
// I en ekte applikasjon ville dette kommet fra et CMS eller en database.
const players = [
  {
    name: "Ola Nordmann",
    position: "Angriper",
    club: "Rosenborg BK",
    clubLogoUrl: "https://placehold.co/40x40/000000/FFFFFF?text=RBK", // Bytt ut med ekte logo-URL
    imageUrl: "https://placehold.co/400x400/CCCCCC/FFFFFF?text=Spillerbilde", // Bytt ut med ekte bilde
    profileUrl: "/players/ola-nordmann",
  },
  {
    name: "Kari Svendsen",
    position: "Midtbanespiller",
    club: "Vålerenga Fotball",
    clubLogoUrl: "https://placehold.co/40x40/0000FF/FFFFFF?text=VIF", // Bytt ut med ekte logo-URL
    imageUrl: "https://placehold.co/400x400/CCCCCC/FFFFFF?text=Spillerbilde",
    profileUrl: "/players/kari-svendsen",
  },
  {
    name: "Jonas Hansen",
    position: "Forsvarsspiller",
    club: "Molde FK",
    clubLogoUrl: "https://placehold.co/40x40/00008B/FFFFFF?text=MFK", // Bytt ut med ekte logo-URL
    imageUrl: "https://placehold.co/400x400/CCCCCC/FFFFFF?text=Spillerbilde",
    profileUrl: "/players/jonas-hansen",
  },
  // ... legg til flere spillere her
];

export default function PlayerShowcase() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Våre Profesjonelle Spillere
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Stolte representanter for talent i 17 ledende lag.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player) => (
            <div
              key={player.name}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:-translate-y-2"
            >
              <div className="relative">
                <Image
                  src={player.imageUrl}
                  alt={`Bilde av ${player.name}`}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <Image
                    src={player.clubLogoUrl}
                    alt={`${player.club} logo`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {player.name}
                    </h3>
                    <p className="text-sm text-gray-200">{player.club}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  {player.position}
                </p>
                <Link href={player.profileUrl}>
                  <span className="mt-4 inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    Se full profil →
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
