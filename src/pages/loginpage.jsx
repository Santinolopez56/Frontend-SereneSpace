import {Link} from 'react-router-dom';
import {useState} from 'react';
import './loginpage.css';


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

// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';
// import './loginpage.css';

// export default function Loginpage() {
//     const [passwordType, setPasswordType] = useState("");
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [repeatPassword, setRepeatPassword] = useState('');

//     const showPassword = (e) => {
//         e.preventDefault();
//         passwordType === "text" ? setPasswordType("password") : setPasswordType("text");
//     };

//     const loginpage = async (e) => {
//         e.preventDefault();
//         if (password === repeatPassword) {
//             try {
//                 await axios.post("http://localhost:8080/register", { email, password});
//                 alert("Su cuenta ha sido creada exitosamente");
//             } catch (error) {
//                 alert("Hubo un error al crear la cuenta: " + error.message);
//             }
//         } else {
//             alert("Sus contraseñas no coinciden");
//         }
//     }

//     return (
//         <body>
//             <div className="container">
//                 <h1>Iniciar Sesión</h1>
//                 <form onSubmit={loginpage}>
//                     <div className="form-group">
//                         <label htmlFor="email">Email:</label>
//                         <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Contraseña:</label>
//                         <input type={passwordType} id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="confirm-password">Repetir Contraseña:</label>
//                         <input type={passwordType} id="confirm-password" name="confirm-password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} required/>
//                     </div>

//                     <div className="form-group">
//                         <button onClick={showPassword} type="submit">Mostrar Contraseña</button>
//                     </div>

//                     <div className="form-group">
//                         <button type="submit">Registrarse</button>
//                     </div>
//                 </form>
//                 <div className="register-link">
//                     ¿No tienes una cuenta? <Link to='/register'>Regístrate</Link>
//                 </div>
//             </div>
//         </body>
//     )
// }
