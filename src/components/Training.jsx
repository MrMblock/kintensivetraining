import styles from "../style";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Training = () => {
  const practices = [
    {
      id: "hiit",
      title: "H.I.I.T.",
      subtitle: "High Intensity Interval Trainings",
      subtitle_fr: "Entraînements fractionnés à haute intensité",
      benefits: [
        "Améliore ton endurance cardio-vasculaire (respiration, circulation)",
        "Augmente les capacités respiratoires",
        "Augmente la capacité de ton corps à produire de l'énergie avec l'oxygène (aérobie)",
        "Brûle les calories (jusqu'à 9 fois plus que la majorité des pratiques sportives)",
        "Stimule ton métabolisme",
        "Booste tes performances, ta puissance et ta masse musculaire"
      ],
      warning: "⚠️ Attention : ne convient pas en cas de pathologies cardio-vasculaires.",
      warningType: "alert"
    },
    {
      id: "crosstraining",
      title: "CROSS TRAINING",
      subtitle: "Entraînement croisé",
      subtitle_fr: "",
      benefits: [
        "Améliore ton système cardio-vasculaire",
        "Augmente ta masse musculaire",
        "Augmente ta force musculaire",
        "Développe ton agilité",
        "Développe ton tonus général",
        "Améliore ta souplesse",
        "Augmente ta vitesse",
        "Augmente ta puissance",
        "Affine ta coordination",
        "Améliore ton équilibre",
        "Rend ton corps harmonieux"
      ],
      warning: "",
      warningType: ""
    },
    {
      id: "trampoline",
      title: "TRAMPOLINE",
      subtitle: "",
      subtitle_fr: "",
      benefits: [
        "Stimule ton système cardio-vasculaire",
        "Améliore ta circulation sanguine",
        "Stimule ton système lymphatique",
        "Augmente ton endurance",
        "Augmente ton tonus musculaire",
        "Renforce les muscles fondamentaux",
        "Muscle en profondeur (jambes, cuisses, abdos, dos, bras, cardio)",
        "Protège tes articulations",
        "Réduit ton stress"
      ],
      warning: "✓ Sans antécédent de problèmes de dos, tu peux te lancer !",
      warningType: "info"
    },
    {
      id: "running",
      title: "RUNNING DYNAMIQUE",
      subtitle: "",
      subtitle_fr: "",
      benefits: [
        "Améliore ta santé cardiaque",
        "Réduit le cholestérol",
        "Stimule ton système immunitaire",
        "Augmente ta densité osseuse",
        "Brûle les calories",
        "Tonifie l'ensemble de ton corps",
        "Améliore ta santé mentale",
        "Réduit ton stress",
        "Améliore tes capacités d'apprentissage et ta mémoire",
        "Améliore la qualité de ton sommeil",
        "Vérifie la santé de ton cœur et sa résistance à l'effort"
      ],
      warning: "",
      warningType: ""
    },
    {
      id: "yoga",
      title: "HATHA YOGA",
      subtitle: "",
      subtitle_fr: "",
      benefits: [
        "Améliore la mémoire et la concentration",
        "Améliore la posture",
        "Améliore le sommeil",
        "Améliore la souplesse",
        "Développe les capacités respiratoires",
        "Développe la pleine conscience de soi",
        "Développe l'équilibre, physique et psychique",
        "Diminue le stress, émotionnel ou physique",
        "Sollicite les muscles profonds en douceur et dans l'intensité",
        "Raffermit, tonifie et vivifie"
      ],
      warning: "",
      warningType: ""
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
              Nos <span className="text-gradient">pratiques</span>
            </h1>
            <p className={`${styles.paragraph} max-w-[700px] mx-auto mb-8`}>
              Découvre les bienfaits de chaque pratique proposée au <span className="font-semibold text-white">K. Intensive Training Club</span>. Chaque entraînement est conçu pour transformer ton corps et ton mental.
            </p>
          </section>

          {/* Practices Section */}
          <section className={`${styles.paddingY} flex flex-col`}>
            {practices.map((practice, index) => (
              <div
                key={practice.id}
                className={`mb-16 ${index !== practices.length - 1 ? "pb-16 border-b border-white/10" : ""}`}
              >
                {/* Practice Header */}
                <div className="mb-8">
                  <h2 className="font-poppins font-semibold ss:text-[52px] text-[40px] text-white mb-2">
                    {practice.title}
                  </h2>
                  {practice.subtitle && (
                    <p className="text-red-500 font-poppins text-[18px]">
                      {practice.subtitle}
                    </p>
                  )}
                  {practice.subtitle_fr && (
                    <p className="text-red-500 font-poppins text-[18px]">
                      {practice.subtitle_fr}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Media Placeholder */}
                  <div className="w-full h-[350px] bg-red-500/10 border border-red-500/30 rounded-[15px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎥</div>
                      <p className="text-white/60 font-poppins">Vidéos et photos de démonstration</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="flex flex-col">
                    <h3 className="font-poppins font-semibold text-[24px] text-white mb-6">
                      Bienfaits
                    </h3>

                    <ul className="space-y-3 mb-6 flex-1">
                      {practice.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-dimWhite font-poppins text-[14px]"
                        >
                          <span className="text-red-500 mr-3 flex-shrink-0 mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {practice.warning && (
                      <div className={`p-4 rounded-[10px] ${
                        practice.warningType === "alert" 
                          ? "bg-yellow-500/20 border border-yellow-500/30" 
                          : "bg-green-500/20 border border-green-500/30"
                      }`}>
                        <p className={`font-poppins text-[14px] ${
                          practice.warningType === "alert"
                            ? "text-yellow-400"
                            : "text-green-400"
                        }`}>
                          {practice.warning}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* CTA Section */}
          <section className={`${styles.paddingY} flex flex-col`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Booking CTA */}
              <div className="bg-black-gradient rounded-[20px] p-8 box-shadow flex flex-col justify-between">
                <div>
                  <h3 className="font-poppins font-semibold text-[28px] text-white mb-4">
                    Prêt à <span className="text-gradient">commencer</span> ?
                  </h3>
                  <p className={`${styles.paragraph} mb-6`}>
                    Réserve ta séance d'essai et découvre en personne tous les bienfaits de nos pratiques !
                  </p>
                </div>
                <Link to="/try">
                  <button className="w-full px-8 py-4 bg-red-500 text-primary font-poppins font-semibold rounded-[10px] hover:bg-red-600 transition">
                    Réserver ma séance d'essai
                  </button>
                </Link>
              </div>

              {/* Planning & Pricing CTA */}
              <div className="bg-black-gradient-2 rounded-[20px] p-8 box-shadow flex flex-col justify-between">
                <div>
                  <h3 className="font-poppins font-semibold text-[28px] text-white mb-4">
                    Planning & <span className="text-gradient">Tarifs</span>
                  </h3>
                  <p className={`${styles.paragraph} mb-6`}>
                    Consulte nos horaires de cours, notre planning des événements et nos tarifs pour les différentes offres.
                  </p>
                </div>
                <button className="w-full px-8 py-4 bg-blue-gradient text-primary font-poppins font-semibold rounded-[10px] hover:opacity-80 transition">
                  Voir le planning et les tarifs
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-[20px] p-8 text-center">
              <p className={`${styles.paragraph} max-w-[700px] mx-auto mb-6`}>
                Chaque pratique a ses spécificités et ses bienfaits. <span className="font-semibold text-white">Aucune n'est meilleure que l'autre</span> — elles sont <span className="font-semibold text-white">complémentaires</span> ! Combine-les pour un développement complet de ton corps et de ton esprit.
              </p>
              <p className={`${styles.paragraph} max-w-[700px] mx-auto italic`}>
                Notre coach t'aidera à trouver la combinaison idéale adaptée à tes objectifs et tes besoins.
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

export default Training;
