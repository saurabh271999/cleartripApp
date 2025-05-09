import React from "react";

// Replace these imports with correct paths or actual imports
import firstbg from './image/first.png';
import secondBg from "./image/second.png";
import thirdBg from "./image/third.png";
import fourthBg from "./image/fourth.png";


const posters = [
  {
    bg: firstbg,
   
  },
  {
    bg: secondBg,
   
  },
  {
    bg: thirdBg,
    
  },
  {
    bg: fourthBg,
   
  },
];

export default function Poster() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-2 py-6 mx-[10px]">
      {posters.map((poster, idx) => (
        <div
          key={idx}
          className="relative rounded-xl overflow-hidden w-full h-56"
          style={{
            backgroundImage: `url(${poster.bg})`,
            backgroundSize: "cover",
            // backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay with less opacity */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-4">
            {/* Top Row */}
            <div className="flex items-start justify-between">
              {poster.label && (
                <span className="bg-white/80 text-xs font-semibold rounded px-2 py-1">
                  {poster.label}
                </span>
              )}
              {poster.badge && (
                <div className="flex flex-col items-end">
                  <span className="bg-yellow-400 text-xs font-bold rounded-full px-2 py-1">
                    {poster.badge}
                  </span>
                  <span className="text-xs text-white mt-0.5">
                    {poster.badgeSub}
                  </span>
                </div>
              )}
            </div>

            {/* Main Text */}
            <div>
              {poster.title && (
                <h3 className="text-white text-lg font-bold leading-tight">
                  {poster.title}
                </h3>
              )}
              {poster.desc && (
                <p className="text-white text-xs mt-1">{poster.desc}</p>
              )}
              {poster.cta && (
                <p className="text-white text-sm font-semibold mt-2 cursor-pointer hover:underline">
                  {poster.cta}
                </p>
              )}
              {poster.logo && (
                <img
                  src={poster.logo}
                  alt={poster.logoAlt || "logo"}
                  className="mt-3 h-8 object-contain"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
