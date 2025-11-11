import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import styles from "../style";

const Try = () => {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      await addDoc(collection(db, "reservation"), form);
      setSuccess(true);
      setForm({ nom: "", prenom: "", email: "", telephone: "" });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      alert("Erreur lors de la réservation : " + (err.message || err));
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden">
      {/* Gradients background */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-[50%] rounded-full pink__gradient top-20" />
      
      <div className={`${styles.paddingX} w-full relative z-[1]`}>
        <div className={`${styles.flexCenter} flex-col max-w-[550px] mx-auto`}>
          <div className="text-center text-white p-8 rounded-[20px] bg-black-gradient-2 box-shadow">
            <h1 className={`${styles.heading2} mb-4`}>Séance d'essai</h1>
            <p className={`${styles.paragraph} mb-8`}>
              Bienvenue — réserve ta séance d'essai ici et fait toi recontacter en moins de 48h !
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                value={form.nom}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-[10px] bg-white/10 text-white placeholder-white/60 font-poppins focus:outline-none focus:bg-white/20 transition"
              />
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                value={form.prenom}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-[10px] bg-white/10 text-white placeholder-white/60 font-poppins focus:outline-none focus:bg-white/20 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-[10px] bg-white/10 text-white placeholder-white/60 font-poppins focus:outline-none focus:bg-white/20 transition"
              />
              <input
                type="tel"
                name="telephone"
                placeholder="Numéro de téléphone"
                value={form.telephone}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-[10px] bg-white/10 text-white placeholder-white/60 font-poppins focus:outline-none focus:bg-white/20 transition"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-500 text-white border border-1 font-poppins font-bold py-3 rounded-[10px] transition disabled:opacity-50"
              >
                {loading ? "Envoi en cours..." : "Réserver ma séance d'essai"}
              </button>
              {success && (
                <div className="p-3 rounded-[10px] bg-green-500/20 text-green-400 font-poppins text-center">
                  ✓ Nous allons te recontacter ! À bientôt au K. Intensive Training Club !
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Try;
