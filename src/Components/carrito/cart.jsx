import '../carrito/cart.css'
import Carrito from './carrito'
import React, { useState } from 'react';

    function Carrito() {
    const [productos, setProductos] = useState([]);
    const [total, setTotal] = useState(0);

    const agregarProducto = (nombre, precio) => {
        const nuevoProducto = { nombre, precio };
        setProductos([...productos, nuevoProducto]);
        setTotal(total + precio);
        };

    const quitarProducto = (nombre, precio) => {
        const indice = productos.findIndex((producto) => producto.nombre === nombre);
        if (indice !== -1) {
        const nuevosProductos = [...productos];
        nuevosProductos.splice(indice, 1);
        setProductos(nuevosProductos);
        setTotal(total - precio);
        }
        };

    return (
        <div>
            <h1>Carrito de Compras</h1>
            <ul> 
            {productos.map((producto, index) => (
                <li key={index}>
                    {producto.nombre} - ${producto.precio}
                    <button onClick={() =>quitarProducto(producto.nombre, producto.precio)}>Quitar</button>
                </li>
               ))}
            </ul>
            <P>Total: ${total}</P>                
        </div>

);
}
export default Carrito;
