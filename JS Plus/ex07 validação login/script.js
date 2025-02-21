document.querySelector('input[name="usuario"]').addEventListener('keyup', () => {
    if (document.querySelector('input[name="usuario"] + span') !== null) {
        document.querySelector('input[name="usuario"] + span').remove()
    }
})

document.querySelector('input[name="senha"]').addEventListener('keyup', () => {
    if (document.querySelector('input[name="senha"] + span') !== null) {
        document.querySelector('input[name="senha"] + span').remove()
    }
})





document.formulario_login.addEventListener('submit', (event) => {
    let usuario = event.target.usuario.value
    let senha = event.target.senha.value
    let submit = true

    if (usuario === "") {
        submit = false

        let tmp = document.querySelector('input[name="usuario"]')
        tmp.insertAdjacentHTML('afterend', '<span class="error">Usuário obrigatório</span>')
    }

    if (senha === "") {
        submit = false

        let tmp = document.querySelector('input[name="senha"]')
        tmp.insertAdjacentHTML('afterend', '<span class="error">Senha obrigatória</span>')
    }

    if (!submit) {
        event.preventDefault()

       /*setTimeout(() => {
            document.querySelectorAll('.error').forEach(e => e.remove())
        }, 2000)*/ 
    }
})





