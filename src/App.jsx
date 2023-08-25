import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/header.jsx';
import Body from './Components/Body/body.jsx';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<>
       <Header></Header>
       <Body></Body>
       </>

       }

      />
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
