import { useState } from "react";
import styles from "../style";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { card } from "../assets";
import { Link } from "react-router-dom";
import ExpandableCard from "./ExpandableCard";
import MottoCard from "./MottoCard";

const KPage = () => {
  const [expandedPhase, setExpandedPhase] = useState(null);
  const [expandedMotto, setExpandedMotto] = useState(null);

  const phases = [
    {
      id: 1,
      title: "Phase mentale et psychologique",
      points: [
        "Priorité à la confiance en toi et à l'estime de toi.",
        "Rétablissement d'une connexion positive avec toi-même."
      ]
    },
    {
      id: 2,
      title: "Phase de réathlétisation",
      points: [
        "Réactivation et réadaptation de ton corps à des efforts physiques intenses.",
        "Rééquilibrage physique pour favoriser ta progression."
      ]
    },
    {
      id: 3,
      title: "Phase de développement",
      points: [
        "Progression de ton physique et de ton mental planifiée.",
        "Établissement d'une routine solide pour maintenir ta croissance."
      ]
    },
    {
      id: 4,
      title: "Phase de stabilisation",
      points: [
        "Consolidation de tes gains de performance.",
        "Perfectionnement et amélioration continue."
      ]
    }
  ];

  const mottos = [
    {
      id: "intensity",
      title: "INTENSITÉ",
      points: [
        "Je mets du cœur à te donner ce qu'il te faut pour réussir.",
        "Tu mets du cœur à faire ce qu'il faut pour réussir !"
      ]
    },
    {
      id: "tenacity",
      title: "TÉNACITÉ",
      points: [
        "Je tiens mes engagements vis-à-vis de toi pour t'accompagner.",
        "Tu tiens bon, même quand c'est difficile, et tu vas te dépasser !"
      ]
    },
    {
      id: "selflessness",
      title: "DON DE SOI",
      points: [
        "Je donne beaucoup pour t'aider à réussir.",
        "Tu donnes beaucoup pour réussir !"
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
          {/* Header Section */}
          <section className={`flex md:flex-row flex-col ${styles.paddingY} gap-8`}>
            <div className={`flex-1 ${styles.flexStart} flex-col`}>
              <h1 className="font-poppins font-semibold ss:text-[64px] text-[48px] text-white ss:leading-[88px] leading-[60px] mb-6">
                K. comme <span className="text-gradient">Kongolo</span>
              </h1>
              <p className={`${styles.paragraph} max-w-[600px]`}>
                Le sport et moi, c'est une histoire qui commence dès mes 5 ans. Mon sport de prédilection a d'abord été le basket. J'ai joué en club, classé N 3, à Rennes, jusqu'en 2008.
              </p>
              <p className={`${styles.paragraph} max-w-[600px] mt-4`}>
                Mon goût de l'encadrement de sportifs a commencé dès cette période : j'ai dirigé des stages et des séminaires sportifs. C'est là que j'ai trouvé mon métier passion : je serai coach et préparateur physique.
              </p>
              <p className={`${styles.paragraph} max-w-[600px] mt-4`}>
                À mon expérience de sportif de haut niveau, j'ai ajouté des formations et des certifications pour devenir LE coach, toujours à l'écoute des besoins des sportifs.
              </p>
              <p className={`${styles.paragraph} max-w-[600px] mt-4 text-white font-semibold`}>
                Et aujourd'hui, tous les mercis des amateurs ou des champions sont mes récompenses et mes trophées.
              </p>
            </div>
            
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
              <img src={card} alt="Kongolo" className="h-[100%] relative z-[5]" />
              {/* gradient start */}
              <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
              <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
              {/* gradient end */}
            </div>
          </section>

          {/* Professional Method Section */}
          <section className={`${styles.paddingY} flex flex-col`}>
            <div className="w-full bg-black-gradient rounded-[20px] p-8 box-shadow">
              <h2 className="font-poppins font-semibold ss:text-[52px] text-[40px] text-white mb-8 text-center">
                K. comme <span className="text-gradient">méthode de pro pour les pros</span>
              </h2>
              
              <p className={`${styles.paragraph} max-w-full mb-6`}>
                Tu es footballeur, handballeur, basketteur, combattant de MMA de haut niveau ? Tu souhaites gagner en souplesse, en mobilité, en puissance, en endurance, en agilité, en vitesse, en coordination, et apprendre à éviter les blessures ?
              </p>

              <p className={`${styles.paragraph} max-w-full mb-6`}>
                Je mets mon expérience et mon expertise de sportif de haut niveau à ton service : j'établis des programmes de <span className="font-semibold text-white">PRÉPARATION PHYSIQUE</span>, en groupe ou en individuel.
              </p>

              <p className={`${styles.paragraph} max-w-full mb-6`}>
                Tu souhaites retrouver la forme ? L'entretenir ? Tu souhaites augmenter ton potentiel, améliorer tes performances ? Je te présente ma méthode.
              </p>

              <p className={`${styles.paragraph} max-w-full mb-8`}>
                Ma méthode consiste en <span className="font-semibold text-white">4 phases essentielles</span> pour atteindre tes objectifs tout en prenant soin de ton corps et de ton esprit. Ta santé, c'est celle de ton corps et de ton mental ensemble. Tu pourras compter aussi sur les conseils de notre <span className="font-semibold text-white">nutritionniste</span> pour conserver longtemps tous les bienfaits de tes efforts.
              </p>

              {/* Phases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {phases.map((phase) => (
                  <ExpandableCard
                    key={phase.id}
                    id={phase.id}
                    title={phase.title}
                    points={phase.points}
                    isExpanded={expandedPhase === phase.id}
                    onToggle={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                    prefix={`${phase.id}.`}
                  />
                ))}
              </div>

              <div className="text-center">
                <p className={`${styles.paragraph} mb-8 italic`}>
                  Viens me parler de ce que tu souhaites. Nous définirons ensemble tes objectifs.
                </p>
                <Link to="/try">
                <button className="px-8 py-4 bg-red-500 text-primary font-poppins font-semibold rounded-[10px] transition">
                  Séance d'essai
                </button>
                </Link>
              </div>
            </div>
          </section>

          {/* Motto Section */}
          <section className={`${styles.paddingY}`}>
            <div className="flex flex-col items-center mb-12">
              <h2 className="font-poppins font-semibold ss:text-[52px] text-[40px] text-white mb-4 text-center">
                K. comme <span className="text-gradient">devise</span>
              </h2>
              <p className={`${styles.paragraph} max-w-[800px] text-center`}>
                Ma devise de réussite est simple : <span className="font-bold text-white">INTENSITÉ – TÉNACITÉ – DON DE SOI !</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {mottos.map((motto) => (
                <MottoCard
                  key={motto.id}
                  motto={motto}
                  isExpanded={expandedMotto === motto.id}
                  onToggle={() => setExpandedMotto(expandedMotto === motto.id ? null : motto.id)}
                />
              ))}
            </div>

            <div className="flex flex-col items-center text-center">
              <p className={`${styles.paragraph} max-w-[700px] mb-8`}>
                Quand tu connaitras la magie de ces 3 ingrédients, tu kifferas tellement ton mieux-être que tu ne voudras plus quitter la salle !
              </p>
              <button className="px-8 py-4 bg-red-500 text-primary font-poppins font-semibold rounded-[10px] transition">
                Rejoins-nous maintenant !
              </button>
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

export default KPage;