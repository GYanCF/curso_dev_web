var x = Number.parseInt(window.prompt("Digite um valor"))
var display = document.getElementById('displayer')

function calcular() {
    var dobro = x * 2
    var metade = x / 2

    display.innerHTML = `O dobro é: ${dobro} e a metade é: ${metade}`
}