
function carregar(){
 
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()

   
    msg.innerHTML =`Agora são ${hora} horas !!`

  if(hora >= 0 && hora < 12) {
    img.src='manha.png'
    document.body.style.background= '#B8AA98'
   
    }else if( hora >=12 && hora<= 18 ){
    img.src='tarde.png'
    document.body.style.background= '#DD814D'

    }else{
    img.src='noite.png'
    document.body.style.background= '#325156'
    }

}


