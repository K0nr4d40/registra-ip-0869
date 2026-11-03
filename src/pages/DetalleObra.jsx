import { useParams } from "react-router-dom";
import { generarCertificado } from "../utils/generarCertificado";

function DetalleObra() {
  const { id } = useParams();

  const obra = {
    id,
    titulo: "Mi Obra",
    autor: "Eduardo Domínguez Canales",
    folio: "OBRA-0869-001",
  };

  return (
    <div>
      <h2>Detalle de Obra</h2>

      <p>
        <strong>Título:</strong> {obra.titulo}
      </p>

      <p>
        <strong>Autor:</strong> {obra.autor}
      </p>

      <p>
        <strong>Folio:</strong> {obra.folio}
      </p>

      <button
        onClick={() => generarCertificado(obra)}
      >
        Descargar certificado
      </button>
    </div>
  );
}

export default DetalleObra;