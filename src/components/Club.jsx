import { useState } from "react";
import styles from "../style";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Club = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const clubExperience = [
    {
      id: "philosophy",
      title: "Notre Philosophie",
      intro: "Expériences physiques ardentes et bienveillantes",
      points: [
        "Un espace conçu pour ton épanouissement ici et maintenant",
        "Une ambiance où le kiff est réciproque entre tous les membres",
        "Un endroit où tu peux être toi-même et progresser à ton rythme"
      ]
    },
    {
      id: "community",
      title: "Notre Communauté",
      intro: "Dépasse-toi avec d'autres",
      points: [
        "Motivons-nous ensemble et progressons en communauté",
        "C'est dans le partage de l'effort et du plaisir que nous avançons le mieux",
        "Chacun contribue à la bonne ambiance du club"
      ]
    }
  ];

  const boutique = [
    {
      id: "clothing",
      title: "Ligne de Vêtements K.",
      description: "Montre que tu fais partie du K. Intensive Training Club",
      items: [
        { name: "T-shirt K. Logo", price: "25€" },
        { name: "Hoodie K. Intensité", price: "65€" },
        { name: "Legging Performance", price: "75€" },
        { name: "Short Training", price: "55€" },
        { name: "Cap K.", price: "20€" }
      ]
    },
    {
      id: "cosmetics",
      title: "Partenariat Cosmétiques",
      description: "Spécialisée pour tes besoins de récupération et bien-être",
      items: [
        { name: "Huile de Massage Récupération", price: "18€" },
        { name: "Huiles Essentielles (3 pack)", price: "25€" },
        { name: "Déodorant Performance", price: "12€" },
        { name: "Crème Musculaire", price: "22€" },
        { name: "Baume de Récupération", price: "28€" }
      ]
    }
  ];

  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* Hero Section */}
          <section className={`${styles.paddingY} flex flex-col text-center`}>
            <h1 className="font-poppins font-semibold ss:text-[64px] text-[48px] text-white ss:leading-[88px] leading-[60px] mb-6">
              Bienvenue au <span className="text-gradient">K. Intensive Training Club</span>
            </h1>
            <p className={`${styles.paragraph} max-w-[700px] mx-auto mb-8`}>
              J'ai conçu ce club pour que tu vives des <span className="font-semibold text-white">expériences physiques ardentes et bienveillantes</span> et que tu puisses t'épanouir <span className="font-semibold text-white">ici et maintenant</span>.
            </p>
            <p className={`${styles.paragraph} max-w-[700px] mx-auto`}>
              Que le <span className="font-semibold text-red-500">kiff</span> soit <span className="font-semibold text-white">réciproque</span> !
            </p>
          </section>

          {/* Club Experience Section */}
          <section className={`${styles.paddingY} flex flex-col`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {clubExperience.map((section) => (
                <div
                  key={section.id}
                  className="bg-red-500/10 border border-red-500/30 p-8 rounded-[15px] hover:bg-red-500/20 transition"
                >
                  <h3 className="font-poppins font-semibold text-[24px] text-white mb-2">
                    {section.title}
                  </h3>
                  <p className="text-red-500 font-poppins text-[14px] mb-4">
                    {section.intro}
                  </p>

                  <ul className="space-y-3">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="text-dimWhite font-poppins text-[14px] flex items-start">
                        <span className="text-red-500 mr-3">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-black-gradient rounded-[20px] p-8 box-shadow text-center">
              <p className={`${styles.paragraph} max-w-[800px] mx-auto mb-6`}>
                <span className="font-semibold text-white">Viens te dépasser avec d'autres</span>, motivons-nous et progressons ensemble ! C'est dans le partage de l'effort et du plaisir que nous avançons le mieux !
              </p>
              <p className={`${styles.paragraph} max-w-[800px] mx-auto italic`}>
                Viens assurer la bonne ambiance toi aussi !
              </p>
            </div>
          </section>

          {/* Events Section */}
          <section className={`${styles.paddingY} flex flex-col`}>
            <h2 className="font-poppins font-semibold ss:text-[52px] text-[40px] text-white mb-12 text-center">
              <span className="text-gradient">ÉVÉNEMENTS</span>
            </h2>

            <div className="w-full bg-black-gradient rounded-[20px] p-8 box-shadow mb-12">
              <div className="flex flex-col items-center gap-6">
                <div className="w-full h-[300px] bg-red-500/10 border border-red-500/30 rounded-[15px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📅</div>
                    <p className="text-white/60 font-poppins">Photos et vidéos des événements</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className={`${styles.paragraph} max-w-[600px] mb-6`}>
                    Découvre nos événements exclusifs, nos challenges collectifs et nos moments forts du club. Retrouve l'agenda complet de nos activités et réserve ta place dès maintenant !
                  </p>
                  <Link to="/">
                    <button className="px-8 py-4 bg-red-500 text-primary font-poppins font-semibold rounded-[10px] hover:bg-red-600 transition">
                      Consulter l'Agenda
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Boutique Section */}
          <section className={`${styles.paddingY} flex flex-col`}>
            <h2 className="font-poppins font-semibold ss:text-[52px] text-[40px] text-white mb-12 text-center">
              <span className="text-gradient">BOUTIQUE</span>
            </h2>

            <p className={`${styles.paragraph} max-w-full text-center mb-12`}>
              Et si tu veux montrer que tu es bien au <span className="font-semibold text-white">K. Intensive Training Club</span>, regarde par ici ! Quelques surprises t'attendent avec notre <span className="font-semibold text-white">ligne de vêtements</span> et notre <span className="font-semibold text-white">partenariat cosmétique</span> spécialisé.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {boutique.map((category) => (
                <div key={category.id} className="flex flex-col">
                  {/* Category Header */}
                  <div className="mb-8">
                    <h3 className="font-poppins font-semibold text-[28px] text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-red-500 font-poppins text-[14px]">
                      {category.description}
                    </p>
                  </div>

                  {/* Product Image Placeholder */}
                  <div className="w-full h-[250px] bg-red-500/10 border border-red-500/30 rounded-[15px] flex items-center justify-center mb-8">
                    <div className="text-center">
                      <div className="text-5xl mb-2">
                        {category.id === "clothing" ? "👕" : "💧"}
                      </div>
                      <p className="text-white/60 font-poppins text-sm">
                        Photos produits
                      </p>
                    </div>
                  </div>

                  {/* Products List */}
                  <div className="space-y-3">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 bg-red-500/5 border border-red-500/20 rounded-[10px] hover:bg-red-500/10 transition">
                        <span className="font-poppins text-white text-[14px]">
                          {item.name}
                        </span>
                        <span className="font-poppins font-semibold text-red-500">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Order Button */}
                  <button className="mt-8 w-full px-6 py-4 bg-red-500 text-primary font-poppins font-semibold rounded-[10px] hover:bg-red-600 transition">
                    Commander
                  </button>
                </div>
              ))}
            </div>

            {/* Special Message */}
            <div className="bg-black-gradient rounded-[20px] p-8 box-shadow text-center">
              <p className={`${styles.paragraph} max-w-[700px] mx-auto`}>
                Fiers de porter les couleurs du <span className="font-semibold text-red-500">K. Intensive Training Club</span> ! Montre ton engagement et représente ta communauté avec style.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Club;
