import plant from '../../multimedia/plant.png'
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './header.css';

export default function Header() {
  return (
    <header>

        <div className="contenedor-header">
            <div className="logo">
            <Link to='/'><img src={plant} alt="logo tienda" className="logoImg"/> </Link>
            
                <h2 className="Serene Space">Serene Space</h2>            
            </div>

            <div>
                <nav>
                    <ul>
                        <Autocomplete
                            id="grouped-demo"
                            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                            groupBy={(option) => option.firstLetter}
                            getOptionLabel={(option) => option.title}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="With categories" />}
                        />

                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/catalogo'>Catalogo</Link></li>
                        <li><Link to='/carrito'>Carrito</Link></li>
                        <li><Link to='/login'>Iniciar Sesión</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}