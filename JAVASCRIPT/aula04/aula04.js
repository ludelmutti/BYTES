/*let pais = 'Espanha'
console.log(`Vivendo em ${pais}`)
if(pais =='Brasil'){
    console.log(' Voce é Brasileiro')
}
else{
    console.log('Estrangeiro')
}  

---Exemplos de if e else no console----
*/



function Calcular(){
    let vel = document.querySelector ('input#vel')
    let res = document.querySelector('div#res')
    let valor = Number(vel.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${valor}Km/h</strong></p>
    `
    if (valor > 60) { 

        res.innerHTML += `<p> Voce esta multado por excesso de velocidade</p>`
       
    }

    
    
}