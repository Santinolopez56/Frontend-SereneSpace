import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "../CartContent/CartContent.css"

const CartElements = () => {
const {cart} = useContext (dataContext);
  return cart.map ((product) =>{
    return (
        <div className="cartContent" key={product.id}>
            <img src={product.img} alt="product-card" />
            <h2 className="name">{product.name}</h2>
            <p className="price">${product.price}</p>
        </div>
    )
  })
  
}

export default CartElements