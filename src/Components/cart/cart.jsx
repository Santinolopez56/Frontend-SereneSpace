import './cart.css';
export default function carrito() {
    return (

    <body>
        <div class="contenedor">
            <div class="cart">
                <h2>Tu Carrito de Compras</h2>
                <ul id="cart-items">

                </ul>
                <div class="cart-total">
                    <p>Total: <span id="cart-total">$0.00</span></p>
                    <button id="checkout-btn">Finalizar Compra</button>
                </div>
            </div>
        </div>
        <script src="cart.js"></script>
    </body>
)
}