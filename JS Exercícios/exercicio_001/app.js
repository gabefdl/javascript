/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

    ---------------------------------------------------------------------------- */
let cont = 0
let h1_valor = document.querySelector('#valor')

document.querySelector('#btn_incremento').addEventListener('click', (event) => {
    if (cont <= 9) {
    h1_valor.textContent = ++cont
    }
})

document.querySelector('#btn_decremento').addEventListener('click', (event) => {
    if (cont >= -9) {
    h1_valor.textContent = --cont
    }
})