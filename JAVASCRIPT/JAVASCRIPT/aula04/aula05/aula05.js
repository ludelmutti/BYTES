/*let idade = 13

if(idade < 18){

    console.log('Menor de idade')
}else{
    console.log('Maior')
}
--------------------------------------------------------------------------------
*/

/*
let agora = new Date() // Pegar a hora do sistema atual
let hora = agora.getHours() // usando essa função ele gera as horas automatico
console.log(`Agora sao ${hora} horas`)
if(hora< 12)
{
    console.log('Bom dia')
}else if (hora <= 18){
   console.log('Boa tarde') 
} else{
    console.log('Boa noite')

}

---------------------------Condiçao alinhada------------------------------------
*/

let agora= new Date()
let diaSem = agora.getDay() // dia da semana do sistema, automatico

switch(diaSem){
    case 0:
console.log('domingo')
    break

    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
         break     
     
     case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break

    case 5:
        console.log('sexta')
        break

     case 6:
         console.log('sabado')
         break

default:
    console.log('Erro - Dia invalido')
break
}