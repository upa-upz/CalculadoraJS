const container = document.getElementById('container');
const input = document.getElementById('input');

let operationStatus = false
let num1;
let typeOperation;

input.textContent = '0';

const calculator = () => {
    if(!container) return
    container.addEventListener('click', e =>{

        const t = e.target;
        const d = t.dataset;
        
        // detectar si se pulso un numero 
        if(d.number) writeScreen(d.number)

        // detectar si se pulso una operacion matematico
        if(d.math) getOperation(t,d.math)

        // detectar si se pulso otra operacion
        if(d.operation) runOperation(d.operation)
    })
}

const writeScreen = number => {
    input.textContent === '0' || operationStatus === true
    ? input.textContent = number
    : number === '.' && !input.textContent.includes('.')
        ? input.textContent += number 
        : number !== '.'  
            ? input.textContent += number
            : null

    operationStatus = false
}

const getOperation = (element, operation) => {
    operationStatus = true
    num1 = Number(input.textContent)
    typeOperation = operation
    input.textContent = element.textContent 
}

const runOperation = operation  => {
    
    const getResult = (num1, typeOperation) => {
        const num2 = Number(input.textContent)
        let result
        switch (typeOperation) {
            case 'add':
                result = num1 + num2
                break;
            case 'minus':
                result = num1 - num2
                break;
            case 'multiply':
                result = num1 * num2 
                break;
            case 'divide': 
                result = num1 / num2
                break;
            default:
                break;
        }
        
        result === Infinity
            ? input.textContent = 'Error'
            : input.textContent = result
    }

    operation === 'clear'
        ? input.textContent = 0
        : getResult(num1, typeOperation)   

    operationStatus = true     
}

calculator();