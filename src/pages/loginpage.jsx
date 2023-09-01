import {Link} from 'react-router-dom';

export default function Loginpage() {
    return (
        <body>
            <div className="container">
                <h1><Link to='/login'>Iniciar Sesión</Link></h1>
                <form>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" required/>
                    </div>
                    <div className="form-group">
                        <label for="password">Contraseña:</label>
                        <input type="password" id="password" name="password" required/>
                    </div>
                    <div className="form-group">
                        <label for="confirm-password">Repetir Contraseña:</label>
                        <input type="password" id="confirm-password" name="confirm-password" required/>
                    </div>
                    <div className="form-group">
                        <label for="direccion">Dirección:</label>
                        <input type="text" id="direccion" name="direccion" required/>
                    </div>
                    <div className="form-group">
                        <input type="button" value="Acceder"/>
                    </div>
                </form>
                <div className="register-link">
                    ¿No tienes una cuenta? <a href="">Regístrate</a>
                </div>
            </div>
        </body>
    )
}