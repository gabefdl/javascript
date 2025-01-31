var nasc = window.document.getElementById('Idade')
var data = new Date()
var anual = data.getFullYear()
var msg = window.document.getElementById('msg')
function verificar () {
    if (nasc.value.length == 0 || nasc.value > anual) {
        window.alert ('[ERRO]')
    }
    var fsex = document.getElementsByName('radsex')
    var Idade = anual - nasc.value
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero =' Homem'
        img.setAttribute('src', 'noite.png')
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            img.setAttribute ('src', 'manhâ.png')
        }
        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${gênero} com ${Idade} anos`
        msg.appendChild(img)
     
}
