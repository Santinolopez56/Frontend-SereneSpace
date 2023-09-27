import './catalogo.css';
import producto1 from '../../multimedia/Producto 1.png'
import producto2 from '../../multimedia/producto 2.png'
import producto3 from '../../multimedia/producto 3.png'
import producto4 from '../../multimedia/producto 4.png'
import producto5 from '../../multimedia/escritorio.png'
import producto6 from '../../multimedia/sillon bola.png'
import Cart from '../cart.js';


export default function catalogo() {
    return (
<body>
    <div class="catalogo">
        {productos.map((producto) =>
            <div class="producto">
                <img src={producto1} alt="Producto 1"/>
                <h2>Sillon</h2>
                <p>Precio: $100</p>
                <p>Características:Sillón elegante y cómodo para tu hogar u oficina.</p>
                <button onClick={() => agregarAlCarrito(producto)} class="agregar-carrito">Agregar al Carrito</button>
            </div>
            <div class="producto">
                <img src={producto2} alt="Producto 2"/>
                <h2>Sillas</h2>
                <p>Precio: $80</p>
                <p>Características:Sillas ergonómicas para comodidad y estilo excepcionales.</p>
                <button onClick={() => agregarAlCarrito(producto)} class="agregar-carrito">Agregar al Carrito</button>
            </div>
            <div class="producto">
                <img src={producto3} alt="Producto 3"/>
                <h2>Mesita</h2>
                <p>Precio: $70</p>
                <p>Características:Compacta y versátil mesita para tu comodidad diaria.</p>
                <button onClick={() => agregarAlCarrito(producto)} class="agregar-carrito">Agregar al Carrito</button>
            </div>
            <div class="producto">
                <img src={producto4} alt="Producto 4"/>
                <h2>Alfombra</h2>
                <p>Precio: $40</p>
                <p>Características:Alfombra suave y elegante, mejora cualquier espacio con estilo.</p>
                <button onClick={() => agregarAlCarrito(producto)} class="agregar-carrito">Agregar al Carrito</button>
            </div>
            <div class="producto">
                <img src={producto5} alt="Producto 5"/>
                <h2>Escritorio</h2>
                <p>Precio: $50</p>
                <p>Características:Escritorio para que puedas trabajar desde la comodidad de tu hogar.</p>
                <button onClick={() => agregarAlCarrito(producto)} class="agregar-carrito">Agregar al Carrito</button>
            </div>
            <div class="producto">
                <img src={producto6} alt="Producto 6"/>
                <h2>Sillon Circular</h2>
                <p>Precio: $120</p>
                <p>Características:Sillon en forma circular para disfrutar una pelicula con comida.</p>
                <button onClick={() => agregarAlCarrito(producto)} class="agregar-carrito">Agregar al Carrito</button>
            </div>
            <Cart />
        )}
    </div>
</body>
    )
}
