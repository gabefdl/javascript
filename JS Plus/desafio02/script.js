/*document.querySelector('#bt-vermelho').addEventListener('click', (event) => {
    deletar()
    for (let i = 0; i <= 250; i+=10) {
        let tmp = document.createElement('div')
        tmp.classList.add('caixa')
        tmp.style.backgroundColor = `rgb(${i}, 0, 0)`
        document.body.appendChild(tmp)
    }
})
 
document.querySelector('#bt-verde').addEventListener('click', (event) => {
    deletar()
    for (let i = 0; i <= 250; i+=10) {
        let tmp = document.createElement('div')
        tmp.classList.add('caixa')
        tmp.style.backgroundColor = `rgb(0, ${i}, 0)`
        document.body.appendChild(tmp)
    }
})

document.querySelector('#bt-azul').addEventListener('click', (event) => {
    deletar()
    for (let i = 0; i <= 250; i+=10) {
        let tmp = document.createElement('div')
        tmp.classList.add('caixa')
        tmp.style.backgroundColor = `rgb(0, 0, ${i})`
        document.body.appendChild(tmp)
    }
})  */

function deletar() {
    let elementos = document.querySelectorAll('.caixa')
    elementos.forEach(e => e.remove())
}



document.querySelectorAll("button").forEach((button) => {
    button.addEventListener('click', (event) => {
        deletar()
        for (let i = 0; i <= 250; i+=10) {
            let tmp = document.createElement('div')
            tmp.classList.add('caixa')
            let id = event.target.id
            if (id === 'bt-vermelho') {
                tmp.style.backgroundColor = `rgb(${i}, 0, 0)`
            } else if(id === 'bt-verde') {
                tmp.style.backgroundColor = `rgb(0, ${i}, 0)`
            } else {
                tmp.style.backgroundColor = `rgb(0, 0, ${i})`
            }
            document.body.appendChild(tmp)
        }
    })
})