import { jsPDF } from "jspdf";
import QRCode from "qrcode";

export async function generarCertificado(obra) {
  const doc = new jsPDF();

  const qrData = await QRCode.toDataURL(obra.folio);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("Certificado de Registro de Autoría", 105, 30, {
    align: "center",
  });

  doc.setFontSize(16);
  doc.text(`Título: ${obra.titulo}`, 20, 60);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.text(`Autor: ${obra.autor}`, 20, 80);

  doc.text(
    `Fecha de registro: ${new Date().toLocaleDateString()}`,
    20,
    100
  );

  doc.text(`Folio: ${obra.folio}`, 20, 120);

  doc.text(
    "Registrado por: Eduardo Domínguez Canales",
    20,
    140
  );

  doc.addImage(qrData, "PNG", 140, 80, 40, 40);

  doc.save(`certificado-${obra.folio}.pdf`);
}