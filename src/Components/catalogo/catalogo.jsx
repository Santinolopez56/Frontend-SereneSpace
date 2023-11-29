import { useContext,useEffect,useState } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";
import "../catalogo/catalogo.css"

export const Products = () => {
    const {data, buyProducts} = useContext(dataContext);
    const [data1, setData] = useState([]);

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

            {data1 && data1 ["products"] ? (

              data1[ "products" ].map((product) => (

                <div className="item" key={product.id}>

                  <div className="info-product">

                    <h3>{product.name}</h3>

                    <h4>{product.price}$</h4>

                    <h4>{product.description}</h4>

                    <figure>
                      <img src={product.image} alt="img-product"/>
                    </figure>

                    <button onClick={() => buyProducts(product)}>Agregar al carrito</button>
                    
                  </div>
                </div>
              ))
            ) : (
              <p>No hay productos disponibles.</p>
            )}
          </div>
        </div>
      </div>
    );    
};

export default Products;