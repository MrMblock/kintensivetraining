import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { Link } from "react-router-dom";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <span className="text-red-500">K. Comme Kongolo </span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Le sport et moi, c’est une histoire qui commence dès mes 5 ans.
        Mon goût de l’encadrement de sportifs a commencé dès cette période : <br className="sm:block-hidden" /><span className="text-red-500">j’ai dirigé des stages et des séminaires sportifs.</span>

      </p>

      <Link to="/k">
       <Button styles={`mt-10`} />
       </Link>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
