import { useState } from "react";
import "./faq.css";

const faqs = [
  {
    question: "What is included with my purchase?",
    answer: "You will get full access to all core features, updates, and basic support."
  },
  {
    question: "Are there any recurring fees?",
    answer: "No, this is a one-time payment with no recurring charges."
  },
  {
    question: "Where can I get support?",
    answer: "You can contact our support team via email or through the support page."
  },
  {
    question: "Are all demo websites included?",
    answer: "Yes, all pre-built demos are included in the package."
  },
  {
    question: "Which plugins are compatible?",
    answer: "Our platform is compatible with all major and trusted plugins."
  },
  {
    question: "Can I get a refund?",
    answer: "Yes, refunds are available within 14 days under our refund policy."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq__container">
        
        {/* Left */}
        <div className="faq__intro">
          <h2>
            <span className="lwla">F</span>requently <br />
            <span className="tania">A</span>sked <br />
            <span className="Talta">Q</span>uestions
          </h2>
          <p>Do you have any questions?</p>
        </div>

        {/* Right */}
        <div className="faq__list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggle(index)}
            >
              <div className="faq__question">
                <h4>{item.question}</h4>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
