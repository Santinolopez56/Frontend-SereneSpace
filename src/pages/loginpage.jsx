import {Link} from 'react-router-dom';
import './loginpage.css';
export default function Loginpage() {
    return (
<body>
    <div class="container">
        <h1>Iniciar Sesión</h1>
        <form>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <input type="button" value="Acceder"/>
            </div>
        </form>
        <div class="register-link">
            ¿No tienes una cuenta? <a><Link to='/register'>Regístrate</Link></a>
        </div>
    </div>
</body>
    )
}