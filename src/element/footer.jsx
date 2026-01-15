import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        <div className="footer__brand">
          <h2>ProjetMeet</h2>
          <p>
            Plateforme moderne de connexion et collaboration.
          </p>
        </div>

        <div className="footer__links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Légal</h4>
          <ul>
            <li><a href="/privacy">Confidentialité</a></li>
            <li><a href="/terms">Conditions</a></li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} ProjetMeet. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
