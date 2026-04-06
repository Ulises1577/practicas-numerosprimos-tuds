function esPrimo(numero) {
    //Numeros negativos e iguales a 1 no son primos
    if (numero <= 1) return false;

      // El 2 es el único número primo par
    if (numero === 2) return true;

    //Si es par y mayor a 2, el numero no es primo
    if (numero % 2 === 0) return false;

    // Verificamos divisores hasta la raíz cuadrada para mayor eficiencia
    const raiz = Math.sqrt(numero);
    for (let i = 3; i <= raiz; i += 2) {
    if (numero % i === 0) {
    return false;
        }
    }

    return true;
}

const numerosPrimos = [];
const limite = 100;

for (let i = 1; i <= limite; i++) {
    if (esPrimo(i)) {
    numerosPrimos.push(i);
    }
}

console.log("Arreglo de primos:", numerosPrimos);
