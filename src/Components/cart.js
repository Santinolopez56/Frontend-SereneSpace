import React, { useState } from 'react';

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
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  }
  
  const calcularTotal = () => {
    return products.reduce((total, producto) => total + producto.precio, 0);
  }
  
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {products.length === 0 ? (
        <p>No hay productos en el carrito.</p> ) : (
        <ul>
          {products.map((producto, index) => (
            <li key={index}>
              <span>{producto.nombre} - ${producto.precio}</span>
              <button onClick={() => eliminarProducto(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${calcularTotal()}</p>
      <button onClick={() => agregarProducto({ nombre: 'Producto 1', precio: 10 })}>
        Agregar Producto
      </button>
    </div>
  );
}

export default Cart;
