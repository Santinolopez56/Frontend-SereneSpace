import React, { useState } from 'react';
import productos from '../catalogo.json';

const Cart = () => {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const sumarProducto = (producto) => {
    const productoEnCarrito = productos.find((p) => p.id === producto.id);
    productoEnCarrito.cantidad += 1;
    setProductos([...productos]);
  };

  const restarProducto = (producto) => {
    const productoEnCarrito = productos.find((p) => p.id === producto.id);

    if (productoEnCarrito.cantidad > 1) {
      productoEnCarrito.cantidad -= 1;
      setProductos([...productos]);
    }
  };

  const limpiarCarrito = () => {
    setProductos([]);
  };


  const eliminarProducto = (index) => {
    const newProductos = [...productos];
    newProductos.splice(index, 1);
    setProductos(newProductos);
  }
  
  const calcularTotal = () => {
    return productos.reduce((total, producto) => total + producto.precio, 0);
  }
  
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {productos.length === 0 ? (
        <p>No hay productos en el carrito.</p> ) : (
        <ul>
          {productos.map((producto, index) => (
            <li key={index}>
              <span>{producto.nombre} - ${producto.precio}</span>
              <button onClick={() => eliminarProducto(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${calcularTotal()}</p>
      <button onClick={() => agregarProducto({ nombre: 'Sillon', precio: 140 })}>
        Agregar Producto
      </button>
    </div>
  );
}

export default Cart;
