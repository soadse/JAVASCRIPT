var nome, senha
function pegar(){
    nome = document.getElementById('nome').value
    senha = document.getElementById('senha').value
}
function mostra(){
    var saldo_3 = window.document.getElementById('saldo3')
    var n_mostra = window.document.getElementById('n-mostra')
    var mostra = window.document.getElementById('mostra')
    var dinheiro = window.document.getElementById('saldo')
    dinheiro.style.display = 'flex'
    n_mostra.style.display = 'none'
    mostra.style.display = 'flex'
    saldo_3.style.display = 'none'   
}
function nao_mostra(){
    var saldo_3 = window.document.getElementById('saldo3')
    var n_mostra = window.document.getElementById('n-mostra')
    var mostra = window.document.getElementById('mostra')
    var dinheiro = window.document.getElementById('saldo')
    dinheiro.style.display = 'none'
    n_mostra.style.display = 'flex'
    mostra.style.display = 'none' 
    saldo_3.style.display = 'block'  
}


function area_deposito(){
    var area_deposito = window.document.getElementById('deposito')
    var area_saque = window.document.getElementById('saquar')
    var area_pix = window.document.getElementById('pix')
    area_deposito.style.display = 'block'
    area_saque.style.display = 'none'
}
function deposito(){
    var envio = window.document.getElementById('envio')
    envio.style.boxShadow = '5px 5px 5px black'
    var valor = window.document.getElementById('valor')
    var deposito = window.document.getElementById('dep')
    var erro = window.document.getElementById('erro')
    erro.style.display = 'none'
    var num = Number(deposito.value) 
    valor.innerText = `${num}`
}



function area_saque(){
    var area_deposito = window.document.getElementById('deposito')
    var area_saque = window.document.getElementById('saquar')
    area_deposito.style.display = 'none'
    area_saque.style.display = 'block'
}
function saque(){
    var erro = window.document.getElementById('erro')
    var envio = window.document.getElementById('envio')
    envio.style.boxShadow = '5px 5px 5px black'
    var valor = window.document.getElementById('valor')
    var saque = window.document.getElementById('saq')
    var deposito = window.document.getElementById('dep')
    var saq = Number(saque.value)
    var dep = Number(deposito.value)
    var soma = dep - saq
    if(soma < 0){
        valor.innerText = `${dep}`
        erro.innerText = 'Limite Indisponível'
        erro.style.display = 'block'
    } else {
        erro.style.display = 'none'
        valor.innerText = `${soma}`
    }
}

function sair(){
    var envio = window.document.getElementById('envio')
    envio.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)'
}





