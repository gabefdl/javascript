let analise = window.document.getElementById('anasel')
var vetor = []
var num = window.document.getElementById('txtn')
let res = window.document.querySelector('div#res')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function Add () {
    if (isNumero(num.value) && !inLista(num.value, vetor)) {
        if (vetor.indexOf(num.value) == -1) {
            vetor.push(Number(num.value))
            var item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            analise.appendChild(item)
            res.innerHTML = ''
        } else {
            window.alert('Valor já adicionado')
        }
        
    } else {
        window.alert('[ERRO] Valor inválido ou já inserido')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    var media = 0
    var maior = vetor[0]
    var menor = 100
    var soma = 0
    for ( var c in vetor) {
         soma += vetor[c]
         if (vetor [c] > maior) {
            maior = vetor[c]
         } 
         if (vetor[c] < menor) {
            menor = vetor[c]
         }

    }
    media = soma / vetor.length
    res.innerHTML = `<p> Ao todo, temos ${vetor.length} números cadastrados </p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
    res.innerHTML += `<p> Somando todos os valores, temos ${soma} </p>`
    res.innerHTML += `<p> A média dos valores digitados é ${media} </p>`
    }