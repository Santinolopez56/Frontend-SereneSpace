import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dataprovider from './Components/Context/DataContext';
import './App.css';
import Header from './Components/Header/header.jsx';
import Body from './Components/Body/body.jsx';
import Loginpage from './pages/loginpage.jsx';
import Registerpage from './pages/registerpage.jsx';
import Products from './Components/catalogo/catalogo.js'
import Footer from './Components/footer/Footer';
import CartContent from './Components/CartContent/CartContent';

function App() {
  return (
    <div className="App">
    <Dataprovider>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<>
          <Header></Header>
          <Body></Body>
          <Footer />
        </>
        }
        />

        <Route path='/login' element={<>
          <Header></Header>
          <Loginpage />
          <Footer />
        </>
        }
        />

      <Route path='/register' element={<>
        <Header></Header>
        <Registerpage />
        <Footer />
      </>
      }
      />
      
      <Route path='/catalogo' element={<>
        <Header></Header>
        <Products></Products>
        <Footer />
      </>
      }
      />

      <Route path='/carrito' element={<>
        <Header></Header>
        <CartContent />
        <Footer />
        </>
        }
      />

        </Routes>
      </BrowserRouter>
      </Dataprovider>
    </div>
  );
}

export default App;
