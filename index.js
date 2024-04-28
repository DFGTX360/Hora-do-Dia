function carregar() {
  let msg = document.getElementById('msg');
  let img = document.getElementById('img');
  let date = new Date();
  // let hora = 22
  let hora = date.getHours()
  msg.innerHTML = "Agora são " + hora + " horas."

  if(hora >= 0 && hora < 12){
    img.scr = './Fotos/Manha.png'
    document.body.style.background = "#eed4b6"
  }else if(hora >= 12 && hora < 18){
    img.src = './Fotos/tarde.png'
     document.body.style.background = '#843e15'
  }else{
    img.src = './Fotos/noite.png'
  }
}