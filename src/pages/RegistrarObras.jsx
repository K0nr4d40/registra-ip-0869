import { useState } from "react";

function RegistrarObra() {

    const [paso, setPaso] = useState(1);

    const [datos, setDatos] = useState({
        archivo: null,
        titulo: "",
        categoria: "",
        descripcion: "",
        autor: ""
    });
    const [folio, setFolio] = useState("");

    function validarPaso() {

    if (paso === 1) {
        return datos.archivo !== null;
    }

    if (paso === 2) {
        return (
            datos.titulo.length >= 5 &&
            datos.categoria !== ""
        );
    }

    return true;
}
async function enviar() {

    const folioGenerado =
        `OBRA-0869-${String(
            Math.floor(Math.random() * 999) + 1
        ).padStart(3, "0")}`;

    const formData = new FormData();

    formData.append("archivo", datos.archivo);
    formData.append("folio", folioGenerado);
    formData.append("titulo", datos.titulo);
    formData.append("categoria", datos.categoria);
    formData.append("descripcion", datos.descripcion);
    formData.append("autor", datos.autor);

    try {

        const respuesta = await fetch(
            "http://localhost:4000/obras",
            {
                method: "POST",
                body: formData
            }
        );

        if (respuesta.ok) {
            setFolio(folioGenerado);
        }

    } catch (error) {
        console.log(error);
    }
}


    return (
    <div>

        <h1>Registrar Obra</h1>

        <h2>Paso {paso}</h2>
        <div
    style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px"
    }}
>

    {[1, 2, 3, 4].map((numero) => (

        <div
            key={numero}
            style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                backgroundColor:
                    paso >= numero
                        ? "#600869"
                        : "#CCCCCC"
            }}
        >
            {numero}
        </div>

    ))}

</div>

        {
    paso === 1 &&
    <div>

        <h3>Subir archivo</h3>

        <input
            type="file"
            onChange={(e) =>
                setDatos({
                    ...datos,
                    archivo: e.target.files[0]
                })
            }
        />

        {
            datos.archivo &&
            <p>
                Archivo seleccionado: {datos.archivo.name}
            </p>
        }

    </div>
}

        {
    paso === 2 &&
    <div>

        <h3>Capturar metadatos</h3>

        <input
            type="text"
            placeholder="Título"
            value={datos.titulo}
            onChange={(e) =>
                setDatos({
                    ...datos,
                    titulo: e.target.value
                })
            }
        />

        <br /><br />

        <select
            value={datos.categoria}
            onChange={(e) =>
                setDatos({
                    ...datos,
                    categoria: e.target.value
                })
            }
        >
            <option value="">
                Selecciona una categoría
            </option>

            <option value="Libro">
                Libro
            </option>

            <option value="Artículo">
                Artículo
            </option>

            <option value="Tesis">
                Tesis
            </option>

        </select>

        <br /><br />

        <textarea
            placeholder="Descripción"
            value={datos.descripcion}
            onChange={(e) =>
                setDatos({
                    ...datos,
                    descripcion: e.target.value
                })
            }
        />

        <br /><br />

        <input
            type="text"
            placeholder="Autor"
            value={datos.autor}
            onChange={(e) =>
                setDatos({
                    ...datos,
                    autor: e.target.value
                })
            }
        />

    </div>
}

        {
    paso === 3 &&
    <div>

        <h3>Vista previa</h3>

        <p>
            <strong>Archivo:</strong>{" "}
            {datos.archivo?.name}
        </p>

        <p>
            <strong>Título:</strong>{" "}
            {datos.titulo}
        </p>

        <p>
            <strong>Categoría:</strong>{" "}
            {datos.categoria}
        </p>

        <p>
            <strong>Descripción:</strong>{" "}
            {datos.descripcion}
        </p>

        <p>
            <strong>Autor:</strong>{" "}
            {datos.autor}
        </p>

    </div>
}
{
    paso === 4 &&
    <div>

        <h3>Confirmación</h3>

        <p>
            Folio generado:
        </p>

        <h2>
            {folio}
        </h2>

    </div>
}

<button
    onClick={() => setPaso(paso - 1)}
    disabled={paso === 1}
>
    Atrás
</button>

<button
    onClick={() => {

        if (validarPaso()) {

            if (paso === 3) {
                enviar();
            }

            setPaso(paso + 1);
        }

    }}
>
    Siguiente
</button>
</div>
);

}

export default RegistrarObra;