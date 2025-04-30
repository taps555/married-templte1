import { Calendar, MapPin, Gift, Clock } from "lucide-react";

export default function Acara() {
  return (
    <div>
      {" "}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800">
            Jadwal Acara
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-lime-100 p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-lime-600" />
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

            <div className="bg-lime-100 p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-lime-600" />
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-lime-600 text-white rounded-full hover:bg-lime-700 transition-all shadow-lg"
            >
              <MapPin className="w-5 h-5" />
              Lihat Lokasi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
