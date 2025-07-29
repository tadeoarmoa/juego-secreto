// Primeros pasos y apuntes en JS y HTML :)

/*
src es source en HTML
let titulo = document.querySelector('h1');
querySelector conecta los elementos del HTML con el javascript
es el puente entre html y js
titulo.innerHTML = 'Juego del numero secreto'; // innerHTML es para meter algo en el html
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10'
DOM = document object model
*/

let numeroSecreto = 0; // como ya declaramos aca no hace falta volver a declarar en la funcion
let intentos = 0;
let listaNumerosSortedos = [];
let numeroMaximo = 10;
// declaramos la funcion
// no importa en donde se ponga la funcion
// funciona siempre (Hoisting)
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //por buena practica nomas se pone
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //para buscar por id
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero! en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
                asignarTextoElemento('p', 'El numero secreto es mayor');
            }
        intentos++;
        limpiarCaja();
    }
    return; //por buena practica
}
 
function limpiarCaja(){
    document.querySelector('#valorUsuario').value=''; // el # busca por id
    
}
    


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numero
    if(listaNumerosSortedos.length === numeroMaximo){
        return asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }
    // sin el numero generado esta incluido en la lista
    else{
        if(listaNumerosSortedos.includes(numeroGenerado)){ //includes recorre la lista para saber si el numero en cuestion ya esta incluido en la lista
        return generarNumeroSecreto(); //recursividad para que genere a otro numero
    }       else {
            listaNumerosSortedos.push(numeroGenerado); //push para meter el numero generado en la lista
            return numeroGenerado;
    }
    // retornar = devolver un valor
}
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!!!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de pedir numeros en intervalo
    //generar el numero aleatorio de nuevo
    //reiniciar numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}
    condicionesIniciales();
asignarTextoElemento('h1', 'Juego del numero secreto!!!');
asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);

/*
arreglos
let numerosSorteados = []; //con corchetes se ponen listas o vectores
puede ser numeros, textos, booleanos, incluso combinadas
numerosSorteados.push(5); se agrega 5
numerosSorteados.push(8); se agrega el 8
console.log(numerosSorteados)
(2) [5, 8] // sale cantidad de elementos y luego cuales son
console.log(numerosSorteados.length); // para saber dimension
indice o posicion del elemento es asi: (el primer elemento es cero)
todos los arreglos inician en la posicion 0
console.log(numerosSorteados[0]); para mostrar el primer elemento, o sea 5;
numerosSorteados.push(3); // se agrega 3
console.log(numerosSorteados[numerosSorteados.length-1]); // para ubicar el ultimo elemento de la lista
.pop elimina el ultimo elemento de un lista
*/


//Gracias :)
