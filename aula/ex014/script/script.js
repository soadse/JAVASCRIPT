var agora = new Date()
var mes = agora.getMonth()
var dia_mes = agora.getDate()
var dia_sem = agora.getDay()
var ano = agora.getFullYear()
var horas = agora.getHours()
var minuto = agora.getMinutes()
var segundos = agora.getSeconds()
var mês = ''
var dia_semana = ''
switch(mes) {
    case 0 :
        var mês = 'Janeiro'
        break

    case 1 :
        var mês = 'Fevereiro'
        break

    case 2 :
        var mês = 'Março'
        break

    case 3 :
        var mês = 'Abril'
        break

    case 4 :
        var mês = 'Maio'
        break

    case 5 :
        var mês = 'Junho'
        break

    case 6 :
        var mês = 'Julho'
        break

    case 7 :
        var mês = 'Agosto'
        break

    case 8 :
        var mês = 'Setembro'
        break

    case 9 :
        var mês = 'Outubro'
        break

    case 10 :
        var mês = 'Novembro'
        break

    case 11 :
        var mês = 'Dezembro'
        break

    default:
        break
}
switch(dia_sem){
    case 0:
        dia_semana = 'Domingo'
        break

    case 1:
        dia_semana = 'Segunda - Feira'
        break

    case 2:
        dia_semana = 'Terça  - Feira'
        break

    case 3:
        dia_semana = 'Quarta - Feira'
        break

    case 4:
        dia_semana = 'Quinta  - Feira'
        break

    case 5:
        dia_semana = 'Sexta  - Feira'
        break

    case 6:
        dia_semana = 'Sábado'
        break   
}
var data = window.document.getElementById('data')
var hora = window.document.getElementById('hora')
var dia_seman = window.document.getElementById('dia_semana')
data.innerText = (`${dia_mes} de ${mês} de ${ano}`)
hora.innerText = (`${horas}:${minuto}`)
dia_seman.innerText = (`${dia_semana}`)