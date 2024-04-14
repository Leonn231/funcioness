// Creación de dos salas de cine, cada una con 10 asientos inicialmente libres
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);

// Función para ver la disponibilidad de asientos en ambas salas
function verDisponibilidad() {
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

// Función para reservar un asiento en una sala específica
function reservarAsiento() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  if ((sala === "1" && !sala1[asiento]) || (sala === "2" && !sala2[asiento])) {
    const salaSeleccionada = sala === "1" ? sala1 : sala2;
    salaSeleccionada[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala ${sala} reservado.`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
}

// Función para ver la cantidad de asientos libres en una sala específica y ver la película si hay asientos disponibles
function verPelicula() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const salaSeleccionada = sala === "1" ? sala1 : sala2;
  const asientosLibres = salaSeleccionada.filter(asiento => !asiento);

  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("¡Disfruta de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}

// Bucle principal para manejar la interacción con el usuario
while (true) {
  const opcion = prompt("Menú\n" +
    "1. Ver disponibilidad de asientos\n" +
    "2. Reservar asiento\n" +
    "3. Ver ocupación sala\n" +
    "4. Salir");

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      alert("¡Hasta luego!");
      break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}