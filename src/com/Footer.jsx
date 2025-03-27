import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import './footer.css'
import logo from '../assets/img/ATseL.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="AtseUi Logo" />
        </div>
        <div className="footer-links">
          <div>
            <h4>መተግበሪያ ግዢ</h4>
            <ul>
              <a href="/"><li>ቀዳሚ ገጽ</li></a>
              <a href="/about"><li>ስለ እኛ</li></a>
              <a href="/service"><li>አገልግሎቶቻችን</li></a>
              <a href="/contact"><li>አግኙን</li></a>
            </ul>
          </div>
          <div>
            <h4>የእኛ ስራ</h4>
            <ul>
            <a href="/about"><li>ስለ እኛ</li></a>
              <a href="/register"><li>ይመዝገቡ</li></a>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>ያግኙን</h4>
            <ul>
              <li>📞 +251-935355865</li>
              <li>📍 Gerji, Bole, Addis Ababa, Ethiopia</li>
              <li>📧 debra.holt@example.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright AtseUi. All Rights Reserved</p>
        <div className="social-icons">
         <a href=""><FaFacebook /></a> 
          <a href=""><FaInstagram /></a>
          <a href=""><FaTiktok /></a>
          <a href=""><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
