// function na var
let num = function (n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
console.log(num(5))


// arrow function
var teste = window.prompt('você ama a helloê')
console.log(teste)
let amor = (teste) => {
    if (teste.includes("sim")) {
        return 'que lindo eu sempre soube'
    }
}
console.log(amor(teste))