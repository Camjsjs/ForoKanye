function publicar() {
  const caja = document.querySelector("textarea");
  const mensajes = document.getElementById("mensajes");

  if (caja.value.trim() !== "") {
    const nuevoMensaje = document.createElement("p");
    nuevoMensaje.textContent = caja.value;
    mensajes.appendChild(nuevoMensaje);
    caja.value = "";
  } else {
    alert("Escribe algo antes de publicar 🙌");
  }
}
