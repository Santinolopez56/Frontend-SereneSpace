// import React , {useState} from 'react';
// import './registerpage.css';
// import axios from 'axios';


// export default function Registerpage() {

// const [ name,nombre ]= useState("")
// const [ email,correoElectronico ] = useState("")
// const [ password,contraseña ] = useState("")
// const [ repeatpassword, repetircontraseña ] = useState("")
// const registro = async (e) => {

//     e.prevenDefault()
//     if (password === repeatpassword){
//         try {
//             await axios.post ("http://localhost:8080/register",{email,password,name,repeatpassword})
//             alert("Su cuenta ha sido creada exitosamente")
        
//         } catch (error) {
//             alert("Su no ha podido ser creada")
//         }
//     }
//     else {
//         alert("Sus contraseñas no coinciden")
//     }
// }

//     return (
//     <body>
//         <div class="container">
//             <h1>Registrarse</h1>
//             <form>
//                 <div class="form-group">
//                     <label for="nombre">Nombre de Usuario:</label>
//                     <input type="text" id="nombre" value = {name}  onChange={(e) => nombre (e.target.value)}  name="nombre" required/>
//                 </div>
//                 <div class="form-group">
//                     <label for="email">Email:</label>
//                     <input type="text" id="email" value = {email}  onChange={(e) => correoElectronico (e.target.value)} name="email" required/>
//                 </div>
//                 <div class="form-group">
//                     <label for="password">Contraseña:</label>
//                     <input type="password" id="password" value = {password}  onChange={(e) => contraseña (e.target.value)} name="password" required/>
//                 </div>
//                 <div class="form-group">
//                     <label for="confirm-password">Repetir Contraseña:</label>
//                     <input type="password" id="confirm-password" value = {repeatpassword}  onChange={(e) => repetircontraseña (e.target.value)} name="confirm-password" required/>
//                 </div>
//                 <div class="form-group">
//                     <button type = "submit" onClick= {registro} >Registrarse</button>
//                 </div>
//             </form>
//         </div>
//     </body>

// )
// }

import React, { useState } from 'react';
import './registerpage.css';
import axios from 'axios';

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const registro = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            try {
                await axios.post("http://localhost:8080/register", { email, password, name });
                alert("Su cuenta ha sido creada exitosamente");
            } catch (error) {
                alert("Hubo un error al crear la cuenta: " + error.message);
            }
        } else {
            alert("Sus contraseñas no coinciden");
        }
    }

    const handleInputChange = (e, setStateFunction) => {
        setStateFunction(e.target.value);
    }

    return (
        <body>
            <div className="container">
                <h1>Registrarse</h1>
                <form onSubmit={registro}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre de Usuario:</label>
                        <input type="text" id="nombre" value={name} onChange={(e) => handleInputChange(e, setName)} name="nombre" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" value={email} onChange={(e) => handleInputChange(e, setEmail)} name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" value={password} onChange={(e) => handleInputChange(e, setPassword)} name="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Repetir Contraseña:</label>
                        <input type="password" id="confirm-password" value={repeatPassword} onChange={(e) => handleInputChange(e, setRepeatPassword)} name="confirm-password" required />
                    </div>
                    <div className="form-group">
                        <button type="submit">Registrarse</button>
                    </div>
                </form>
            </div>
        </body>
    )
}
