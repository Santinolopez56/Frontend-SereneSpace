import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/header.jsx';
import Body from './Components/Body/body.jsx';
import Loginpage from './pages/loginpage.jsx';
import Registerpage from './pages/registerpage.jsx'
import Catalogo from './pages/catalogo.jsx'
import carrito from './Components/cart/cart.jsx'
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
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
        <Catalogo />
        <Footer />
      </>
      }
      />

      <Route path='/carrito' element={<>
        <Header></Header>
        <carrito />
        <Footer />
            </>
            }
            />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
