import "./Cards.css";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

function VisionMission() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <>
    <section className="canva-section">
       <div className="canva-card gradient-purple">
        <h2>{t.card1t}</h2>
        <p>
          {t.card1}
        </p>
      </div>
      <div className="canva-card gradient-orange">
        <h2>{t.card2t}</h2>
        <p>
          {t.card2}
        </p>
      </div>
      <div className="canva-card gradient-blue">
        <h2>{t.card3t}</h2>
        <p>
          {t.card3}
        </p>
      </div>
      <div className="canva-card gradient-teal">
        <h2>{t.card4t}</h2>
        <p>
          {t.card4}
        </p>
      </div>

    </section>
    </>
  );
}

export default VisionMission;
