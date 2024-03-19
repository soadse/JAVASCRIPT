var data = window.document.getElementById('data')
var agora = new Date()
var dia = agora.getDate()
var mes = agora.getMonth()
switch(mes)

data.innerText = (`Hoje é dia ${mes} de `)