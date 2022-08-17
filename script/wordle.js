const palavrasValidas = ['arroz', 'amora', 'teste']

const palavraDoDia = 'arroz'

let linha = 1

let entrada = []


const ouvinteDeTeclas = (event) => {

    let char = event.key.toUpperCase();
    let alfabeto = [
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
        'R','S','T','U','V','W','X','Y','Z', 'ENTER', 'BACKSPACE'];

    if (!alfabeto.includes(char)) {
        console.log('tecla inválida', char)
        return null;
    }

    if (char == 'ENTER') {
        validarEntrada()
        linha += 1
        return;
    }

    if (char == 'BACKSPACE'){
        entrada.pop()
        console.log(entrada)
        return;
    }

    entrada.push(char)
    console.log(entrada)

    exibeLetra(char)
}

function exibeLetra(letra) {
    let elId = `l${linha}c${entrada.length}`
    const el = document.getElementById(elId)
    el.textContent = letra
}

function validarEntrada() {
    console.log('validar se ' + entrada + ' é igual ' + palavraDoDia)
}


document.body.addEventListener('keydown', ouvinteDeTeclas)
