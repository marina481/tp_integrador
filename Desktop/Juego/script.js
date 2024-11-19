// Generar número aleatorio entre 1 y 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Obtener los elementos del DOM
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');

// Función que se ejecuta cuando el usuario envía un número
submitBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    // Validar que el número esté entre 1 y 10
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        setMessage('Por favor ingresa un número entre 1 y 10', 'red');
    } else {
        // Comparar con el número aleatorio
        if (userGuess === randomNumber) {
            setMessage(`¡Correcto! El número era ${randomNumber}`, 'green');
            showResetButton();
        } else if (userGuess < randomNumber) {
            setMessage('El número es mayor', 'red');
        } else {
            setMessage('El número es menor', 'red');
        }
    }
});

// Función para reiniciar el juego
resetBtn.addEventListener('click', () => {
    guessInput.value = ''; // Limpiar el campo de entrada
    setMessage('', ''); // Limpiar el mensaje
    randomNumber = Math.floor(Math.random() * 10) + 1; // Generar nuevo número aleatorio
    hideResetButton(); // Ocultar el botón de reinicio
});

// Mostrar mensaje con color según el resultado
function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

// Mostrar el botón de reinicio y deshabilitar el botón de enviar
function showResetButton() {
    resetBtn.style.display = 'inline-block';
    submitBtn.disabled = true;
}

// Ocultar el botón de reinicio y habilitar el botón de enviar
function hideResetButton() {
    resetBtn.style.display = 'none';
    submitBtn.disabled = false;
}
