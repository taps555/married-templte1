import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useParams, useNavigate } from "react-router-dom";
// import Laki from "./assets/dit.jpg";
// import Cewe from "./assets/nis.jpg";
import Mempelai from "./components/Mempelai";
import Acara from "./components/Acara";
import Galeri from "./components/Galeri";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";
import Story from "./components/StoryLove";
import Header from "./components/Header";

export default function () {
  const [showContent, setShowContent] = useState(false);
  const { name } = useParams<{ name: string }>(); // Menentukan tipe id dari URL
  const [user, setUser] = useState<any | null>(null);
  useEffect(() => {
    const fetchInvitation = async () => {
      try {
        const response = await fetch(
          `https://curdgolangbasic-production.up.railway.app/undangan/${name}/myWedding`
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
  }, [name]);
  return (
    <div>
      <Header />
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
    </div>
  );
}
