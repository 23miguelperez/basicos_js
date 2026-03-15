// **
// EJERCICIO 6 - Contador Interactivo
// Tema: Eventos y DOM
// **
//
// Crea una pagina HTML con un contador que el usuario pueda
// incrementar, decrementar y resetear.
//
// Requisitos:
//   1. Crea un archivo .html con este HTML base:
//
//      <div id="contador-app">
//        <h1 id="numero">0</h1>
//        <button id="btn-dec">-</button>
//        <button id="btn-reset">Reset</button>
//        <button id="btn-inc">+</button>
//      </div>
//
//   2. Selecciona los elementos con getElementById().
//   3. Anade addEventListener('click', ...) a cada boton.
//   4. El contador NO debe bajar de 0.
//   5. Si el valor es 0 -> color rojo. Si > 0 -> color verde.
//   6. Usa textContent para actualizar el numero.
//   7. Usa classList.add / classList.remove para los colores.
//
// Pista: Guarda el valor en una variable JS. Cada clic
//        actualiza la variable Y el DOM.
// **

// Escribe tu JavaScript aqui (para incluirlo en <script>):
// let contador = 0;

getElementbyId("btn-inc").addEventListener("click", () => {
    contador++;
    actualizarContador();
});

getElementbyId("btn-dec").addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        actualizarContador();
    }
});

getElementbyId("btn-reset").addEventListener("click", () => {
    contador = 0;
    actualizarContador();
});

function actualizarContador() {
    const numeroElement = getElementbyId("numero");
    numeroElement.textContent = contador;
    if (contador === 0) {
        numeroElement.classList.add("rojo");
        numeroElement.classList.remove("verde");
    } else {
        numeroElement.classList.add("verde");
        numeroElement.classList.remove("rojo");
    }
}

