// Solicitando al usuario las informaciones necesarias para iniciar el juego
function iniciarJuego() {
  let vecesAJugar = parseInt(document.getElementById('timesToPlay').value);
  // verificar si el usuario está ingresando numero
  if (isNaN(vecesAJugar) || vecesAJugar <= 0) {
    alert("Por favor, ingresa un número válido mayor a 0.");
    return;
  }
  // abrir ciclo en base la cantidad veces eligió el jugador
  for (let i = 0; i < vecesAJugar; i++) {
    let jugadaUsuario = prompt(`Partida ${i + 1} de ${vecesAJugar}: Elige: Piedra, Papel o Tijera`).toLowerCase();

    if (!(jugadaUsuario === "piedra" || jugadaUsuario === "papel" || jugadaUsuario === "tijera")) {
      alert("¡Oh no! Parece que tu elección no es válida. Recuerda elegir entre Piedra, Papel o Tijera. ¡Intentémoslo de nuevo!");
      i--;
      continue;
    }
    // creando variable para almacenar las funciones
    let jugadaMaquina = obtenerJugadaMaquina();
    let resultado = determinarGanador(jugadaUsuario, jugadaMaquina);
    // mostrando resultado de la jugada
    mostrarResultado(resultado);

    if (i < vecesAJugar - 1) {
      alert(`¡Prepárate para la siguiente partida! Faltan ${vecesAJugar - (i + 1)} partidas.`);
    }
  }
}

function obtenerJugadaMaquina() {
  const numeroAleatorio = Math.floor(Math.random() * 3);

  switch (numeroAleatorio) {
    case 0:
      return "piedra";
    case 1:
      return "papel";
    case 2:
      return "tijera";
  }
}


function determinarGanador(jugadaUsuario, jugadaMaquina) {
  if (jugadaUsuario === jugadaMaquina) {
    return `¡Es un empate! Tu jugada fue: ${jugadaUsuario} y la jugada de la máquina fue: ${jugadaMaquina}`;
  } else if (
    (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
    (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
    (jugadaUsuario === "tijera" && jugadaMaquina === "papel")
  ) {
    return `¡Felicidades! ¡Ganaste! Tu jugada fue: ${jugadaUsuario} y la jugada de la máquina fue: ${jugadaMaquina}`;
  } else {
    return `Has perdido contra la máquina. ¡Inténtalo de nuevo! Tu jugada fue: ${jugadaUsuario} y la jugada de la máquina fue: ${jugadaMaquina}`;
  }
}

function mostrarResultado(resultado) {
  alert(resultado);
}
