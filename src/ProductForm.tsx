import { useState, ChangeEvent, FormEvent } from "react";

// Definisikan tipe data untuk user dan response yang dikembalikan oleh backend
interface User {
  ID: number;
  Name: string;
}

interface ResponseData {
  message: string;
  invitationLink: string;
  namaUser: string;
  user: User;
}

const ProductForm = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [invitationLink, setInvitationLink] = useState<string>("");

  // Fungsi untuk menangani submit form
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Pastikan nama tidak kosong sebelum submit
    if (!name) {
      setMessage("Nama pengantin harus diisi!");
      return;
    }

    try {
      const response = await fetch(
        "https://curdgolangbasic-production.up.railway.app/admin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }), // Kirim data nama ke backend
        }
      );

      // Tangani response dari backend
      const data: ResponseData = await response.json();
      if (response.ok) {
        setMessage(data.message); // Menampilkan pesan sukses dari backend
        setInvitationLink(data.invitationLink); // Menampilkan link undangan
        setName(""); // Reset input setelah berhasil
        console.log("nama", response);
      } else {
        setMessage("Gagal menambah pengantin.");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("Terjadi kesalahan.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-[#111827]">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama undangan
          </label>
          <input
            type="text"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            } // Tentukan tipe event
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            {invitationLink && (
              <div>
                <p className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Link Undangan:{" "}
                  <a
                    href={invitationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {invitationLink}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Menampilkan pesan */}
        {message && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
