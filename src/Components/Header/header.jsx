import plant from '../../multimedia/plant.png'
import {Link} from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>

        {/* <nav className="navbar">
            <div className="nav-title">
                <img src={plant} alt="logo tienda" class="logoImg"/>
                <h2 class="Serene Space">Serene Space</h2>
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link>Accedè</Link></li>
                    <li><Link>Registrate</Link></li>
                </ul>
            </div>
        </nav> */}

        <div class="contenedor-header">
            <div class="logo">
                <img src={plant} alt="logo tienda" class="logoImg"/>
                <h2 class="Serene Space">Serene Space</h2>            
            </div>

            <div>
                <nav>
                    <h1><Link to='/login'>Iniciar Sesión</Link></h1>
                    <li href="" class="Nav-Link">Catalago</li>
                    <li href="" class="Nav-Link">Contactanos</li>
                    <li href="" class="Nav-Link">Carrito</li>
                </nav>
            </div>
        </div>
    </header>
  )
}