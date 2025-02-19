let pessoa = {
    // propriedades

    nome: "Gabriel",
    apelido: "Gabs", 
    idade: 21,
    estado_civil: "Casado",


    // métodos

    apresentar_nome: function() {
        return this.nome + " " + this.apelido
    }, 

    apresentar_estado: function() {
        return "O " + this.nome + " é muito bem " + this.estado_civil
    }, 

    hobbies: [
        'Amar a minha esposa',
        'beijar minha esposa'
    ]
}
/*
console.log(pessoa.apresentar_nome())
console.log(pessoa.nome)
console.log(pessoa['idade'])
console.log(pessoa.apresentar_estado())
console.table(pessoa.hobbies)



// aprsentar através de for let

for(let propriedade in pessoa) {
    console.log(pessoa[propriedade])
}
*/

// adicionar propriedades

pessoa.email = "gabe.hfdl@gmail.com"
// console.log(pessoa.email) 

console.log(pessoa)


// copiar dados de um objeto para outro (podendo alterar valores)
let nova_pessoa = Object.assign({}, pessoa)

// ou let nova_pessoa = {...pessoa}
nova_pessoa.nome = "Helloê"
nova_pessoa.apelido = "Lolô"
nova_pessoa.idade = 23
nova_pessoa.email = "helloesobral@gmail.com"

console.log(nova_pessoa)