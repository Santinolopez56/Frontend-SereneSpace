import instagram from '../../multimedia/instagram.png'
import twitter from '../../multimedia/twitter.png'
import github from '../../multimedia/github.png'
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-icons">
          <img src={instagram} alt="Instagram" />
          <img src={github} alt="GitHub" />
          <img src={twitter} alt="Twitter" />
        </div>
      </div>
      <div className="copyright">
        &copy; Serene Place
      </div>
    </footer>
  );
}

export default Footer;
