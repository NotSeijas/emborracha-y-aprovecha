// =========================
// Retos (30 por nivel)
// =========================
const challenges = [
  // Suaves (30)
  {
    text: "Elige a alguien y dile algo que siempre quisiste decirle (con sinceridad), si no lo haces bebes 3 sorbos.",
    difficulty: "suave",
  },
  {
    text: "Todos dicen una cualidad tuya. Si alguien se queda en blanco: bebe 3 sorbos.",
    difficulty: "suave",
  },
  {
    text: "Mira fijamente a la persona de tu derecha por 10 segundos. frente a frente Si alguno se ríe, ambos beben 2 sorbos.",
    difficulty: "suave",
  },
  {
    text: "date la vuelta sobre ti mism@ durante 30 segundos, luego parate sobre 1 pie. si te mantienes durante 10 segundos bebe el jugador que tu prefieras, si no lo lograste bebes tu vaso completo.",
    difficulty: "suave",
  },
  {
    text: "Di algo que te guste de la persona a tu izquierda y algo que quieras mejorar de ti mismo.",
    difficulty: "suave",
  },
  {
    text: "Imita el tono de voz de alguien de la mesa durante una ronda completa.",
    difficulty: "suave",
  },
  {
    text: "Cambia tu nombre por un apodo gracioso elegido por el grupo hasta que acabe la ronda.",
    difficulty: "suave",
  },
  {
    text: "Cuenta tu primer recuerdo de una fiesta. Si no quieres contarlo, toma 3 sorbos.",
    difficulty: "suave",
  },
  {
    text: "Di quién crees que se emborracharía más rápido de la mesa y por qué.",
    difficulty: "suave",
  },
  {
    text: "Haz una pose ridícula y deja que el grupo te tome una foto (no tienen que publicarla). Si no quieres, bebe 3 sorbos.",
    difficulty: "suave",
  },
  {
    text: "Di algo que admires de la persona de enfrente. Si no se te ocurre, bebes 2 sorbos.",
    difficulty: "suave",
  },
  {
    text: "Habla con acento raro (el que elija el grupo) durante 1 minuto.",
    difficulty: "suave",
  },
  {
    text: "Di tu último emoji usado y explícalo. Si no quieres explicarlo, toma 2 sorbos.",
    difficulty: "suave",
  },
  {
    text: "Cambia de asiento con alguien que el grupo elija.",
    difficulty: "suave",
  },
  {
    text: "Elige a alguien para que te invente un reto suave. Si lo rechazas, tú y esa persona beben 2 sorbos.",
    difficulty: "suave",
  },
  {
    text: "Cierra los ojos y deja que alguien ponga un objeto frente a ti; intenta adivinar qué es tocándolo. si no lo adivinas bebes 3 sorbos",
    difficulty: "suave",
  },
  {
    text: "Di cuál fue tu apodo más raro en el colegio. Si no quieres contarlo, bebe 3 sorbos.",
    difficulty: "suave",
  },
  {
    text: "Todos cuentan una pequeña vergüenza. Si alguien se niega, bebe 2 sorbos.",
    difficulty: "suave",
  },
  {
    text: "Elige una canción y canta una parte la persona de tu derecha debe continuarla, si no la canta bebe 3 sorbos.",
    difficulty: "suave",
  },
  {
    text: "si alguien de esta mesa te parece atractivo bebe 3 sorbos ",
    difficulty: "suave",
  },
  {
    text: "Haz una confesión random (algo tonto, no profundo). Si no quieres, bebe 2 sorbos.",
    difficulty: "suave",
  },
  {
    text: " Telefono malogrado, di una palabra y la persona a tu derecha debe decir otra palabra relacionada. Sigue hasta que alguien falle. Esa persona bebe 3 sorbos.",
    difficulty: "suave",
  },
  {
    text: "Deja que el grupo cambie tu fondo de pantalla del celular por 1 minuto . Si no aceptas, bebe 3 sorbos.",
    difficulty: "suave",
  },
  {
    text: "Elige a alguien y di un recuerdo bonito que tengas con esa persona.",
    difficulty: "suave",
  },
  {
    text: "Cuenta cuál fue tu primera impresión de la persona a tu izquierda.",
    difficulty: "suave",
  },
  {
    text: "Describe la vibra de la persona que tienes en frente ",
    difficulty: "suave",
  },

  // Medio (30)
  {
    text: "Imita a alguien del grupo durante 30 segundos. Si no lo haces, bebe 4 sorbos.",
    difficulty: "medio",
  },
  {
    text: "Durante una ronda no puedes decir 'sí' ni 'no'. Si fallas, bebe 3 sorbos.",
    difficulty: "medio",
  },
  {
    text: "El grupo te hace una pregunta incómoda. Si no respondes, bebe 5 sorbos.",
    difficulty: "medio",
  },
  {
    text: "Elige a alguien y susúrrale al oído, si esa persona sonrie bebe 2 sorbos, si no causaste nada en ella o el . bebes 3 sorbos ",
    difficulty: "medio",
  },
  {
    text: "bebe 1 sorbo si estarias en planes con alguien de esta mesa.",
    difficulty: "medio",
  },
  {
    text: "Muestra al grupo tu última foto de galería en ocultos, si no lo muestras. bebes 3 sorbos.",
    difficulty: "medio",
  },
  {
    text: "Di quién crees que es el más probable en: besarse o ligarse a alguien en una fiesta. si todos estan de acuerdo, esa persona bebe 2 sorbos",
    difficulty: "medio",
  },
  {
    text: "Di el nombre de alguien con quien saliste o chateaste y que el grupo no conozca. Si no quieres, bebe 4 sorbos.",
    difficulty: "medio",
  },
  {
    text: "Deja que alguien revise tus stickers de WhatsApp por 20 segundos y logra encontrar un sticker porno o de traumado. la persona dueña del celular bebe 3 sorbos, si no encontraste bebes tu",
    difficulty: "medio",
  },
  {
    text: "Elige a alguien para hacer 'mirada seria' a pocos centímetros de distancia durante 10 segundos. Si alguno se ríe, bebe 3 sorbos.",
    difficulty: "medio",
  },
  {
    text: "di en voz alta, si alguien del grupo se comeria a alguien presente , beba 2 sorbos.",
    difficulty: "medio",
  },
  {
    text: "Manda un emoji al azar a la última persona con la que hablaste por chat. Si no quieres, bebe 3 sorbos.",
    difficulty: "medio",
  },
  {
    text: "El grupo elige una persona y tú tienes que decir qué es lo más atractivo que ves en ella por 10 segundos. estando frente a frente, si la persona que miras se voltea o se va bebe 3 sorbos.",
    difficulty: "medio",
  },
  {
    text: "Di quién crees que se enamora más rápido de la mesa y por qué. si todos estan de acuerdo esa persona bebe 2 sorbos, y si no bebes tu ",
    difficulty: "medio",
  },
  {
    text: "Habla como si estuvieras borracho/a exagerando durante 30 segundos.",
    difficulty: "medio",
  },
  {
    text: "Si has stalkeado a alguien recientemente, cuenta a quién  o bebe 4 sorbos.",
    difficulty: "medio",
  },
  {
    text: "Di el nombre de tu última conversación por chat sin dar contexto. Si no quieres, bebe 3 sorbos.",
    difficulty: "medio",
  },
  {
    text: "Confiesa algo que nunca le has contado a nadie presente . Si no quieres, bebe 5 sorbos.",
    difficulty: "medio",
  },
  {
    text: "Haz que el grupo elija una persona y esta te puede hacer una pregunta directa. Verdad o 3 sorbos.",
    difficulty: "medio",
  },
  {
    text: "Di tu mayor red flag según tú mismo. Si no quieres decirla, bebes 4 sorbos.",
    difficulty: "medio",
  },
  {
    text: "Deja que alguien elija un contacto al azar  y llamalo,  Si no quieres, bebe 3 sorbos.",
    difficulty: "medio",
  },
  {
    text: "Elige a alguien y cuenten cada uno una anécdota donde hayan hecho  juntos el ridículo.",
    difficulty: "medio",
  },
  {
    text: "Actúa una escena dramática de novela con alguien que el grupo elija.",
    difficulty: "medio",
  },
  {
    text: "Di el nombre de alguien con quien nunca volverías a salir. Si no quieres decirlo, bebe 4 sorbos.",
    difficulty: "medio",
  },
  {
    text: "si todos del grupo alguna ves se han besado en una fiesta levanten la mano, la mayoria bebe 3 sorbos",
    difficulty: "medio",
  },
  {
    text: "Di qué tipo de persona te atrae más (físico o personalidad) sin decir nombres.",
    difficulty: "medio",
  },
  {
    text: "describe la persona que te atrae del grupo, menciona al menos 3 cualidades(fisicas o personalidad), si no lo haces, bebe 4 sorbos.",
    difficulty: "medio",
  },
  {
    text: "Cuenta tu peor cita hasta ahora. Si no quieres, bebe 4 sorbos.",
    difficulty: "medio",
  },
  {
    text: "Di quién crees que se besaría con alguien esta noche si se diera la oportunidad .",
    difficulty: "medio",
  },
  {
    text: "Deja que alguien redacte un estado o nota graciosa en tu celular . Si no aceptas, bebe 4 sorbos.",
    difficulty: "medio",
  },

  // Fuertes / picantes (30)
  {
    text: "El grupo elige a dos jugadores para que vayan juntos al baño o a una habitación por 30 segundos. Si alguno no quiere, ambos beben 4 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Si hay vape en la mesa, elige a alguien: uno da una calada y le sopla el humo cerca de la boca al otro. Si no quieren, los dos beben 4 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "el jugador de tu derecha y tú deben sentarse juntos, abrazados durante 1 minuto. Si no aceptan, ambos beben 3 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Elige a alguien para que se siente en tus piernas (o tú en las suyas) durante 20 segundos. Si no quieren, ambos beben 4 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "El grupo decide un reto rápido para ti (bailar, cantar, imitar, etc.). Si lo rechazas, bebe 7 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Haz una videollamada a alguien que no está aquí y dile que lo/la extrañas. Si no lo haces, bebe 6 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Elige a alguien para jugar 'verdad o trago': te hace una pregunta. Si no respondes, bebes 3 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "al jugador que tienes enfrente y tú debes tomarle la mano y mantener contacto visual durante 20 segundos. Si alguno no quiere, ambos beben 3 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Acércate mucho al jugador de tu izquierda y dile algo al oído que sea medio picante . Si no quieren, ambos beben 4 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "El grupo elige a dos personas para que se abracen fuerte durante 15 segundos. Si no aceptan, ambos beben 3 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Di a quién invitarías a una cita de la gente que está aquí. Si no quieres decirlo, bebe 5 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Elige a alguien y deja que esa persona te pregunte algo sobre tu vida amorosa. Verdad o 4 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Cuenta la historia más intensa que recuerdes de una salida o fiesta. Si no quieres, bebe 5 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "El grupo elige una pareja de 'los que más química tienen' y deben mantenerse juntos durante 1 ronda. Si alguno no quiere aceptar el título, bebe 3 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Envía un mensaje misterioso a alguien que no está aquí (solo un emoji o frase ambigua). Si no quieres, bebe 4 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Di si alguna vez te ha gustado o atraido alguien de este grupo. No des nombres si no quieres, pero si te niegas totalmente, bebe 4 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "El grupo elige a alguien para que baile pegado contigo durante unos segundos . Si no aceptan, ambos beben 4 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Confiesa si besarías a alguien de esta mesa en una fiesta. Si no quieres contestar, bebe 5 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Elige a alguien y deja que el grupo les tome una foto abrazados (no se publica si no quieren). Si se niegan, ambos beben 3 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Cuenta cuál ha sido tu mayor locura por alguien que te gustaba. Si no quieres, bebe 5 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "El grupo elige a dos personas para que se sienten juntos muy cerca durante 1 ronda. Si no aceptan, ambos beben 4 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Di el lugar más raro donde te gustaría tener una cita. Si no quieres decirlo, bebe 4 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Imita cómo te comportas cuando alguien que te atrae se te acerca mucho.",
    difficulty: "fuerte",
  },
  {
    text: "El grupo te puede hacer dos preguntas rápidas sobre tu vida romántica. Por cada pregunta que no respondas, bebe 3 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Di si volverías con algún ex y mencionalo. Si no quieres responder, bebe 4 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Elige a alguien y di una cosa que piensas de esa persona pero nunca le habías dicho (con respeto). Si no quieres, bebes 4 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "El grupo elige a alguien y esa persona debe decir algo que le parezca atractivo de ti. Si no quiere, bebe 3 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "Di cuál es tu tipo de cita ideal (sin dar nombres). Si no quieres hablar del tema, bebe 4 sorbos.",
    difficulty: "fuerte",
  },
  {
    text: "El grupo elige a dos personas para que se miren muy cerca y digan al mismo tiempo si se besarían en un futuro hipotético. Si no quieren responder, ambos beben 4 sorbos.",
    difficulty: "fuerte",
  },
];

// =========================
// DOM y estados (flujo por pasos)
// =========================
const playersPanel = document.getElementById("playersPanel");
const cardPanel = document.getElementById("cardPanel");

const playerNameInput = document.getElementById("playerNameInput");
const addPlayerBtn = document.getElementById("addPlayerBtn");
const playersListEl = document.getElementById("playersList");
const startGameBtn = document.getElementById("startGameBtn");
const clearPlayersBtn = document.getElementById("clearPlayersBtn");
const statusText = document.getElementById("statusText");

const cardArea = document.getElementById("cardArea");
const cardPlaceholder = document.getElementById("cardPlaceholder");
const newChallengeBtn = document.getElementById("newChallengeBtn");
const newPlayerBtn = document.getElementById("newPlayerBtn");

const levelButtons = document.querySelectorAll(".level-btn");
const levelSelector = document.querySelector("#cardPanel .level-selector");
const cardActionsRow = document.querySelector("#cardPanel .actions-row");
const cardWrapper = document.getElementById("cardArea");

let players = [];
let remainingPlayers = []; // cola aleatoria de jugadores por ronda
let currentPlayer = null;
let currentDifficulty = "medio";
let selectedMode = null; // suave / medio / fuerte / mix

// =========================
// Funciones auxiliares
// =========================
function resetRemainingPlayers() {
  // Nueva ronda con todos los jugadores
  remainingPlayers = [...players];
}

function getNextPlayer() {
  if (players.length === 0) return null;

  if (remainingPlayers.length === 0) {
    resetRemainingPlayers();
  }

  const index = Math.floor(Math.random() * remainingPlayers.length);
  const player = remainingPlayers[index];
  remainingPlayers.splice(index, 1); // lo quito para no repetirlo en esta ronda

  return player;
}

function renderPlayers() {
  playersListEl.innerHTML = "";
  players.forEach((name, index) => {
    const pill = document.createElement("div");
    pill.className = "player-pill";
    pill.innerHTML = `
      <span>🎮 ${name}</span>
      <span class="remove" data-index="${index}">&times;</span>
    `;
    playersListEl.appendChild(pill);
  });

  startGameBtn.disabled = players.length < 2;

  if (players.length < 2) {
    statusText.textContent = "Agrega al menos 2 jugadores para continuar 😏";
  } else {
    statusText.textContent = `${players.length} jugadores listos. Presiona "Comenzar juego". 🎲`;
  }

  document.querySelectorAll(".player-pill .remove").forEach((el) => {
    el.addEventListener("click", () => {
      const index = parseInt(el.getAttribute("data-index"), 10);
      players.splice(index, 1);
      resetRemainingPlayers();
      renderPlayers();
    });
  });
}

function addPlayer() {
  const name = playerNameInput.value.trim();
  if (!name) return;
  players.push(name);
  playerNameInput.value = "";
  resetRemainingPlayers();
  renderPlayers();
}

function getRandomChallenge() {
  let pool = challenges;

  if (selectedMode && selectedMode !== "mix") {
    pool = challenges.filter((c) => c.difficulty === selectedMode);
  }

  const randomIndex = Math.floor(Math.random() * pool.length);
  const challenge = pool[randomIndex];
  currentDifficulty = challenge.difficulty;
  return challenge;
}

function difficultyClass() {
  if (currentDifficulty === "suave") return "difficulty-soft";
  if (currentDifficulty === "medio") return "difficulty-medium";
  return "difficulty-hard";
}

function difficultyLabel() {
  if (currentDifficulty === "suave") return "Nivel suave";
  if (currentDifficulty === "medio") return "Nivel medio";
  return "Nivel intenso";
}

function clearLevelSelection() {
  levelButtons.forEach((btn) => btn.classList.remove("active-level"));
  selectedMode = null;
}

// =========================
// Render de la carta
// =========================
function renderCard() {
  if (!selectedMode) {
    statusText.textContent = "Primero elige un nivel de reto 😏";
    return;
  }

  if (!currentPlayer) {
    currentPlayer = getNextPlayer();
  }
  if (!currentPlayer) {
    statusText.textContent = "No hay jugadores. Vuelve atrás y agrega algunos.";
    return;
  }

  const challenge = getRandomChallenge();

  cardArea.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card card-pop";

  card.innerHTML = `
    <div class="card-face card-front">
      <div>
        <div class="card-header-label">Le tocó a</div>
        <div class="player-name">${currentPlayer}</div>
        <div class="tap-hint">
          <span>👆</span> Toca la carta para ver el reto
        </div>
      </div>
      <div>
        <div class="small-label">Retos con alcohol y risas</div>
        <div class="game-title-card">Emborrachate y aprovecha</div>
      </div>
    </div>

    <div class="card-face card-back">
      <div>
        <div class="card-header-label">Reto para ${currentPlayer}</div>
        <div class="challenge-text">
          ${challenge.text}
        </div>
      </div>
      <div class="card-footer">
        <span class="badge ${difficultyClass()}">${difficultyLabel()}</span>
        <span class="badge">🎴 Ronda activa</span>
      </div>
    </div>
  `;

  cardArea.appendChild(card);

  setTimeout(() => {
    card.classList.remove("card-pop");
  }, 500);

  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });

  newChallengeBtn.disabled = false;
  newPlayerBtn.disabled = false;
}

// =========================
// Eventos (flujo por pasos)
// =========================

// Paso 1: manejo de jugadores
addPlayerBtn.addEventListener("click", addPlayer);
playerNameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addPlayer();
});

// Paso 1 -> Paso 2 (solo selector de nivel visible)
startGameBtn.addEventListener("click", () => {
  if (players.length < 2) {
    statusText.textContent = "Necesitas al menos 2 jugadores para empezar 😈";
    return;
  }

  resetRemainingPlayers();
  currentPlayer = null;

  playersPanel.classList.add("hidden"); // ocultar paso 1
  cardPanel.classList.remove("hidden"); // mostrar panel de juego

  // Paso 2: solo selector visible
  levelSelector.classList.remove("hidden");
  cardWrapper.classList.add("hidden");
  cardActionsRow.classList.add("hidden");

  clearLevelSelection();
  cardArea.innerHTML = "";
  cardArea.appendChild(cardPlaceholder);
  newChallengeBtn.disabled = true;
  newPlayerBtn.disabled = true;

  statusText.textContent =
    "Paso 2: Elige el nivel (Suave, Medio, Intenso o Mezclado).";
});

// Paso 2 -> Paso 3 (elegir nivel, mostrar solo carta)
levelButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    levelButtons.forEach((b) => b.classList.remove("active-level"));
    btn.classList.add("active-level");
    selectedMode = btn.dataset.mode; // suave / medio / fuerte / mix

    statusText.textContent =
      selectedMode === "mix"
        ? "Modo Mezclado: cualquier cosa puede pasar 😈"
        : `Nivel seleccionado: ${btn.textContent.trim()}.`;

    // Ir a Paso 3: ocultar selector, mostrar carta + botones
    levelSelector.classList.add("hidden");
    cardWrapper.classList.remove("hidden");
    cardActionsRow.classList.remove("hidden");

    currentPlayer = getNextPlayer();
    renderCard();
  });
});

// Botones de ronda
newChallengeBtn.addEventListener("click", () => {
  // Nuevo reto para el MISMO jugador
  renderCard();
  statusText.textContent = `Nuevo reto para ${currentPlayer}.`;
});

newPlayerBtn.addEventListener("click", () => {
  // Nuevo jugador (no repetido hasta que todos hayan salido)
  currentPlayer = getNextPlayer();
  renderCard();
  statusText.textContent = `Ahora le tocó a ${currentPlayer}.`;
});

// Reiniciar juego (volver a paso 1)
clearPlayersBtn.addEventListener("click", () => {
  players = [];
  remainingPlayers = [];
  currentPlayer = null;
  renderPlayers();

  playersPanel.classList.remove("hidden");
  cardPanel.classList.add("hidden");

  clearLevelSelection();
  levelSelector.classList.remove("hidden");
  cardWrapper.classList.add("hidden");
  cardActionsRow.classList.add("hidden");

  cardArea.innerHTML = "";
  cardArea.appendChild(cardPlaceholder);
  newChallengeBtn.disabled = true;
  newPlayerBtn.disabled = true;

  statusText.textContent = "Lista de jugadores reiniciada.";
});

// Render inicial
renderPlayers();
