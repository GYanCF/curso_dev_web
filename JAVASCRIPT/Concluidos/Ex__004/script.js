function somar() {

    var frame_res = document.getElementById('resultado')

    var x = Number.parseInt(document.getElementById('num1').value);
    var y = Number.parseInt(document.getElementById('num2').value);
    var soma = x + y

    frame_res.innerHTML = `${soma}`
}