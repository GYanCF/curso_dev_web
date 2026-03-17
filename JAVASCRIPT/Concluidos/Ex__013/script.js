function generate() {
    var numero = document.getElementById('num').value;
    console.log(numero)

    for (x = 1; x <= 10; x++) {
        for (y = 0; y <= 10; y++){
            resultado = numero * x
            console.log(`${numero} x ${x} = ${resultado} `)
        }
    }
}