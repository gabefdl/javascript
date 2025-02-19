let e = document.documentElement
console.log(e)

// pegar valores atribuidos a elementos de CSS
let teste = document.querySelector("p")
const estilos = window.getComputedStyle(teste)
if (estilos.getPropertyValue('background-color') == 'rgb(211, 211, 211)') {
    teste.style.backgroundColor = 'green'
}