import sillonenl from '../../multimedia/sillon en l.jpg'
import Footer from '../footer/Footer.jsx'
import './body.css';

export default function Body() {

    
  return (
    <body>
        <section id="hero">
            <div class="contenedor-body">
                <h1>Diseños de Interior para que puedas disfrutar la serenidad despues de un dia de trabajo<br></br>"Serene Space"</h1>
                <form action="/catalogo">
                    <button>Mire Nuestro Catalago</button>
                </form>
            </div>
        </section>

        <section id="somos-interiores-locos">
            <div class="contenedor-info">
                <h2>Somos Serene Space</h2>
                <p>Serene Place ofrece la esencia del confort y el lujo en cada detalle. Nuestros exquisitos diseños de mobiliario transforman cualquier espacio en un refugio de serenidad y estilo. Descubra una experiencia única de relajación y elegancia con Serene Place.</p>
                <div class="img-sobre-nosotros">
                    <img src={sillonenl} alt="imagen-sobre-nosotros" class="imagen-sillon-l"/>
                </div>
            </div>
        </section>

    </body>
    )
}