import { useState } from 'react';
import './registerpage.css';
import axios from 'axios';


export default function registerpage() {

const [ name,nombre ]= useState("")
const [ email,correoElectronico ] = useState("")
const [ password,contraseña ] = useState("")
const [ repeatpassword, repetircontraseña ] = useState("")
const registro = async (e) => {

    e.prevenDefault()
    if (password === repeatPassword){
        try {
            await axios.post ("https://localhost:8080/usuarios",{email,password,name})
            alert("Su cuenta ha sido creada exitosamente")
        
        } catch (error) {
            alert("Su no ha podido ser creada")
        }
    }
    else {
        alert("Sus contraseñas no coinciden")
    }
}

    return (
    <body>
        <div class="container">
            <h1>Registrarse</h1>
            <form>
                <div class="form-group">
                    <label for="nombre">Nombre de Usuario:</label>
                    <input type="text" id="nombre" value = {name}  onChange={(e) => nombre (e.target.value)}  name="nombre" required/>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="text" id="email" value = {email}  onChange={(e) => correoElectronico (e.target.value)} name="email" required/>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" value = {password}  onChange={(e) => password (e.target.value)} name="password" required/>
                </div>
                <div class="form-group">
                    <label for="confirm-password">Repetir Contraseña:</label>
                    <input type="password" id="confirm-password" value = {repeatpassword}  onChange={(e) => repetircontraseña (e.target.value)} name="confirm-password" required/>
                </div>
                <div class="form-group">
                    <button>Registrarse</button>
                </div>
            </form>
        </div>
    </body>

)
}