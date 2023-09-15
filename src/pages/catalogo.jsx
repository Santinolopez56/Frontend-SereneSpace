import './catalogo.css';
import producto1 from '../multimedia/Producto 1.png'
import producto2 from '../multimedia/producto 2.png'
import producto3 from '../multimedia/producto 3.png'
import producto4 from '../multimedia/producto 4.png'

export default function catalogo() {
    return (
<body>
    <div class="catalogo">
        <div class="producto">
            <img src={producto1} alt="Producto 1"/>
            <h2>Producto 1</h2>
            <p>Precio: $100</p>
            <p>Características:Sillón elegante y cómodo para tu hogar u oficina.</p>
            <button class="agregar-carrito">Agregar al Carrito</button>
        </div>
        <div class="producto">
            <img src={producto2} alt="Producto 2"/>
            <h2>Producto 2</h2>
            <p>Precio: $120</p>
            <p>Características:Sillas ergonómicas para comodidad y estilo excepcionales.</p>
            <button class="agregar-carrito">Agregar al Carrito</button>
        </div>
        <div class="producto">
            <img src={producto3} alt="Producto 3"/>
            <h2>Producto 3</h2>
            <p>Precio: $80</p>
            <p>Características:Compacta y versátil mesita para tu comodidad diaria.</p>
            <button class="agregar-carrito">Agregar al Carrito</button>
        </div>
        <div class="producto">
            <img src={producto4} alt="Producto 4"/>
            <h2>Producto 4</h2>
            <p>Precio: $90</p>
            <p>Características:Alfombra suave y elegante, mejora cualquier espacio con estilo.</p>
            <button class="agregar-carrito">Agregar al Carrito</button>
        </div>
    </div>
</body>
    )
}
