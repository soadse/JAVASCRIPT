function clicar(){
    var inicio = window.document.getElementById('inicioo')
    var i = Number(inicio.value)

    var fim = window.document.getElementById('fimm')
    var f = Number(fim.value)

    var passo = window.document.getElementById('passoo')
    var p = Number(passo.value)

    var resposta = window.document.getElementById('resposta')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        resposta.innerHTML = 'Impossivel contar!'
    } else {
        resposta.innerHTML = 'Contando: <br>'
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            // contagem crescente
            for(var c = i; c <= f; c += p){
                resposta.innerText += `${c} \u{1f449}`
            }
        } else {
            // contagem regressiva
            for(var c = i; c >= f; c -= p){
                resposta.innerText += `${c} \u{1f449}`
            }
        }
        resposta.innerText += `Fim da Contagem`
    }
}
