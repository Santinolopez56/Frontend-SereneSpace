import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "../CartContent/CartContent.css"
import React from "react";

const CartElements = () => {
  const {cart} = useContext (dataContext);
    return cart.map ((product) =>{
          <div className="cartContent" key={product.id}>
              <img src={product.img} alt="product-card" />
              <h2 className="name">{product.name}</h2>
              <p className="price">${product.price}</p>
          </div>

    })
  
}

export default CartElements;