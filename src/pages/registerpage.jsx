import React, { useState } from 'react';
import './registerpage.css';
import axios from 'axios';

export default function RegisterPage() {
    const [name, nombre] = useState("");
    const [email, correo] = useState("");
    const [password, contraseña] = useState("");
    const [repeatPassword, repetircontraseña] = useState("");

    const registro = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            try {
                await axios.post("http://localhost:8080/register", { email, password, name });
                alert("Su cuenta ha sido creada exitosamente");
            } catch (error) {
                alert("Hubo un error al crear la cuenta");
            }
        } else {
            alert("Sus contraseñas no coinciden");
        }
    }

    return (
        <body>
            <div className="container">
                <h1>Registrarse</h1>
                <form onSubmit={registro}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre de Usuario:</label>
                        <input type="text" id="nombre" value={name} onChange={(e) => nombre (e.target.value)} name="nombre" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => correo(e.target.value)} name="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" value={password} onChange={(e) => contraseña(e.target.value)} name="password" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Repetir Contraseña:</label>
                        <input type="password" id="confirm-password" value={repeatPassword} onChange={(e) => repetircontraseña (e.target.value)} name="confirm-password" required/>
                    </div>
                    <div className="form-group">
                        <button type="submit">Registrarse</button>
                    </div>
                </form>
            </div>
        </body>
    )
}
