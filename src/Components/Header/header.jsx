import plant from '../../multimedia/plant.png'
import {Link} from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>

        <div className="contenedor-header">
            <div className="logo">
            <Link to='/'><img src={plant} alt="logo tienda" class="logoImg"/>
            </Link>
                <h2 class="Serene Space">Serene Space</h2>            
            </div>

            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/catalogo'>Catalogo</Link></li>
                        <li><Link to='/carrito'>Carrito</Link></li>
                        <li><Link to='/login'>Iniciar Sesión</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}