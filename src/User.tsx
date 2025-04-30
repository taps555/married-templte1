import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import Laki from "./assets/dit.jpg";
// import Cewe from "./assets/nis.jpg";
import Mempelai from "./components/Mempelai";
import Acara from "./components/Acara";
import MyWaktu from "./components/Waktu";
import Galeri from "./components/Galeri";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";
import Story from "./components/StoryLove";

import {
  Heart,
  // Calendar,
  // MapPin,
  // Gift,
  // Clock,
  ChevronDown,
} from "lucide-react";

const User = () => {
  const [showContent, setShowContent] = useState(false);
  const { name } = useParams<{ name: string }>(); // Menentukan tipe id dari URL
  const [user, setUser] = useState<any | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const navigate = useNavigate();
  const invitePage = () => {
    navigate("/undangan/" + name + "/myWedding");
  };

  // Fungsi untuk menghitung waktu tersisa
  // Fetch data undangan berdasarkan id
  useEffect(() => {
    const fetchInvitation = async () => {
      try {
        const response = await fetch(
          `https://curdgolangbasic-production.up.railway.app/undangan/${name}`
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          alert("Undangan tidak ditemukan.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchInvitation();
  }, [name]); // Efek akan dijalankan setiap kali `id` berubah

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#bdd299] to-[#bdd299]">
      {/* Cover Section */}
      <section className="h-screen flex flex-col items-center justify-center relative text-center px-4">
        <div className="space-y-6 animate-fade-in">
          <Heart className="w-16 h-16 text-lime-800 mx-auto animate-pulse" />
          <h1 className="font-serif text-4xl md:text-6xl text-gray-800">
            {name}
          </h1>
          <p className="text-gray-700">
            Kami mengundang Anda untuk merayakan hari bahagia kami
          </p>
          <p className="font-serif text-2xl text-gray-700">20 Juli 2025</p>
          <MyWaktu timeLeft={timeLeft} />
          <div className="mb-16">
            <button
              onClick={() => invitePage()}
              className="px-8 py-3 bg-lime-500 text-white rounded-full hover:bg-lime-600 transition-all shadow-lg"
            >
              Buka Undangan
            </button>
          </div>
        </div>

        <ChevronDown className="absolute bottom-8 w-8 h-8 text-gray-400 animate-bounce" />
      </section>

      {showContent && (
        <>
          {/* Love Story Section */}
          <Story />

          {/* Mempelai Section */}
          <Mempelai />

          {/* Acara Section */}
          <Acara />

          {/* Galeri Section */}
          <Galeri />

          {/* RSVP Section */}
          <Rsvp />

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default User;
