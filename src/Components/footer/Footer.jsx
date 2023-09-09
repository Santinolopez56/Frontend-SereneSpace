import {Link} from 'react-router-dom';


export default function Footer() {
  return (
    <footer>
      <div class="footer-content">
            <div class="footer-logo">
                <img src="logo.png" alt="Logo" width="100"/>
            </div>
            <div class="footer-links">
                <ul>
                    <li><a href="#">Aviso de copyright</a></li>
                    <li><a href="#">Política de privacidad</a></li>
                    <li><a href="#">Mapa de sitio</a></li>
                </ul>
            </div>
            <div class="footer-contact">
                <p>Información de contacto:</p>
                <p>Email: info@example.com</p>
                <p>Teléfono: +123456789</p>
            </div>
        </div>
    </footer>
  );
}
