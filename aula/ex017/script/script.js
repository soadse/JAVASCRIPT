function mostra(){
    var nao_mostra = window.document.getElementById('img-nao-mostra')
    var mostra = window.document.getElementById('img-mostra')
    var dinheiro = window.document.getElementById('saldo-conta')
    dinheiro.style.display = 'flex'
    nao_mostra.style.display = 'none'
    mostra.style.display = 'flex'   
}
function nao_mostra(){
    var nao_mostra = window.document.getElementById('img-nao-mostra')
    var mostra = window.document.getElementById('img-mostra')
    var dinheiro = window.document.getElementById('saldo-conta')
    dinheiro.style.display = 'none'
    nao_mostra.style.display = 'flex'
    mostra.style.display = 'none'   
}