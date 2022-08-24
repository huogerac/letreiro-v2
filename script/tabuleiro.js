const tabuleiro = {
    l1: {
        c1: document.getElementById('l1c1'),
        c2: document.getElementById('l1c2'),
        c3: document.getElementById('l1c3'),
        c4: document.getElementById('l1c4'),
        c5: document.getElementById('l1c5'),
    },
    l2: {
        c1: document.getElementById('l2c1'),
        c2: document.getElementById('l2c2'),
        c3: document.getElementById('l2c3'),
        c4: document.getElementById('l2c4'),
        c5: document.getElementById('l2c5'),
    },
    exibirLetra: function (coluna, letra) {
        coluna.textContent = letra.toUpperCase()
    },
    removerLetra: function (coluna) {
        coluna.textContent = ''
    },
    exibirCores: function (linha, listaCores) {
        const cores = {
            certo: 'fullcorrect',
            posicao: 'correct',
            errada: 'incorrect'
        }
        for (item in listaCores) {
            coluna = `c${parseInt(item) + 1}`
            console.log(linha[coluna].classList, cores[listaCores[item]])
            linha[coluna].classList.add(cores[listaCores[item]])
        }
    }
}