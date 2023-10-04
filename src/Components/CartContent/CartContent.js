import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

export const CartContent = () => {
  const { cart } = useContext(dataContext)
  
  return cart.lenght > 0 ? (
  <> 
    <CartElements /> 
    <CartTotal />
  </>
  ): (
    <h2> Su Carrito esta vacio :C </h2>
  )
};

export default CartContent;