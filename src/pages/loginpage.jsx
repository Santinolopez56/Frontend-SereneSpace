import {Link} from 'react-router-dom';
import {useState} from 'react';
import './loginpage.css';
import axios from 'axios';


export default function Loginpage() {
    const [passwordType, setPasswordType] = useState("password");

    const showPassword = (e) => {
        e.preventDefault();

        passwordType === "text" ? setPasswordType("password") : setPasswordType("text");
    };

    return (
        <body>
            <div class="container">
                <h1>Iniciar Sesión</h1>
                <form action="">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" required/>
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña:</label>
                        <input type={passwordType} id="password" name="password" required/>
                    </div> 

                    <div class="form-group">
                        <buttonlogin onClick={showPassword}>¿Mostrar contraseña?</buttonlogin>
                    </div>

                    <div class="form-group">
                        <button>Acceder</button>
                    </div>
        
                </form>
                <div class="register-link">
                    ¿No tienes una cuenta? <a><Link to='/register'>Regístrate</Link></a>
                </div>
            </div>
        </body>
    )
}