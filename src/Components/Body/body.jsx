import sillonenl from '../../multimedia/sillon en l.jpg'
import './body.css';

export default function Body() {

    
  return (
    <body>
        <section id="hero">
            <div className="contenedor-body">
                <h1>Diseños de Interior para que puedas disfrutar la serenidad despues de un dia de trabajo<br></br>"Serene Space"</h1>
                <form action="/catalogo">
                    <button>Mire Nuestro Catalago</button>
                </form>
            </div>
        </section>

        <section id="somos-interiores-locos">
            <div className="contenedor-info">
                <h2>Somos Serene Space</h2>
                <p>Serene Place ofrece la esencia del confort y el lujo en cada detalle. Nuestros exquisitos diseños de mobiliario transforman cualquier espacio en un refugio de serenidad y estilo. Descubra una experiencia única de relajación y elegancia con Serene Place.</p>
                <div className="img-sobre-nosotros">
                    <img src={sillonenl} alt="imagen-sobre-nosotros" className="imagen-sillon-l"/>
                </div>
            </div>
        </section>

    </body>
    )
}