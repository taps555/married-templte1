export default function Rsvp() {
  return (
    <div>
      {" "}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800">
            Konfirmasi Kehadiran
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-400"
            />
            <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-400 text-gray-500">
              <option value="" disabled selected>
                Konfirmasi Kehadiran
              </option>
              <option value="hadir">Ya, Saya Akan Hadir</option>
              <option value="tidak">Maaf, Saya Tidak Bisa Hadir</option>
            </select>
            <input
              type="number"
              placeholder="Jumlah Tamu"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-400"
            />
            <textarea
              placeholder="Ucapan & Doa"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-400"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-lime-600 text-white rounded-full hover:bg-lime-700 transition-all shadow-lg"
              // className="px-8 py-3 bg-lime-500 text-white rounded-full hover:bg-lime-600 transition-all shadow-lg"
            >
              Kirim
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
