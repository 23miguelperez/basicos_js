// ***********************************************************************
// EJERCICIO 5 - Arrow Functions y Callbacks
// Tema: Funciones (declaracion, arrow, callbacks)
// **
//
// Practica diferentes formas de declarar funciones y el
// concepto de callbacks.
//
// Requisitos:
//   1. Crea una funcion clasica "sumar(a, b)" que retorne
//      la suma.
//   2. Crea la misma como arrow function:
//      const sumarArrow = (a, b) => a + b;
//   3. Crea una funcion "operar(a, b, callback)" que reciba
//      dos numeros y una funcion, y devuelva el resultado
//      de ejecutar callback(a, b).
//   4. Crea arrow functions para: restar, multiplicar, dividir.
//   5. Usa operar() con cada una de las operaciones.
//   6. Crea "aplicarATodas(a, b, operaciones)" donde
//      operaciones es un array de funciones.
//      Recorre el array y muestra el resultado de cada una.
//   7. Muestra todos los resultados por consola.
//
// Pista: Una funcion es un valor mas en JS. Puedes pasarla
//        como argumento, guardarla en un array, etc.
// ***************************************************************************

// Escribe tu JavaScript aqui (para incluirlo en <script>):

function sumar(a, b) {
    return a + b;
}

function operar(a, b, callback) {
    return callback(a, b);
}