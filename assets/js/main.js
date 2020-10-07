
const input = document.getElementById('input');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const eliminar = document.getElementById('eliminar');
const cero = document.getElementById('cero');
const sumar = document.getElementById('suma');
const span = document.getElementById('span');
const igual = document.getElementById('igual');


let numA = 0;
let resultado = 0;
let operacion = '';
let numero = '';
input.value = 0;

one.addEventListener('click', () =>{
    numero = numero + '1';
    input.value = numero;
});
two.addEventListener('click', () =>{
    numero = numero + '2';
    input.value = numero;
});
three.addEventListener('click', () =>{
    numero = numero + '3';
    input.value = numero;
});
four.addEventListener('click', () =>{
    numero = numero + '4';
    input.value = numero;
});
five.addEventListener('click', () =>{
    numero = numero + '5';
    input.value = numero;
});
six.addEventListener('click', () =>{
    numero = numero + '6';
    input.value = numero;
});
seven.addEventListener('click', () =>{
    numero = numero + '7';
    input.value = numero;
});
eight.addEventListener('click', () =>{
    numero = numero + '8';
    input.value = numero;
});
nine.addEventListener('click', () =>{
    numero = numero + '9';
    input.value = numero;
});
cero.addEventListener('click', () =>{
    numero = numero + '0';
    input.value = numero;
});


// eliminar elementos 
eliminar.addEventListener('click', () =>{
    input.value = 0;
    numero = '';
    span.innerHTML = 0;
});

// sumar numeros
sumar.addEventListener('click', () =>{
    if(numero === ''){
        span.innerHTML = resultado;
    }else {
        span.innerHTML = numero;
    numA = numero;
    operacion = '+';
    input.value = 0;
    numero = '';
    }
});

// resultado 
igual.addEventListener('click', ()=>{
    resultado = numA + operacion + numero;
    span.innerHTML = eval(resultado);

    input.value = 0;
    numero = '';
});


