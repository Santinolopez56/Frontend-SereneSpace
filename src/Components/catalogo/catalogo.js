import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "../catalogo/catalogo.css"

const Products = () => {
    const { data, cart, setCart } =    useContext(dataContext);

    const buyProducts = (product) => {
        setCart([...cart, product]) 
    };
    return data.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={product.img} alt=""/>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <button onClick={() => buyProducts(product)}>Agregar al Carrito</button>
            </div>
        );
    });
};

export default Products;
