import { useState } from "react";
import styles from "../style";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { testimonials } from "../constants";

const Press = () => {
  const [filterType, setFilterType] = useState("all");

  const filtered = filterType === "all" ? testimonials : testimonials.filter(t => t.type === filterType);

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
          <section className={`${styles.paddingY} flex flex-col`}>
            <div className="text-center mb-12">
              <h1 className={`${styles.heading2} mb-6`}>
                Ils parlent de <span className="text-gradient">nous</span>
              </h1>
              <p className={`${styles.paragraph} max-w-[600px] mx-auto`}>
                Décourez les témoignages authentiques de nos membres. 
                Leurs expériences et leurs histoires de transformation.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              <button
                onClick={() => setFilterType("all")}
                className={`px-6 py-3 rounded-[10px] font-poppins font-semibold transition ${
                  filterType === "all"
                    ? "bg-red-500 text-white"
                    : "bg-red-500/10 text-white border border-red-500/30 hover:bg-red-500/20"
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => setFilterType("written")}
                className={`px-6 py-3 rounded-[10px] font-poppins font-semibold transition ${
                  filterType === "written"
                    ? "bg-red-500 text-white"
                    : "bg-red-500/10 text-white border border-red-500/30 hover:bg-red-500/20"
                }`}
              >
                Témoignages écrits
              </button>
              <button
                onClick={() => setFilterType("video")}
                className={`px-6 py-3 rounded-[10px] font-poppins font-semibold transition ${
                  filterType === "video"
                    ? "bg-red-500 text-white"
                    : "bg-red-500/10 text-white border border-red-500/30 hover:bg-red-500/20"
                }`}
              >
                Vidéos
              </button>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filtered.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col p-8 bg-red-500/10 border border-red-500/30 rounded-[15px] hover:bg-red-500/20 transition"
                >
                  {testimonial.type === "video" && (
                    <div className="flex items-center justify-center h-[200px] bg-black/30 rounded-[10px] mb-6">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🎥</div>
                        <p className="text-dimWhite font-poppins">{testimonial.content}</p>
                      </div>
                    </div>
                  )}
                  
                  <p className="font-poppins font-normal text-[16px] leading-[24px] text-white mb-6 flex-1">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-poppins font-semibold text-[16px] text-white">
                      {testimonial.name}
                    </h4>
                    <p className="font-poppins font-normal text-[14px] text-dimWhite">
                      {testimonial.title}
                    </p>
                    <p className="font-poppins font-normal text-[12px] text-dimWhite/60 mt-1">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-black-gradient rounded-[20px] p-8 box-shadow text-center">
              <h2 className={`${styles.heading2} mb-4`}>
                Vous aussi, partagez votre <span className="text-gradient">histoire</span>
              </h2>
              <p className={`${styles.paragraph} max-w-[600px] mx-auto mb-8`}>
                Vos témoignages nous permettent d'inspirer et de motiver nos autres membres. 
                N'hésitez pas à nous envoyer votre expérience !
              </p>
              <button className="px-8 py-4 bg-red-500 text-primary font-poppins font-semibold rounded-[10px] hover:bg-red-600 transition">
                Partager mon témoignage
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

export default Press;
