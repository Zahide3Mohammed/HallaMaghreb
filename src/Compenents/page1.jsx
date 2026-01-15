import '../App.css'
import { Link } from "react-router-dom";
import VisionMission from '../element/Cards';
import Footer from '../element/footer';
import Header from '../element/header';
import Faq from '../element/faq';
import { useLanguage } from '../element/LanguageContext';
import { translations } from '../element/translations';

export default function Lwla (){
    const { language } = useLanguage();
    const t = translations[language];
    return<>
    {/* header*/}
    <Header></Header>
    {/* section*/}
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
            <div className="bg-slider">
              <span style={{ backgroundImage: "url('./images/img1.png')" }}></span>
              <span style={{ backgroundImage: "url('./images/img3.png')" }}></span>
              <span style={{ backgroundImage: "url('./images/img7.png')" }}></span>
              <span style={{ backgroundImage: "url('./images/img8.png')" }}></span>
            </div>
            
  
  <svg className="wave" viewBox="0 0 1440 120"  preserveAspectRatio="none">
    <path d="M0,60 C120,100 240,20 360,40 C480,60 600,100 720,80 C840,60 960,20 1080,40 C1200,60 1320,100 1440,80 L1440,120 L0,120 Z"
      fill="white"/>
  </svg>
  
    <div className="second">
        <h1>{t.tarhib}</h1><br />
        <Link to="/sign-up" id="start">{t.start}</Link>
    </div>

</section>
{/* cards*/}
<VisionMission ></VisionMission>
<Faq></Faq>
{/* footer*/}
<Footer></Footer>
    
    </>
}