import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <Icon className="w-[32px] h-[32px] text-red-500" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Nous avons aussi des propositions pour toi, <br className="sm:block-hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        <span className="text-semi-bold text-xl text-red-500">Entrepreneur solo ou chef d’entreprise collective</span> <br />
        Avec nos programmes d'entraînement adaptés, tu peux améliorer ta condition
        physique, atteindre tes objectifs et transformer ton corps.<br />
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
