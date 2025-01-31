let valores = [5, 2, 7, 9, 1]
valores.sort()
/*console.log(valores)
console.log(` Existem ${valores.length} elementos`)
console.log(`A ordem crescente dos números é: ${valores.sort()}`)*/

/*for(var c = 0; c < valores.length; c++) {
    console.log(valores[c])
}*/

for (var c in valores) {
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}