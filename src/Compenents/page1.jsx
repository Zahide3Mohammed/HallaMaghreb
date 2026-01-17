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
    
    <section className="hero">
            <div className="bg-slider">
              <span style={{ backgroundImage: "url('./images/img1.png')" }}></span>
              <span style={{ backgroundImage: "url('./images/img3.png')" }}></span>
              <span style={{ backgroundImage: "url('./images/img7.png')" }}></span>
              <span style={{ backgroundImage: "url('./images/img8.png')" }}></span>
            </div>
            
  
  
  
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