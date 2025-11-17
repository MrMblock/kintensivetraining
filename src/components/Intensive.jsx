import { useState } from "react";
import styles from "../style";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ExpandableCard from "./ExpandableCard";
import { Link } from "react-router-dom";
import { intensive } from "../assets";

const Intensive = () => {
  const [expandedOffering, setExpandedOffering] = useState(null);

  const individualOfferings = [
    {
      id: "collective",
      title: "Cours Collectifs",
      intro: "Entraîne-toi sous l'œil attentif d'un coach",
      points: [
        "Tu ne seras jamais seul(e) face à un miroir ou un écran chez nous !",
        "En début de cours, tu peux dire comment tu te sens : le coach ajustera et te proposera l'alternative qui te convient",
        "Consulte notre agenda et réserve ta place via notre appli",
        "Planning, tarifs, conditions d'inscription et règlement intérieur disponibles"
      ]
    },
    {
      id: "bootcamp",
      title: "Boot Camps",
      intro: "Motiv-toi et dépasse-toi en bonne compagnie",
      points: [
        "Organisés le week-end pour maximiser ton potentiel",
        "2 heures le dimanche d'intensité pure et de camaraderie",
        "Consulte notre agenda et réserve ta place via notre appli",
        "Conditions d'inscription sur demande"
      ]
    },
    {
      id: "private",
      title: "Coaching Privé",
      intro: "Un programme 100% sur-mesure pour toi",
      points: [
        "Exercices physiques adaptés à tes besoins et tes envies",
        "Conseils en nutrition personnalisés",
        "Résultats rapides sans frustrations",
        "Sur devis - Contacte-nous pour plus d'infos"
      ]
    }
  ];

  const businessOfferings = [
    {
      id: "team-experience",
      title: "Expérience Immersive Équipe",
      intro: "Développe l'esprit et la dynamique de ton équipe",
      points: [
        "Pendant la pause déjeuner ou après les heures de travail",
        "Une expérience spéciale conçue avec toi",
        "Performance collective boostée et cohésion renforcée",
        "Liens entre collègues consolidés et renforcés"
      ]
    },
    {
      id: "business-coaching",
      title: "Coaching Privé Entreprise",
      intro: "Des programmes adaptés à ton équipe",
      points: [
        "Séances de coaching privé pour chaque membre de ton équipe",
        "Prise en compte des besoins et désirs spécifiques",
        "Résultats rapides et sans frustration",
        "Sur devis - Contacte-nous pour une consultation"
      ]
    }
  ];

  const practices = [
    { name: "HIIT WOD", abbr: "Work of the Day" },
    { name: "CROSS TRAINING", abbr: "Entraînement complet" },
    { name: "TRAMPOLINE", abbr: "Rebond et puissance" },
    { name: "RUNNING DYNAMIQUE", abbr: "Course d'intensité" }
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
          <section className={`${styles.paddingY} flex md:flex-row flex-col gap-8`}>
            <div className={`flex-1 ${styles.flexStart} flex-col`}>
              <h1 className="font-poppins font-semibold ss:text-[64px] text-[48px] text-white ss:leading-[88px] leading-[60px] mb-6">
                L'<span className="text-gradient">Intensité</span> <br /> est la clé
              </h1>
              <p className={`${styles.paragraph} max-w-[600px]`}>
                Elle ouvre la porte de ton <span className="font-semibold text-white">potentiel</span> !
              </p>
              <div className="space-y-4 mt-6 max-w-[600px]">
                <p className={styles.paragraph}>
                  Elle transforme l'<span className="font-semibold text-red-500">effort</span> en <span className="font-semibold text-white">victoire</span>,
                </p>
                <p className={styles.paragraph}>
                  la <span className="font-semibold text-red-500">détermination</span> en <span className="font-semibold text-white">succès</span>,
                </p>
                <p className={styles.paragraph}>
                  le <span className="font-semibold text-red-500">cri de douleur</span> en <span className="font-semibold text-white">cri de joie</span> !
                </p>
              </div>

              <p className={`${styles.paragraph} max-w-[600px] mt-8 leading-relaxed`}>
                Développer ton potentiel, ta forme physique et mentale, ton équilibre, c'est entraîner tout ton corps avec <span className="font-semibold text-white">assiduité et endurance</span>. Plus tes efforts seront soutenus et efficaces, plus tes résultats seront bluffants. Tu le verras très vite dans ton miroir !
              </p>

              <Link to="/try" className="mt-10">
                <button className="px-8 py-4 bg-red-500 text-primary font-poppins font-semibold rounded-[10px] hover:bg-red-600 transition">
                  Séance d'essai
                </button>
              </Link>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
              <img src={intensive} alt="Intensive Training" className="w-full h-[400px] object-cover rounded-[20px] relative z-[5]" />
              <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
              <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            </div>
          </section>

          {/* Practices Section */}
          <section className={`${styles.paddingY} flex flex-col`}>
            <div className="w-full bg-black-gradient rounded-[20px] p-8 box-shadow mb-12">
              <h2 className="font-poppins font-semibold ss:text-[52px] text-[40px] text-white mb-6 text-center">
                Nos pratiques <span className="text-gradient">complètes et dynamisantes</span>
              </h2>
              
              <p className={`${styles.paragraph} max-w-full mb-8 text-center`}>
                Nous proposons des cours de <span className="font-semibold text-white">HIIT WOD</span> (Work of the Day), de <span className="font-semibold text-white">CROSS TRAINING</span>, de <span className="font-semibold text-white">TRAMPOLINE</span>, de <span className="font-semibold text-white">RUNNING DYNAMIQUE</span>, pratiques sportives réputées complètes, dynamisantes. Tu verras ta sueur se transformer en <span className="font-semibold text-white">victoires</span> !
              </p>

              <p className={`${styles.paragraph} max-w-full mb-8 text-center`}>
                Tu hésites ? <Link to="/training" className="text-red-500 font-semibold hover:text-red-600">L'onglet TRAINING</Link> te présente des démos et les vertus et bienfaits de chaque pratique.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {practices.map((practice, idx) => (
                  <div key={idx} className="bg-red-500/10 border border-red-500/30 p-6 rounded-[15px] hover:bg-red-500/20 transition text-center">
                    <h3 className="font-poppins font-semibold text-[18px] text-white mb-2">
                      {practice.name}
                    </h3>
                    <p className="text-dimWhite font-poppins text-[14px]">
                      {practice.abbr}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Individual Section */}
          <section className={`${styles.paddingY} flex flex-col`}>
            <h2 className="font-poppins font-semibold ss:text-[52px] text-[40px] text-white mb-12 text-center">
              <span className="text-gradient">PARTICULIERS</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {individualOfferings.map((offering) => (
                <div
                  key={offering.id}
                  className="bg-red-500/10 border border-red-500/30 p-8 rounded-[15px] hover:bg-red-500/20 transition cursor-pointer transform hover:scale-105"
                  onClick={() => setExpandedOffering(expandedOffering === offering.id ? null : offering.id)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && setExpandedOffering(expandedOffering === offering.id ? null : offering.id)}
                >
                  <h3 className="font-poppins font-semibold text-[20px] text-white mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-red-500 font-poppins text-[14px] mb-4">
                    {offering.intro}
                  </p>

                  {expandedOffering === offering.id && (
                    <ul className="space-y-3 animate-fadeIn">
                      {offering.points.map((point, idx) => (
                        <li key={idx} className="text-dimWhite font-poppins text-[14px] flex items-start">
                          <span className="text-red-500 mr-3">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {expandedOffering !== offering.id && (
                    <p className="text-white/60 font-poppins text-[12px] mt-4">Cliquez pour en savoir plus</p>
                  )}
                </div>
              ))}
            </div>

            <Link to="/try" className="self-center">
              <button className="px-8 py-4 bg-red-500 text-primary font-poppins font-semibold rounded-[10px] hover:bg-red-600 transition">
                Réserver ma séance d'essai
              </button>
            </Link>
          </section>

          {/* Business Section */}
          <section className={`${styles.paddingY} flex flex-col`}>
            <h2 className="font-poppins font-semibold ss:text-[52px] text-[40px] text-white mb-12 text-center">
              <span className="text-gradient">ENTREPRISE</span>
            </h2>

            <p className={`${styles.paragraph} max-w-full text-center mb-12`}>
              Tu es <span className="font-semibold text-white">entrepreneur</span> et tu souhaites développer l'esprit de ton équipe et la dynamiser ? Profite de la pause déjeuner ou de la fin des heures de travail et viens nous voir !
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {businessOfferings.map((offering) => (
                <div
                  key={offering.id}
                  className="bg-red-500/10 border border-red-500/30 p-8 rounded-[15px] hover:bg-red-500/20 transition cursor-pointer transform hover:scale-105"
                  onClick={() => setExpandedOffering(expandedOffering === offering.id ? null : offering.id)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && setExpandedOffering(expandedOffering === offering.id ? null : offering.id)}
                >
                  <h3 className="font-poppins font-semibold text-[20px] text-white mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-red-500 font-poppins text-[14px] mb-4">
                    {offering.intro}
                  </p>

                  {expandedOffering === offering.id && (
                    <ul className="space-y-3 animate-fadeIn">
                      {offering.points.map((point, idx) => (
                        <li key={idx} className="text-dimWhite font-poppins text-[14px] flex items-start">
                          <span className="text-red-500 mr-3">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {expandedOffering !== offering.id && (
                    <p className="text-white/60 font-poppins text-[12px] mt-4">Cliquez pour en savoir plus</p>
                  )}
                </div>
              ))}
            </div>

            <p className={`${styles.paragraph} max-w-full text-center mb-8 italic`}>
              Je concocte avec toi une expérience immersive spéciale. Et tu verras la performance collective boostée, la cohésion de ton équipe et vos liens renforcés !
            </p>

            <button className="self-center px-8 py-4 bg-red-500 text-primary font-poppins font-semibold rounded-[10px] hover:bg-red-600 transition">
              Contacte-nous
            </button>
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

export default Intensive;
