import sillonenl from '../../multimedia/sillon en l.jpg'
// import interior from '../../multimedia/interior.jpg'

import Footer from '../footer/Footer.jsx'
import './body.css';

export default function Body() {

    
  return (
    <body>
        <section id="hero">
            <div class="contenedor-body">
                <h1>Los Diseños de Interior mas creativos<br></br>"Interiores Locos"</h1>
                <form action="https://etecvirtual.um.edu.ar/?redirect=0">
                    <button>Mire Nuestro Catalago</button>
                </form>
            </div>
        </section>

        <section id="somos-interiores-locos">
            <div class="contenedor-info">
                <h2>Somos Interiores Locos</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores corrupti earum velit nisi sapiente facere adipisci excepturi porro enim ipsa! Voluptatum, fugiat veritatis accusantium perferendis totam eaque mollitia repellat adipisci?</p>
                <div class="img-sobre-nosotros">
                    <img src={sillonenl} alt="imagen-sobre-nosotros" class="imagen-sillon-l"/>
                </div>
            </div>
        </section>

    </body>
    )
}