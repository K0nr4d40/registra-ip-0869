import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [tipo, setTipo] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const registrar = (e) => {
        e.preventDefault();

        if (nombre.trim() === "" || correo.trim() === "" || tipo === "") {
            setError("Todos los campos son obligatorios");
            return;
        }

        const expresionCorreo = /\S+@\S+\.\S+/;

        if (!expresionCorreo.test(correo)) {
            setError("Correo no válido");
            return;
        }

        setError("");

        const usuario = {
            nombre,
            correo,
            tipo,
        };

        localStorage.setItem(
            "registraIpUsuario",
            JSON.stringify(usuario)
        );

        navigate("/dashboard");
    };

    return (
        <div>
            <h2>Registro de Creador</h2>

            <form onSubmit={registrar}>
                <div>
                    <label>Nombre</label>
                    <br />
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <br />

                <div>
                    <label>Correo</label>
                    <br />
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </div>

                <br />

                <div>
                    <label>Tipo de creador</label>
                    <br />
                    <select
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    >
                        <option value="">
                            Seleccione una opción
                        </option>

                        <option value="Diseñador">
                            Diseñador
                        </option>

                        <option value="Fotógrafo">
                            Fotógrafo
                        </option>

                        <option value="Escritor">
                            Escritor
                        </option>

                        <option value="Cineasta">
                            Cineasta
                        </option>
                    </select>
                </div>

                <br />

                <div aria-live="polite">
                    {error}
                </div>

                <br />

                <button type="submit">
                    Registrarse
                </button>
            </form>
        </div>
    );
}

export default Registro;