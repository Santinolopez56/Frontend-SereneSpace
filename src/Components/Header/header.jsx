import genga from '../../multimedia/genga.jpg'

import './header.css';

export default function Header() {
  return (
    <header>
        <div class="contenedor-header">
            <div class="logo">
                <img src={genga} alt="logo tienda" class="logoImg"/>
                <h2 class="Sillones-Locos">Interiores Locos</h2>            
            </div>

            <div>
                <nav>
                    <a href="" class="Nav-Link">Inicio</a>
                    <a href="" class="Nav-Link">Iniciar Sesion</a>
                    <a href="" class="Nav-Link">Catalago</a>
                    <a href="" class="Nav-Link">Contactanos</a>
                    <a href="" class="Nav-Link">Carrito</a>
                </nav>
            </div>
        </div>
    </header>
  )
}