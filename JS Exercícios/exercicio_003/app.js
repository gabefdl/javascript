/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */
let valor = 0
let cont = document.querySelector('#valor')

document.querySelector('#btn_incremento').addEventListener('click', () => {
    cont.textContent = ++valor
    if (valor >= 1) {
        cont.style.color = 'green'
    } else if (valor == 0) {
        cont.style.color = 'white'
    }
})

document.querySelector('#btn_decremento').addEventListener('click', () => {
    cont.textContent = --valor
    if (valor <= -1) {
        cont.style.color = 'red'
    } else if (valor == 0) {
        cont.style.color = 'white'
    }
})


