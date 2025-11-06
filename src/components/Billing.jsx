import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse} flex justify-center sm:justify-start`}>
      <img 
        src={bill} 
        alt="billing" 
        className="w-[80%] h-[85%] relative z-[5] sm:mr-[120px]" 
      />
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Réserve tes cours <br className="sm:block hidden" /> en quelques clics
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Notre application te permet de gérer facilement tes réservations, 
        suivre ton planning et rester connecté avec la communauté du K. 
        Intensive Training Club.
      </p>
      <div className="flex flex-row flex-wrap justify-center sm:justify-start sm:mt-10 mt-6">
        <img src={apple} alt="app_store" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="play_store" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;