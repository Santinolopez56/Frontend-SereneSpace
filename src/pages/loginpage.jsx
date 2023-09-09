import {Link} from 'react-router-dom';
import './loginpage.css';
export default function Loginpage() {
    return (
        <body>
            <div class="container">
                <div class="login-form">
                    <h1>Iniciar Sesión</h1>
                    <form>
                        <div class="form-group">
                            <label for="login-email">Email:</label>
                            <input type="text" id="login-email" name="login-email" required/>
                        </div>
                        <div class="form-group">
                            <label for="login-password">Contraseña:</label>
                            <input type="password" id="login-password" name="login-password" required/>
                        </div>
                        <div class="form-group">
                            <input type="button" value="Acceder"/>
                        </div>
                    </form>
                </div>
                <div class="register-form">
                    <h1>Registrarse</h1>
                    <form>
                        <div class="form-group">
                            <label for="register-email">Email:</label>
                            <input type="text" id="register-email" name="register-email" required/>
                        </div>
                        <div class="form-group">
                            <label for="register-password">Contraseña:</label>
                            <input type="password" id="register-password" name="register-password" required/>
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">Repetir Contraseña:</label>
                            <input type="password" id="confirm-password" name="confirm-password" required/>
                        </div>
                        <div class="form-group">
                            <label for="direccion">Dirección de Vivienda:</label>
                            <input type="text" id="direccion" name="direccion" required/>
                        </div>
                        <div class="form-group">
                            <input type="button" value="Registrarse"/>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    )
}