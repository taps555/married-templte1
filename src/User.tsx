import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Laki from "./assets/dit.jpg";
import Cewe from "./assets/nis.jpg";

import {
  Heart,
  Calendar,
  MapPin,
  Gift,
  Clock,
  ChevronDown,
} from "lucide-react";
import MyWaktu from "./components/Waktu";

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
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100">
      {/* Cover Section */}
      <section className="h-screen flex flex-col items-center justify-center relative text-center px-4">
        <div className="space-y-6 animate-fade-in">
          <Heart className="w-16 h-16 text-rose-400 mx-auto animate-pulse" />
          <h1 className="font-serif text-4xl md:text-6xl text-gray-800">
            Raadit & Trio
          </h1>
          <p className="text-gray-600">
            Kami mengundang Anda untuk merayakan hari bahagia kami
          </p>
          <p className="font-serif text-2xl text-gray-700">20 Juli 2025</p>
          <MyWaktu timeLeft={timeLeft} />
          <div className="mb-16">
            <button
              onClick={() => setShowContent(true)}
              className="px-8 py-3 bg-rose-400 text-white rounded-full hover:bg-rose-500 transition-all shadow-lg"
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
          <section className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="font-serif text-3xl md:text-4xl text-gray-800">
                Kisah Cinta Kami
              </h2>
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-rose-200"></div>
                  <div className="space-y-12">
                    <div className="relative">
                      <div className="ml-6 md:ml-0 md:flex md:items-center">
                        <div className="md:w-1/2 md:pr-8 text-right hidden md:block">
                          <h3 className="font-serif text-xl text-gray-800">
                            Pertama Bertemu
                          </h3>
                          <p className="text-gray-600">Januari 2025</p>
                        </div>
                        <div className="absolute left-0 md:left-1/2 mt-3 md:mt-0 -ml-3 md:-ml-3">
                          <div className="w-6 h-6 bg-rose-400 rounded-full"></div>
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                          <h3 className="font-serif text-xl text-gray-800 md:hidden">
                            Pertama Bertemu
                          </h3>
                          <p className="text-gray-600 md:hidden">
                            Januari 2025
                          </p>
                          <p className="text-gray-600 mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aperiam aliquid minus ipsa nemo ea,
                            reprehenderit et consequatur eos quaerat maxime.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="ml-6 md:ml-0 md:flex md:items-center">
                        <div className="md:w-1/2 md:pr-8 text-right hidden md:block">
                          <h3 className="font-serif text-xl text-gray-800">
                            Mulai Menjalin Hubungan
                          </h3>
                          <p className="text-gray-600">Januari 2025</p>
                        </div>
                        <div className="absolute left-0 md:left-1/2 mt-3 md:mt-0 -ml-3 md:-ml-3">
                          <div className="w-6 h-6 bg-rose-400 rounded-full"></div>
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                          <h3 className="font-serif text-xl text-gray-800 md:hidden">
                            Mulai Menjalin Hubungan
                          </h3>
                          <p className="text-gray-600 md:hidden">
                            Januari 2025
                          </p>
                          <p className="text-gray-600 mt-2">
                            Setelah saling mengenal lebih dalam, kami memutuskan
                            untuk menjalin hubungan yang lebih serius.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="ml-6 md:ml-0 md:flex md:items-center">
                        <div className="md:w-1/2 md:pr-8 text-right hidden md:block">
                          <h3 className="font-serif text-xl text-gray-800">
                            Lamaran
                          </h3>
                          <p className="text-gray-600">Januari 2025</p>
                        </div>
                        <div className="absolute left-0 md:left-1/2 mt-3 md:mt-0 -ml-3 md:-ml-3">
                          <div className="w-6 h-6 bg-rose-400 rounded-full"></div>
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                          <h3 className="font-serif text-xl text-gray-800 md:hidden">
                            Lamaran
                          </h3>
                          <p className="text-gray-600 md:hidden">
                            Januari 2025
                          </p>
                          <p className="text-gray-600 mt-2">
                            Moment indah ketika Rama melamar Sinta di hadapan
                            kedua keluarga besar.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mempelai Section */}
          <section className="py-20 px-4 bg-rose-50">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="font-serif text-3xl md:text-4xl text-gray-800">
                Mempelai
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4 group">
                  <div className="relative">
                    <img
                      src="#"
                      alt="Mempelai Pria"
                      className="w-64 h-64 object-cover rounded-full mx-auto ring-4 ring-rose-200 group-hover:ring-rose-400 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Heart className="w-8 h-8 text-rose-400 fill-rose-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-gray-800">
                      Nama mempelai Pria
                    </h3>
                    <p className="text-gray-600 mt-2">Putra Pertama dari</p>
                    <p className="text-gray-800 font-medium">
                      Bpk. *** & Ibu ***
                    </p>
                    <div className="mt-4 flex justify-center space-x-4">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-400 hover:text-rose-500"
                      >
                        @
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 group">
                  <div className="relative">
                    <img
                      src="#"
                      alt="Mempelai Wanita"
                      className="w-64 h-64 object-cover rounded-full mx-auto ring-4 ring-rose-200 group-hover:ring-rose-400 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Heart className="w-8 h-8 text-rose-400 fill-rose-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-gray-800">
                      Nama mempelai Wanita
                    </h3>
                    <p className="text-gray-600 mt-2">Putri Kedua dari</p>
                    <p className="text-gray-800 font-medium">
                      Bpk. *** & Ibu ***
                    </p>
                    <div className="mt-4 flex justify-center space-x-4">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-400 hover:text-rose-500"
                      >
                        @
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Acara Section */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="font-serif text-3xl md:text-4xl text-gray-800">
                Jadwal Acara
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-rose-50 p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-rose-400" />
                  </div>
                  <h3 className="font-serif text-2xl text-gray-800 mb-4">
                    Akad Nikah
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center justify-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Sabtu, 20 Desember 2025
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Clock className="w-5 h-5" />
                      08:00 - 10:00 WIB
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>

                <div className="bg-rose-50 p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gift className="w-8 h-8 text-rose-400" />
                  </div>
                  <h3 className="font-serif text-2xl text-gray-800 mb-4">
                    Resepsi
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center justify-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Sabtu, 20 Desember 2025
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Clock className="w-5 h-5" />
                      11:00 - 14:00 WIB
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Lorem ipsum dolor sit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://goo.gl/maps/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-rose-400 text-white rounded-full hover:bg-rose-500 transition-all shadow-lg"
                >
                  <MapPin className="w-5 h-5" />
                  Lihat Lokasi
                </a>
              </div>
            </div>
          </section>

          {/* Galeri Section */}
          <section className="py-20 px-4 bg-rose-50">
            <div className="max-w-6xl mx-auto text-center space-y-12">
              <h2 className="font-serif text-3xl md:text-4xl text-gray-800">
                Galeri Foto
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "https://images.unsplash.com/photo-1519741497674-611481863552?w=500",
                  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500",
                  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500",
                  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500",
                  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500",
                  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500",
                ].map((url, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg"
                  >
                    <img
                      src={url}
                      alt={`Pre-wedding ${index + 1}`}
                      className="w-full h-48 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* RSVP Section */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-xl mx-auto text-center space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl text-gray-800">
                Konfirmasi Kehadiran
              </h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                />
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200 text-gray-500">
                  <option value="" disabled selected>
                    Konfirmasi Kehadiran
                  </option>
                  <option value="hadir">Ya, Saya Akan Hadir</option>
                  <option value="tidak">Maaf, Saya Tidak Bisa Hadir</option>
                </select>
                <input
                  type="number"
                  placeholder="Jumlah Tamu"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                />
                <textarea
                  placeholder="Ucapan & Doa"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-rose-400 text-white rounded-full hover:bg-rose-500 transition-all shadow-lg"
                >
                  Kirim
                </button>
              </form>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-4 bg-rose-50 text-center text-gray-600">
            <div className="max-w-xl mx-auto space-y-4">
              <Heart className="w-8 h-8 text-rose-400 mx-auto" />
              <p>
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
                kepada kami
              </p>
              <p className="font-serif text-xl text-gray-800 mt-4">
                Pria & Wanita
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default User;
