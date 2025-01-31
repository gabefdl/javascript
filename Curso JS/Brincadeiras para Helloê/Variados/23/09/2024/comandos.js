var prog1 = window.document.getElementsByName('radprog1')
var prog2 = window.document.getElementsByName('radprog2')
var prog3 = window.document.getElementsByName('radprog3')
var fds = window.document.getElementsByName('raddia')
var animo = window.document.getElementById('escala')
var msg = window.document.getElementById('msg')
var data = ''
var progra1 = ''
var progra2 = ''
var progra3 = ''
var msg2 = window.document.getElementById('msg2')
var img = window.document.createElement('img')
function criar () {
    msg.innerHTML = `Dada à sua disposição que é de ${animo.value}`
    if (fds[0].checked) {
        data = "Sábado"
    } else {
        data = "Domingo"
    }

    if (prog1[0].checked) {
        progra1 = 'Jogar videogame'
    } else if (prog1[1].checked) {
        progra1 = 'Ler Livro'
    } else if (prog1[2].checked) {
        progra1 = 'Ver filme'
    }

    if (prog2[0].checked) {
        progra2 = 'Transar'
    } else if (prog2[1].checked) {
        progra2 = 'Tomar café'
    } else if (prog2[2].checked) {
        progra2 = 'Eu vou cozinhar'
    }

    if (prog3[0].checked) {
        progra3 = 'Ir na praça'
    } else if (prog3[1].checked) {
        progra3 = 'Dar uma volta'
    } else if (prog3[2].checked) {
        progra3 = 'Pedir comida'
    }

    msg.innerHTML = `Dada à sua disposição que é de <strong>${animo.value}</strong>, ` 
    msg.innerHTML += `no <strong>${data}</strong> iremos: <strong>${progra1}, ${progra2} e ${progra3}</strong>.`
    msg2.innerHTML = 'To ansioso desde agora. <strong>Te amo, minha preta</strong>!'
    img.setAttribute ('src', 'anivergugucomlo.png.png')
    msg2.appendChild(img)
}
