import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <footer className="py-8 px-4bg-[#bdd299] text-center text-gray-600">
        <div className="max-w-xl mx-auto space-y-4">
          <Heart className="w-8 h-8 text-lime-700 mx-auto" />
          <p>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
            kami
          </p>
          <p className="font-serif text-xl text-gray-800 mt-4">Pria & Wanita</p>
        </div>
      </footer>
    </div>
  );
}
