import React from "react";
import { Calendar, MapPin, Gift, Clock } from "lucide-react";
import { Heart } from "lucide-react";
import { ChevronDown } from "lucide-react";

import MyWaktu from "./Waktu";

export default function Header() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-[#bdd299] to-[#bdd299]">
        <section className="h-screen flex flex-col items-center justify-center relative text-center px-4">
          <div className="space-y-6 animate-fade-in">
            <Heart className="w-16 h-16 text-lime-800 mx-auto animate-pulse" />
            <h1 className="font-serif text-4xl md:text-6xl text-gray-800"></h1>
            <p className="text-gray-700">
              Kami mengundang Anda untuk merayakan hari bahagia kami
            </p>
            <p className="font-serif text-2xl text-gray-700">20 Juli 2025</p>

            <div className="mb-16"></div>
          </div>

          <ChevronDown className="absolute bottom-8 w-8 h-8 text-gray-400 animate-bounce" />
        </section>
      </div>
    </div>
  );
}
