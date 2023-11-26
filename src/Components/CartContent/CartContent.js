import CartElements from "./CartElements";
import CartTotal from "./CartTotal"


import "../CartContent/CartContent.css"


import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartContent = () => {

  const { cart } = useContext(dataContext);

  return cart.length > 0 ? (
    <>
      <CartElements />  
      <CartTotal />
    </>
  ):(
    <h2> Su carrito esta vacio :c </h2>
  )
};

export default CartContent;