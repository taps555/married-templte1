// api/undangan.js

export default function handler(req, res) {
  // Cek jika metode permintaan adalah GET
  if (req.method === "GET") {
    // Mengambil nama dari query string
    const { name } = req.query;

    // Cek apakah nama ada di query string
    if (name) {
      // Menanggapi dengan pesan undangan yang mencakup nama
      res.status(200).json({ message: `Undangan untuk ${name}` });
    } else {
      // Jika nama tidak ada, kirimkan error
      res.status(400).json({ error: "Nama tidak ditemukan dalam query" });
    }
  } else {
    // Jika metode permintaan bukan GET, kirimkan error 405 (Method Not Allowed)
    res.status(405).json({ error: "Metode tidak diizinkan" });
  }
}
