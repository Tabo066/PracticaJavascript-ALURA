
// lista de lenguajes de programación
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agregar elementos
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Función que muestra elementos
function mostrarLenguajes() {
    console.log(lenguagesDeProgramacion);
}

// Orden inverso.
function mostrarLenguajesInverso() {
    console.log([...lenguagesDeProgramacion].reverse());
}

// Promedio de elementos en una lista.
function calcularPromedio(lista) {
    if (lista.length === 0) return 0;
    let suma = lista.reduce((acc, num) => acc + num, 0);
    return suma / lista.length;
}

// Número más grande y más pequeño en una lista.
function mostrarMaxMin(lista) {
    if (lista.length === 0) return console.log("Lista vacía");
    console.log("Máximo:", Math.max(...lista));
    console.log("Mínimo:", Math.min(...lista));
}

// Suma de todos los elementos en una lista.
function sumarElementos(lista) {
    return lista.reduce((acc, num) => acc + num, 0);
}

// Posición de un elemento en la lista, o -1 si no existe.
function encontrarIndice(lista, elemento) {
    return lista.indexOf(elemento);
}

// Dos listas del mismo tamaño y suma de los elementos uno a unp.
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) return "Las listas deben tener el mismo tamaño";
    return lista1.map((num, i) => num + lista2[i]);
}

// Lista con el cuadrado de cada número.
function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}

// Pruebas
mostrarLenguajes();
mostrarLenguajesInverso();
console.log("Promedio:", calcularPromedio([10, 20, 30, 40, 50]));
mostrarMaxMin([3, 1, 7, 9, 2]);
console.log("Suma total:", sumarElementos([1, 2, 3, 4, 5]));
console.log("Índice de 'Python':", encontrarIndice(lenguagesDeProgramacion, 'Python'));
console.log("Suma de listas:", sumarListas([1, 2, 3], [4, 5, 6]));
console.log("Cuadrado de los números:", cuadradoLista([2, 4, 6]));

    document.getElementById('valorUsuario1').disabled = true;
    document.getElementById('valorUsuario2').disabled = true;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function calcularIMC() {
    document.getElementById('valorUsuario1').placeholder = 'Ingresa el peso';
    document.getElementById('valorUsuario2').placeholder = 'Ingresa la altura';
    document.getElementById('valorUsuario1').disabled = false;
    document.getElementById('valorUsuario2').disabled = false;
	let altura1 = parseInt(document.getElementById('valorUsuario1').value);
    let peso1 = parseInt(document.getElementById('valorUsuario2').value);
    if (isNaN(altura1)||isNaN(peso1)) {
        return asignarTextoElemento('h1',`Ingrese ambas medidas validas`);
    }
    let imc = peso1 / (altura1 * altura1);
    return asignarTextoElemento('h1',`El indice de masa corporal es ${imc}`);
}

function calcularFactorial() {
    document.getElementById('valorUsuario1').placeholder = 'Ingresa el numero factorial';
    document.getElementById('valorUsuario2').placeholder = '';
    document.getElementById('valorUsuario1').disabled = false;
    document.getElementById('valorUsuario2').disabled = true;
	let number = parseInt(document.getElementById('valorUsuario1').value);
    let resultado = 1;
    if (number <0 || isNaN(number)) {
        return asignarTextoElemento('h1',`Ingrese un numero valido`);
    }
    else if (number === 0) {
        return asignarTextoElemento('h1',`el factorial de 0 es 1`);
    }
    for (let i = 1; i <= number; i++) {
        resultado *= i;
    }
    return asignarTextoElemento('h1',`el factorial de ${number} es ${resultado}`);
}

function convertirDolaresADolaresReales() {
    document.getElementById('valorUsuario1').placeholder = 'Ingresa cantidad de USD';
    document.getElementById('valorUsuario2').placeholder = '';
    document.getElementById('valorUsuario1').disabled = false;
    document.getElementById('valorUsuario2').disabled = true;
    const cotizacionDolar = 4.80;
    let reales = parseInt(document.getElementById('valorUsuario1').value) * cotizacionDolar;
    if (reales < 0 || isNaN(reales)) {
        return asignarTextoElemento('h1',`Ingrese una cantidad de dolares valida`);
    }
    return asignarTextoElemento('h1',`esa cantidad de dolares son ${reales} reales`);
}

function calcularAreaYPerimetroRectangulo() {
    document.getElementById('valorUsuario1').placeholder = 'Ingresa altura del rectangulo';
    document.getElementById('valorUsuario2').placeholder = 'Ingresa anchura del rectangulo';
    document.getElementById('valorUsuario1').disabled = false;
    document.getElementById('valorUsuario2').disabled = false;
	let altura = parseInt(document.getElementById('valorUsuario1').value)
	let anchura = parseInt(document.getElementById('valorUsuario2').value)
    if (isNaN(altura)||isNaN(anchura)) {
        return asignarTextoElemento('h1',`Ingrese ambas medidas validas`);
    }
    const areaRectangulo = altura * anchura;
    const perimetroRectangulo = 2 * (altura + anchura);
	return asignarTextoElemento('h1',`Área del rectangulo: ${areaRectangulo} m², Perímetro del rectangulo: ${perimetroRectangulo} m`);
}

function calcularAreaYPerimetroCirculo() {
    document.getElementById('valorUsuario1').placeholder = 'Ingresa el radio del circulo';
    document.getElementById('valorUsuario2').placeholder = '';
    document.getElementById('valorUsuario1').disabled = false;
    document.getElementById('valorUsuario2').disabled = true;
    let radio = parseInt(document.getElementById('valorUsuario1').value)
    const pi = 3.14;
    if (radio < 0 || isNaN(radio)) {
        return asignarTextoElemento('h1',`Ingrese una medida valida`);
    }
    const areaCirculo = pi * Math.pow(radio, 2);
    const perimetroCirculo = 2 * pi * radio;
    return asignarTextoElemento('h1',`Área del circulo: ${areaCirculo} m², Perímetro del circulo: ${perimetroCirculo} m`);
}

function mostrarTablaMultiplicar() {
    document.getElementById('valorUsuario1').placeholder = 'Ingresa el numero a multiplicar';
    document.getElementById('valorUsuario2').placeholder = '';
    document.getElementById('valorUsuario1').disabled = false;
    document.getElementById('valorUsuario2').disabled = true;
    let numeroTabla = parseInt(document.getElementById('valorUsuario1').value)
    if (isNaN(numeroTabla)) {
        return asignarTextoElemento('h1',`Ingrese un numero valido`);
    }
    for (let i = 1; i <= 10; i++) {
        console.log(`${numeroTabla} x ${i} = ${numeroTabla * i}`);
        return asignarTextoElemento('h1',`${numeroTabla} x ${i} = ${numeroTabla * i}`);
    }
}

function reinicio() {
    asignarTextoElemento('h1',`Respuestas`);
    document.getElementById('valorUsuario1').value = ""
    document.getElementById('valorUsuario2').value = ""
    document.getElementById('valorUsuario1').placeholder = '';
    document.getElementById('valorUsuario2').placeholder = '';
    document.getElementById('valorUsuario1').disabled = true;
    document.getElementById('valorUsuario2').disabled = true;
}






