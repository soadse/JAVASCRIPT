function clicar(){
    var numero = window.document.getElementById('num')
    var num = Number(numero.value)
    var campo2 = window.document.getElementById('res2')
    var campo = window.document.getElementById('res')
    if(num == 0){
        campo.innerText = 'Digite um número válido'
        campo2.innerText = ''
    } else {
        campo.innerText = ''
        campo2.style.fontWeight = 'bolder'
        campo2.innerText = `Tabuada do ${num}`
        for(c = 1; c <= 10; c++ ){  
            campo.innerHTML += `${c} x ${num} = ${c*num} <br>`  
        }
    }
}
