import './hero.css'
import { Link } from "react-router-dom";
import { useLanguage } from '../element/LanguageContext';
import { translations } from '../element/translations';
import { useState } from 'react';
import GooeyText from "../element/GooeyText";


export default function Hero (){
    const { language } = useLanguage();
    const t = translations[language];
    const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };
    const images = [
  "/images/img1.png",
  "/images/img2.jpg",
  "/images/img3.png",
  "/images/img4.jpg",
  "/images/img5.png",
  "/images/img6.jpg",
  "/images/img7.png",
  "/images/img8.png",
];
    return<>
    <div className="marquee">
                <div className="marquee-track">
                    <span>Hello</span>
                    <span>Bonjour</span>
                    <span>Hola</span>
                    <span>مرحبا</span>
                    <span>ⴰⵣⵓⵍ</span>
                    <span>Olá</span>
                    <span>नमस्ते</span>
                    <span>你好</span>
                    <span>Ciao</span>
                    <span>Merhaba</span>
                    <span>Hei</span>
                    <span>Hej</span>
                    <span>Hello</span>
                    <span>Bonjour</span>
                    <span>Hola</span>
                    <span>مرحبا</span>
                    <span>ⴰⵣⵓⵍ</span>
                    <span>Olá</span>
                    <span>नमस्ते</span>
                    <span>你好</span>
                    <span>Ciao</span>
                    <span>Merhaba</span>
                    <span>Hei</span>
                    <span>Hej</span>
                </div>
            </div>
    <section className="hero">
      <div className="slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((img, i) => (
          <div key={i} className="slide" style={{ backgroundImage: `url(${img})` }}/>
        ))}
      </div>

      <div className="hero-overlay" />
<button className="arrow_left" onClick={prev}>❮</button>
      <div className="hero-content">
       <p className="mt-6 text-white/80 text-lg max-w-xl text-center">
  Meet new people in Morocco during CAN 2025 & World Cup 2030
</p>

      </div>
<button id="start"  className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base">
      <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px" />
      <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]" />
      <div className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
        <span className="select-none">Start session</span>
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1">
          <path clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fillRule="evenodd" />
        </svg>
      </div>
    </button>

      
      <button className="arrow_right" onClick={next}>❯</button>
<svg className="wave" viewBox="0 0 1440 120"  preserveAspectRatio="none">
    <path d="M0,60 C120,100 240,20 360,40 C480,60 600,100 720,80 C840,60 960,20 1080,40 C1200,60 1320,100 1440,80 L1440,120 L0,120 Z" fill="white"/>
</svg>
    </section>
    </>
}
