import { createContext, useState, useEffect } from "react";
import axios from "axios";

export  const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [ data, setData] = useState([ ]);
    const [ cart, setCart] = useState([ ]);

    useEffect(() => {
        axios.get('http://localhost:8080/producto').then((res)=> setData(res.data));
    }, []);

    return <dataContext.Provider value={{data,setCart,cart}}>{children}</dataContext.Provider>;
};

export default DataProvider;