import {Link} from 'react-router-dom';
import {useState} from 'react';
import './loginpage.css';
import axios from 'axios';


export default function Loginpage() {

    const [email, correo] = useState("");
    const [password, contraseña] = useState("");

    const login = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8080/login", { email, password });
            alert("Ha podido registrarse correctamente");

        }catch (error) {
            alert("Hubo un error al iniciar sesion");
        }
    }

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
                        <input type="email" id="email" name="email" value={email} onChange={(e) => correo(e.target.value)} required/>
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña:</label>
                        <input type={passwordType} id="password" name="password" value={password} onChange={(e) => contraseña(e.target.value)} required/>
                    </div> 

                    <div class="form-group">
                        <buttonlogin onClick={showPassword}>¿Mostrar contraseña?</buttonlogin>
                    </div>

                    <div class="form-group">
                        <button type="submit" onClick={login}>Acceder</button> 
                    </div>
        
                </form>
                <div class="register-link">
                    ¿No tienes una cuenta? <a><Link to='/register'>Regístrate</Link></a>
                </div>
            </div>
        </body>
    )
}

