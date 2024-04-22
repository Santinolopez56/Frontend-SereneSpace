import plant from '../../multimedia/plant.png'
import {Link} from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>

        <div className="contenedor-header">
            <div className="logo">
            <Link to='/'><img src={plant} alt="logo tienda" className="logoImg"/> </Link>
            
                <h2 className="Serene Space">Serene Space</h2>            
            </div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
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