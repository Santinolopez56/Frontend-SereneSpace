import './registerpage.css';
export default function registerpage() {
    return (
    <body>
        <div class="container">
            <h1>Registrarse</h1>
            <form>
                <div class="form-group">
                    <label for="nombre">Nombre de Usuario:</label>
                    <input type="text" id="nombre" name="nombre" required/>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <div class="form-group">
                    <label for="confirm-password">Repetir Contraseña:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required/>
                </div>
                <div class="form-group">
                    <input type="button" value="Registrarse"/>
                </div>
            </form>
        </div>
    </body>

)
}