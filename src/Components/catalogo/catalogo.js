import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "../catalogo/catalogo.css"

const Products = () => {
    const {data,cart,setCart} = useContext(dataContext);

    const buyProducts= (products) =>{
        setCart([ ... cart,products ]);
    };

    return data.map ((product)=> {
        return (
            <div className="card" key={product.id}>
                <img src={product.img}/>
                <h3>{product.name}</h3>
                <h3>{product.description}</h3>
                <h4>{product.price}$</h4>
                <button onClick={()=> buyProducts (product)}>Comprar</button>
            </div>
        );
    });
}

export default Products;