import { Heart } from "lucide-react";

export default function Mempelai() {
  return (
    <div>
      {" "}
      <section className="py-20 px-4 bg-[#bdd299]">
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
                  className="w-64 h-64 object-cover rounded-full mx-auto ring-4 ring-lime-500 group-hover:ring-lime-300 transition-all duration-300"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <Heart className="w-8 h-8 text-lime-500 fill-lime-600" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-gray-800">
                  Nama mempelai Pria
                </h3>
                <p className="text-gray-600 mt-2">Putra Pertama dari</p>
                <p className="text-gray-800 font-medium">Bpk. *** & Ibu ***</p>
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
                  className="w-64 h-64 object-cover rounded-full mx-auto ring-4  ring-lime-500 group-hover:ring-lime-300 transition-all duration-300"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <Heart className="w-8 h-8 text-lime-500 fill-lime-600" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-gray-800">
                  Nama mempelai Wanita
                </h3>
                <p className="text-gray-600 mt-2">Putri Kedua dari</p>
                <p className="text-gray-800 font-medium">Bpk. *** & Ibu ***</p>
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
    </div>
  );
}
