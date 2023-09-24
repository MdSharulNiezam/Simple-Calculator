// Adding comment on JS by PR to check update on Discord

const userInput = document.getElementById("userInput");

var expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
        userInput.value = eval(expression);
}

function erase(){
    expression = '';
    userInput.value = expression;
}