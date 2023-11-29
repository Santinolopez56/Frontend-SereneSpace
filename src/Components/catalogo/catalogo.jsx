import { useContext,useEffect,useState } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";
import "../catalogo/catalogo.css"

export const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);

  const addToCart = (product) => {
      if (cartItems[product.id]) {
          const updatedCart = { ...cartItems };
          updatedCart[product.id].quantity += 1;
          setCartItems(updatedCart);
      } else {
          setCartItems({
          ...cartItems,
          [product.id]: { ...product, quantity: 1 },
          });
      }
  };

  const removeFromCart = (productId) => {
      const updatedCart = { ...cartItems };

      if (updatedCart[productId]) {
          if (updatedCart[productId].quantity > 1) {
              updatedCart[productId].quantity -= 1;
          } else {
              delete updatedCart[productId];
          }

          setCartItems(updatedCart);
      }
  };

  const filteredCart = Object.values(cartItems).map(({ id, quantity }) => ({ id, quantity }));
  const jsonifiedCart = JSON.stringify(filteredCart);

  const handleCart = async () => {
      if (jsonifiedCart !== "[]") {
          try {
              await axios.post('http://localhost:8080/cart', {jsonifiedCart});
  
              alert('Articulos comprados con exito');
          } catch (err) {
              alert('Error al realizar la compra');
              console.log("Error al registrar carrito: ", err)
          }    
      } else {
          alert('Seleccionar articulos antes de realizar la compra');
      }
  };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/producto');
                console.log(response.data)
                setData(response.data);


            } catch (error) {
                console.error('Error interno del servidor:', error);
            }
        };
        fetchData();
    },[]);

    return (
      <div id='productos'> 
        <div className="items"> 
          <div className="container-items">
          {
            Object.values(data).map((products) => (
            <div className="item" key={products.id}>
              <div className="info-product">
                    
                    <figure>
                      <img src={products.image} className="img-product"/>
                    </figure>

                    <h3>{products.name}</h3>
                    <h4>${products.price}</h4>
                    <h4>{products.description}</h4>
                    <button>Agregar al carrito </button>
                    
                  </div>
                </div>
              ))
           }
          </div>
        </div>
      </div>
    );    
};

export default Products;