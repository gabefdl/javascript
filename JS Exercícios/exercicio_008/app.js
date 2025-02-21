/* ----------------------------------------------------------------------------

Exercício: 008
Enunciado:
    Existem 5 botões, cada um com uma cor diferente do Bootstrap.
    A ideia é criar o código javascript que permita que o clique em cada
    um dos botões altere o texto acima para a cor de fundo do botão.
---------------------------------------------------------------------------- */
let text = document.querySelector('h3')
document.querySelector('#btn1').addEventListener('click', (event) => {
    text.style.color = 'blue'
})

document.querySelector('#btn2').addEventListener('click', (event) => {
    text.style.color = 'pink'
})

document.querySelector('#btn3').addEventListener('click', (event) => {
    text.style.color = 'green'
})

document.querySelector('#btn4').addEventListener('click', (event) => {
    text.style.color = 'red'
})

document.querySelector('#btn5').addEventListener('click', (event) => {
    text.style.color = 'orange'
})