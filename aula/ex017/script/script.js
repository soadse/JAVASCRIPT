var nome, senha
function pegar(){
    nome = document.getElementById('nome').value
    senha = document.getElementById('senha').value
}
function mostra(){
    var n_mostra = window.document.getElementById('n-mostra')
    var mostra = window.document.getElementById('mostra')
    var dinheiro = window.document.getElementById('saldo')
    dinheiro.style.display = 'flex'
    n_mostra.style.display = 'none'
    mostra.style.display = 'flex'   
}
function nao_mostra(){
    var n_mostra = window.document.getElementById('n-mostra')
    var mostra = window.document.getElementById('mostra')
    var dinheiro = window.document.getElementById('saldo')
    dinheiro.style.display = 'none'
    n_mostra.style.display = 'flex'
    mostra.style.display = 'none'   
}

function area_deposito(){
    var area_deposito = window.document.getElementBycl('deposito')
    var areas = window.document.getElementById('saque')
    area_deposito.style.background = 'red'
    areas.style.display = 'none'
}
function depositar(){
    var envio = window.document.getElementById('envio')
    envio.style.boxShadow = '5px 5px 5px black'
    var valor = window.document.getElementById('valor')
    var deposito = window.document.getElementById('dep')
    var num = Number(deposito.value) 
    valor.innerText = `${num}`
}

function area_saque(){
    var area_saque = window.document.getElementById('saque')
    area_saque.style.display = 'block'
    var area = window.document.getElementById('deposito')
    area.style.display = 'none'
}










function sair(){
    var envio = window.document.getElementById('envio')
    envio.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)'
}