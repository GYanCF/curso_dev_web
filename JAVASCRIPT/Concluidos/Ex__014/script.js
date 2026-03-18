function count(){
    var inicio = document.getElementById("num_i").value;
    var fim = document.getElementById("num_f").value;
    var passos = document.getElementById("passos").value
    var display = document.getElementById("displayer")
1
    if (inicio == "") {
        display.innerHTML = `O valor inicial deve ser informado`
    }
    else {
        if (fim == "") {
            display.innerHTML = `O valor final deve ser informado`
        }
        else {
            if (passos =="") {
                display.innerHTML = `Os passos devem ser informado`
            }
            else {
                if (Number.parseInt(inicio) < Number.parseInt(fim)) {
                    var x = Number.parseInt(inicio)
                    while (x <= Number.parseInt(fim)){
                    if (x == Number.parseInt(fim)) {
                        display.innerHTML += `${x}`
                        display.innerHTML += ` &#x1F6A9; `
                    }
                    else {
                        if (x == Number.parseInt(inicio)) {
                            display.innerHTML = `${x}`
                            display.innerHTML += ` &#10145; `
                        }
                        else {
                            display.innerHTML += `${x}`
                            display.innerHTML += ` &#10145; `
                        }
                        
                    }
                    x = x + Number.parseInt(passos)
                }
                }
                else {   
                    var x = Number.parseInt(inicio)
                    while (x >= fim){
                        if (x == fim) {
                            display.innerHTML += `${x}`
                            display.innerHTML += ` &#x1F6A9; `
                        }
                        else {
                            if (x == Number.parseInt(inicio)) {
                                display.innerHTML = `${x}`
                                display.innerHTML += ` &#10145; `
                            }
                            else {
                                display.innerHTML += `${x}`
                                display.innerHTML += ` &#10145; `
                            }
                            
                        }
                        x = x - passos
                }
                }
            }
        }
    }
}