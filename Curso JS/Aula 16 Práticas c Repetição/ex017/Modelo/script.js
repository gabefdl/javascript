var res = window.document.getElementById('res')
var inic = window.document.getElementById ('inic')
var fim = window.document.getElementById ('Fim')
var salto = window.document.getElementById('salto')
function contar () {
   res.innerHTML = 'Contando...'
    if (inic.value.length == 0 || fim.value.length == 0 || salto.value.length == 0) {
        window.alert ('está faltando dados')
    } else if (inic.value < fim.value) {
        var i = Number(inic.value)
        var f = Number(fim.value)
        var s = Number(salto.value)
        for (var c = i; c <= f; c = c + s) {
            res.innerHTML += `   ${c}   \u{1F595}  `
        }
    } else {
        var i = Number(inic.value)
        var f = Number(fim.value)
        var s = Number(salto.value)
         for (var c = i; c >= f; c = c - s) {
            res.innerHTML += `   ${c} \u{1F595}   `
         }
    }
}