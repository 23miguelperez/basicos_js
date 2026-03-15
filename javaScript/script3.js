// Gestiona las notas de un estudiante y calcula estadisticas.
//
// Requisitos:
//   1. Crea un array con al menos 8 notas (0-10).
//   2. Calcula la media aritmetica usando .reduce().
//   3. Obten la nota maxima con Math.max(...array).
//   4. Obten la nota minima con Math.min(...array).
//   5. Cuenta cuantas notas son >= 5 usando .filter().
//   6. Clasifica el rendimiento segun la media:
//      Suspenso (<5), Aprobado (5-6.99),
//      Notable (7-8.99), Sobresaliente (9-10).
//   7. Muestra un resumen completo por consola.


const notas = [0,2,3,4,5,6,7,8,9,10]

let suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
let promedio = suma / notas.length;
let notaMax = Math.max(...notas)
let notaMin = Math.min(...notas)
let upTo5 = notas.filter((nota) => nota >=5 ).length

if (promedio < 5) {
    console.log("Suspenso");
} else if( promedio > 5 && promedio < 7){
    console.log("Aprobado");
} else if (promedio >=7 && promedio < 9){
    console.log("Notable");
} else if(promedio >=9 && promedio <= 10){
    console.log("Sobresaliente");
} else {
    console.log("Promedio no valido");
    
}

console.log(`El promedio de las notas es de: ${promedio}, la nota máxima de este alumno es de: ${notaMax}, su nota minima es de_ ${notaMin}, y la cantidad de asignatuas por encima de 5 es de: ${upTo5}`);