const mensajesCoquetos = [
    "Eres la flor más bonita de mi jardín.",
    "Cada pétalo es un poema para ti.",
    "Tu sonrisa ilumina mi día.",
    "Te regalo una flor, pero tú eres un ramo completo.",
    "La naturaleza no puede competir contigo.",
    "Solo tú puedes hacer que una flor parezca común.",
    "Tu belleza eclipsa cualquier flor.",
    "Eres el aroma que alegra mi vida.",
    "Si las flores hablaran, te elegirían como reina.",
    "Con cada flor que tomas, me robas el corazón."
  ];
  
  function sacarFlor(florId) {
    const flor = document.getElementById(`flor${florId}`);
    if (flor) {
      flor.style.display = 'none'; // Ocultar la flor
      const mensaje = mensajesCoquetos[florId - 1];
      document.getElementById('mensaje').textContent = mensaje;
    }
  }
  