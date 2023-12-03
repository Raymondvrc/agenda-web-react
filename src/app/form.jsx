"use client";
import "./main.css";
import cargar from "./cargar";

const FormAgenda = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        telefono: document.getElementById("telefono").value,
      };

      const response = await fetch("http://www.raydelto.org/agenda.php", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(
          `Error al enviar la solicitud. Código de estado: ${response.status}`
        );
      }

      const responseData = await response.text();
      console.log("Respuesta del servidor:", responseData);

      cargar();
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <form className="formulario" id="form" onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" required />

      <label htmlFor="apellido">Apellido</label>
      <input type="text" id="apellido" name="apellido" required />

      <label htmlFor="telefono">Teléfono</label>
      <input
        type="text"
        id="telefono"
        name="telefono"
        placeholder="8X9-XXX-XXXX"
        required
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormAgenda;
