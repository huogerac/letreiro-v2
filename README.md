# letreiro-v2

# Dividir para conquistar

- Iniciar com a validação de uma palavra fixa, exemplo, `palavraDoDia = 'ARROZ'`
    - Regras:
    - Verde posição correta
    - Amarelo para existe mas em outra posição
    - Cinza não existe ocorrência da letra
- Mudar de linha quando apertar ENTER
- Remover uma letra quando apertar BACKSPACE
- Parar de jogar quando acertar a palavra ou atingir as 6 tentativas
- Não permitir ENTER antes das 5 letras, nem BACK quando não tiver entrada na linha
- Fazer uma lista inicial de palavras válidas (umas 100, não precisa ser as 3 mil) e exibir a mensagem 'X não é uma palavra válida' quando a linha não tiver uma palavra da lista
- Criar uma lista fixa com base nos dias, algo como o objeto abaixo com a lista inicial
```javascript
 {
    20220819: 'ARROZ',
    20220820: 'FESTA',
    20220821: 'AMORA',
    ...
 }
```
- Ao iniciar, pegar da data atual (new Date()) o valor YYYMMDD e achar a palavra do dia da estrutura acima
- Usar localStorage e salvar as jogadas. Não permitir que o usuário jogue mais de uma vez, ou se fechar tudo, continue onde parou
- Tratar o caso onde a palavra do dia é FESTA e tentamos MISSA ou OSSOS, um S vai ser verde os demais são cinza, dado que FESTA tem apenas 1
- PONTO EXTRA SE TIVER
    - Mostrar um [modal](https://www.w3schools.com/howto/howto_css_modals.asp) quando terminar de jogar
    - Mostrar [animação](https://xsgames.co/animatiss/) igual o jogo original na validação
    - Separar a regra de validação do wordle das regras de exibição, ver a camada visual do [tabuleiro.js](https://github.com/huogerac/letreiro-v2/blob/main/script/tabuleiro.js)