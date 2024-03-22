function clicar(){
    var numero = window.document.getElementById('num')
    var num = Number(numero.value)
    var campo = window.document.getElementById('res')
    campo.style.display = 'block'
    if(num == 0){
        campo.innerText = 'Digite um número válido'
    } else {
        campo.innerText = ''
        for(c = 1; c <= 10; c++ ){   
            var item = document.createElement('option')
            item.innerHTML += `${c} x ${num} = ${c*num} <br>`  
            campo.appendChild(item) 
        }
    }
}
