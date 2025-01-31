var oi = window.document.getElementById('oi')
function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `A hora atual é ${hora} horas ` 
if (hora >= 0 && hora < 12) {
    img.src = 'manhã.png'
    oi.style.background = 'blue'
} else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png'
    oi.style.background = 'orange'
} else {
    img.src = 'noite.png'
    oi.style.background = 'black'
}
}