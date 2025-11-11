import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import styles from "../style";

const AdminContent = ({ onLogout }) => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReservations = async () => {
    setLoading(true);
    setError("");
    try {
      const snapshot = await getDocs(collection(db, "reservation"));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setReservations(data);
    } catch (err) {
      setError("Erreur lors du chargement des réservations : " + (err.message || err));
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (confirm("Confirmer la suppression ?")) {
      try {
        await deleteDoc(doc(db, "reservation", id));
        setReservations(reservations.filter(r => r.id !== id));
      } catch (err) {
        alert("Erreur lors de la suppression");
      }
    }
  };

  useEffect(() => {
    fetchReservations();
    const interval = setInterval(fetchReservations, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-primary pt-20 pb-10 relative overflow-hidden">
      {/* Gradients */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-[50%] rounded-full pink__gradient top-20" />

      <div className={`${styles.paddingX} ${styles.flexCenter} relative z-[1]`}>
        <div className="w-full max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <div className="text-center flex-1">
              <h1 className={`${styles.heading2} mb-2`}>Réservations</h1>
              <p className={`${styles.paragraph}`}>Gère les séances d'essai réservées</p>
            </div>
            <button
              onClick={onLogout}
              className="px-4 py-2 rounded-[6px] bg-red-500/20 text-red-400 font-poppins text-sm hover:bg-red-500/30 transition"
            >
              Déconnexion
            </button>
          </div>

          <div className="bg-black-gradient-2 rounded-[20px] box-shadow p-8">
            {error && (
              <div className="p-4 rounded-[10px] bg-red-500/20 text-red-400 mb-6 font-poppins">
                ⚠️ {error}
              </div>
            )}

            {loading ? (
              <div className="text-center text-white/60 font-poppins py-8">
                Chargement des réservations...
              </div>
            ) : reservations.length === 0 ? (
              <div className="text-center text-white/60 font-poppins py-8">
                Aucune réservation pour le moment.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/30">
                      <th className="p-3 text-white font-poppins font-semibold">Nom</th>
                      <th className="p-3 text-white font-poppins font-semibold">Prénom</th>
                      <th className="p-3 text-white font-poppins font-semibold">Email</th>
                      <th className="p-3 text-white font-poppins font-semibold">Téléphone</th>
                      <th className="p-3 text-white font-poppins font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservations.map(r => (
                      <tr key={r.id} className="border-b border-white/10 hover:bg-white/5 transition">
                        <td className="p-3 text-white font-poppins">{r.nom}</td>
                        <td className="p-3 text-white font-poppins">{r.prenom}</td>
                        <td className="p-3 text-dimWhite font-poppins text-sm">{r.email}</td>
                        <td className="p-3 text-dimWhite font-poppins">{r.telephone}</td>
                        <td className="p-3">
                          <button
                            onClick={() => handleDelete(r.id)}
                            className="px-3 py-1 rounded-[6px] bg-red-500/20 text-red-400 font-poppins text-sm hover:bg-red-500/30 transition"
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="mt-6 p-4 rounded-[10px] bg-white/5 text-white/70 font-poppins text-sm text-center">
              Total : {reservations.length} réservation{reservations.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PasswordProtection = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const PASSWORD_HASH = "f403539e2f4d7ed1b8b90801219f57f5ca9350d37aca2c26f5c215917ea3aa46"; // hash de "password"

  const hashPassword = async (pwd) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(pwd);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const hash = await hashPassword(password);
    
    if (hash === PASSWORD_HASH) {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", "true");
      sessionStorage.setItem("adminAuthTime", Date.now().toString());
      setPassword("");
    } else {
      setError("Mot de passe incorrect");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuth");
    sessionStorage.removeItem("adminAuthTime");
  };

  useEffect(() => {
    const storedAuth = sessionStorage.getItem("adminAuth");
    const authTime = sessionStorage.getItem("adminAuthTime");
    const SESSION_DURATION = 30 * 60 * 1000; // 30 minutes

    if (storedAuth && authTime && Date.now() - parseInt(authTime) < SESSION_DURATION) {
      setIsAuthenticated(true);
    } else {
      sessionStorage.removeItem("adminAuth");
      sessionStorage.removeItem("adminAuthTime");
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-primary pt-20 pb-10 relative overflow-hidden flex items-center justify-center">
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-[50%] rounded-full pink__gradient top-20" />

        <div className="relative z-[1] w-full max-w-md px-6">
          <div className="bg-black-gradient-2 rounded-[20px] box-shadow p-8">
            <h1 className={`${styles.heading2} text-center mb-2`}>Accès Admin</h1>
            <p className="text-center text-white/60 font-poppins mb-6">Veuillez entrer le mot de passe</p>

            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="p-3 rounded-[10px] bg-red-500/20 text-red-400 font-poppins text-sm">
                  ⚠️ {error}
                </div>
              )}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                className="w-full px-4 py-3 rounded-[10px] bg-white/10 text-white font-poppins placeholder-white/40 border border-white/20 focus:border-white/50 outline-none transition"
                autoFocus
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-[10px] bg-gradient-to-r from-pink-600 to-red-600 text-white font-poppins font-semibold hover:opacity-80 transition"
              >
                Accéder
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return <AdminContent onLogout={handleLogout} />;
};

export default PasswordProtection;