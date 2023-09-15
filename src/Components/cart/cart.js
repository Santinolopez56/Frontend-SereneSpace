const productos = [
    { id: 1, nombre: "producto1", precio: 10.000 },
    { id: 2, nombre: "producto2", precio: 15.000 },
    { id: 3, nombre: "producto3", precio: 20.000 },
    { id: 4, nombre: "producto4", precio: 40.000 },
];


function mostrarProductos() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; // Vacía el carrito

    let total = 0;

    for (const producto of productos) {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
            <span>${producto.nombre}</span>
            <button class="add-btn" data-id="${producto.id}">+</button>
            <button class="remove-btn" data-id="${producto.id}">-</button>
            <span class="item-price">$${producto.precio.toFixed(2)}</span>
        `;

        const addButton = cartItem.querySelector(".add-btn");
        addButton.addEventListener("click", () => {
        console.log(`Agregaste ${producto.nombre} al carrito.`);
        });

        const removeButton = cartItem.querySelector(".remove-btn");
        removeButton.addEventListener("click", () => {
        console.log(`Quitaste ${producto.nombre} del carrito.`);
        });

        cartItems.appendChild(cartItem);
        total += producto.precio;
    }

    const cartTotal = document.getElementById("cart-total");
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

mostrarProductos();
