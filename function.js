// function calculator
function add(num1, num2){
    return num1 + num2
}

function multiply(num1, num2){
    return num1 * num2
}

function devide(num1, num2){
    return num1 / num2
}


function calculator(num1, num2, operator){
    return operator(num1, num2)
}


console.log(calculator(100,222,multiply))