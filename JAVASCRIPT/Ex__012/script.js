function btn_verificar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    
    var displayer = document.getElementById('displayer')

    /* Descobrir o maior valor entre os 3 numeros inseridos!
    num1 num2 num3 */
    
    var maior = 0;
    
    if (num1 > maior) {
        maior = num1
    }
    if (num2 > maior) {
        maior = num2
    }
    if (num3 > maior)
        maior = num3

    displayer.innerHTML = `O maior valor é: ${maior}`

}