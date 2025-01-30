function showAlert(){
    alert("olá! isso é um alerta.");
}
function changeColor(){
    document.body.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
}
function showTime(){
    document.getElementById("clock").innerText = new Date().toLocaleTimeString();
}
function calculateSum(){
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    if (!isNaN(num1) && !isNaN(num2)) {
        alert("A soma é: " + (num1 + num2));
    } else {
        alert("Entrada inválida. Digite apenas números.");
    }
}