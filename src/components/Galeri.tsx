export default function Galeri() {
  return (
    <div>
      {" "}
      <section className="py-20 px-4 bg-[#bdd299]">
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
    </div>
  );
}
