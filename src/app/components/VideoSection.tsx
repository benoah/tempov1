"use client";

import React from "react";

export default function VideoSection({
  className = "",
}: {
  className?: string;
}) {
  const services = [
    {
      title: "Clubs & Contracts",
      description:
        "Daily contact with clubs nationally and internationally. Our track record of maximizing deals is unmatched in Norway.",
    },
    {
      title: "Health Department",
      description:
        "The only agency in Scandinavia with its own health department. Annual checkups and injury prevention.",
    },
    {
      title: "Sponsorships & Media",
      description:
        "Expert handling of PR situations and endorsement deal negotiations with calculated media exposure.",
    },
  ];

  return (
    <section
      id="about-tempo"
      className={`scroll-mt-20 relative w-full bg-black text-white ${className}`}
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .delay-800 {
          animation-delay: 0.8s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .opacity-0 {
          opacity: 0;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-32">
        <div className="opacity-0 animate-fade-in-up grid lg:grid-cols-2 gap-20">
          {/* Hidden heading for accessibility & SEO */}
          <h2 className="sr-only">Tempo Sports Group Services</h2>

          {/* Left Column */}
          <div>
            <h2 className="opacity-0 animate-fade-in-up delay-200 text-5xl md:text-6xl font-bold mb-6 leading-[1.05]">
              ELEVATING <br />
              <span className="text-[#00DC82]">ELITE ATHLETES</span> <br />
              SINCE 2014
            </h2>

            <p className="opacity-0 animate-fade-in delay-400 text-lg text-gray-300 mb-10 font-light leading-relaxed">
              From seasoned pros to rising talents, we guide every athlete with
              strategy, care, and precision. Whether you&#39;re chasing your
              next contract or just starting your journey — we&#39;re in your
              corner.
            </p>

            <div className="opacity-0 animate-fade-in delay-600">
              <a
                href="#contact"
                title="Contact Tempo Sports Group to become a client"
                className="inline-block px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors duration-300"
                aria-label="Join Tempo Sports Group as a client"
              >
                Join Tempo Sports Group
              </a>
            </div>
          </div>

          {/* Right Column – Services */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`opacity-0 animate-fade-in-right bg-white/5 border border-white/10 rounded-xl p-6 hover:shadow-xl transition-shadow delay-${
                  300 + index * 100
                }`}
              >
                <h3 className="text-2xl font-semibold tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-[17px] leading-relaxed font-light tracking-wide">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="opacity-0 animate-fade-in-up delay-800 mt-24 grid grid-cols-3 gap-8 border-t border-white/20 pt-12 text-center">
          <div>
            <div className="text-3xl font-light">2014</div>
            <div className="text-gray-500 text-sm mt-1">Established</div>
          </div>
          <div>
            <div className="text-3xl font-light">47+</div>
            <div className="text-gray-500 text-sm mt-1">Elite Athletes</div>
          </div>
          <div>
            <div className="text-3xl font-light">#1</div>
            <div className="text-gray-500 text-sm mt-1">In Norway</div>
          </div>
        </div>
      </div>
    </section>
  );
}
