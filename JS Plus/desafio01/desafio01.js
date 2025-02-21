/* criar um botão que vai fazer com que ao ser clicado ele mude a cor de fundo, escreva 'clique' no console e desabilite a função de clique */

let cor = document.querySelector('.fundo')

let botao = document.querySelector('button')

function executar() {
    cor.classList.add('fundo2')
    console.log('clique')
    botao.removeEventListener('click', executar)
}

botao.addEventListener('click', executar)