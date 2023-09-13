import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/header.jsx';
import Body from './Components/Body/body.jsx';
import Loginpage from './pages/loginpage.jsx';
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
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
