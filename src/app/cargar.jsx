const cargarDatos = async () => {
  try {
    const response = await fetch("http://www.raydelto.org/agenda.php", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(
        `Error al obtener datos. Código de estado: ${response.status}`
      );
    }

    const data = await response.json();

    const fragmentoDatos = document.createDocumentFragment();

    const divDatosRespuesta = document.getElementById("agenda");
    divDatosRespuesta.textContent = "";

    for (const key in data) {
      const p = document.createElement("p");
      p.textContent = `${key}: Nombre Completo: ${data[key].nombre} ${data[key].apellido}, Telefono: ${data[key].telefono}`;
      fragmentoDatos.appendChild(p);
    }

    divDatosRespuesta.appendChild(fragmentoDatos);
  } catch (error) {
    console.error("Error al obtener y mostrar los datos:", error.message);
  }
};

export default cargarDatos;
