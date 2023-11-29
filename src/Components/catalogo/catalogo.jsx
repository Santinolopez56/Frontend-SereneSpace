import { useContext,useEffect,useState } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";
import "../catalogo/catalogo.css"

export const Products = () => {
  const [data, setData] = useState([]);

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