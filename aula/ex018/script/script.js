var num = [1, 4, 6, 7, 3, 9]
let pos = num.indexOf(9)
console.log(`O vetor tem ${num.length}`)
console.log(`O valor 9 está na posição ${pos}`)

/*for(pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for(var posi in num){
    console.log(`A posição ${posi} tem o valor ${num[posi]}`)
}