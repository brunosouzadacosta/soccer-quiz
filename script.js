let respostaCorreta = document.querySelector('#a');
let jaClicou = false;
let acertos = 0;

function clicou(alternativa) {
    if (!jaClicou) {
        jaClicou = true;

        const alternativaEscolhida = document.querySelector(alternativa);

        if (alternativaEscolhida === respostaCorreta) {
            respostaCorreta.style.backgroundColor = "#00FF00";
            acertos++;
        } else {
            alternativaEscolhida.style.backgroundColor = "#CD5C5C";
        }
    }
}

function resetarCores() {
    const alternativas = document.querySelectorAll('.options p');
    for (const alternativa of alternativas) {
        alternativa.style.backgroundColor = "#FFFFFF";
    }
}

function proximaQuestao() {
    if (jaClicou === true) {
        resetarCores();
        const questaoNum = parseInt(document.querySelector('h2').innerText.split(" ")[1]);

        if (questaoNum < 10) {
            document.querySelector('h2').innerText = "Questão " + (questaoNum + 1);

            switch (questaoNum) {
                case 1:
                    document.querySelector('h3').innerText = "Qual seleção venceu a Copa do Mundo de Futebol no ano de 2018?";
                    document.querySelector('#a').innerText = "Brasil";
                    document.querySelector('#b').innerText = "França";
                    document.querySelector('#c').innerText = "Alemanha";
                    document.querySelector('#d').innerText = "Espanha";
                    respostaCorreta = document.querySelector('#b');
                    break;
                case 2:
                    document.querySelector('h3').innerText = "Qual jogador tem o recorde de mais gols marcados em Copas do Mundo?";
                    document.querySelector('#a').innerText = "Cristiano Ronaldo";
                    document.querySelector('#b').innerText = "Pelé";
                    document.querySelector('#c').innerText = "Miroslav Klose";
                    document.querySelector('#d').innerText = "Lionel Messi";
                    respostaCorreta = document.querySelector('#c');
                    break;
                case 3:
                    document.querySelector('h3').innerText = "Qual jogador detém o recorde de mais gols marcados em uma única edição da Champions League?";
                    document.querySelector('#a').innerText = "Lionel Messi";
                    document.querySelector('#b').innerText = "Cristiano Ronaldo";
                    document.querySelector('#c').innerText = "Neymar";
                    document.querySelector('#d').innerText = "Robert Lewandowski";
                    respostaCorreta = document.querySelector('#b');
                    break;
                case 4:
                    document.querySelector('h3').innerText = "Quantos títulos de UEFA Champions League o Barcelona ganhou até 2023?";
                    document.querySelector('#a').innerText = "3";
                    document.querySelector('#b').innerText = "5";
                    document.querySelector('#c').innerText = "7";
                    document.querySelector('#d').innerText = "4";
                    respostaCorreta = document.querySelector('#b');
                    break;
                case 5:
                    document.querySelector('h3').innerText = "Qual equipe venceu a UEFA Champions League na temporada 2020-2021?";
                    document.querySelector('#a').innerText = "Manchester City";
                    document.querySelector('#b').innerText = "Chelsea";
                    document.querySelector('#c').innerText = "Paris Saint-Germain";
                    document.querySelector('#d').innerText = "Real Madrid";
                    respostaCorreta = document.querySelector('#b');
                    break;
                case 6:
                    document.querySelector('h3').innerText = "Quantas vezes o São Paulo FC venceu a Copa Libertadores até 2023?";
                    document.querySelector('#a').innerText = "2";
                    document.querySelector('#b').innerText = "3";
                    document.querySelector('#c').innerText = "4";
                    document.querySelector('#d').innerText = "5";
                    respostaCorreta = document.querySelector('#b');
                    break;
                case 7:
                    document.querySelector('h3').innerText = "Qual equipe brasileira venceu a Libertadores de 2012 de maneira invicta?";
                    document.querySelector('#a').innerText = "Cruzeiro";
                    document.querySelector('#b').innerText = "São Paulo";
                    document.querySelector('#c').innerText = "Corinthians";
                    document.querySelector('#d').innerText = "Palmeiras";
                    respostaCorreta = document.querySelector('#c');
                    break;
                case 8:
                    document.querySelector('h3').innerText = "Qual foi o primeiro time brasileiro a levar a taça da Libertadores?";
                    document.querySelector('#a').innerText = "Santos";
                    document.querySelector('#b').innerText = "Flamengo";
                    document.querySelector('#c').innerText = "Palmeiras";
                    document.querySelector('#d').innerText = "Grêmio";
                    respostaCorreta = document.querySelector('#a');
                    break;
                case 9:
                    document.querySelector('h3').innerText = "Qual seleção venceu a Copa do Mundo de Futebol Feminino em 2019?";
                    document.querySelector('#a').innerText = "Estados Unidos";
                    document.querySelector('#b').innerText = "Brasil";
                    document.querySelector('#c').innerText = "Alemanha";
                    document.querySelector('#d').innerText = "França";
                    respostaCorreta = document.querySelector('#a');
                    break;
            }

            jaClicou = false;
        } else {
            document.querySelector('h2').innerText = `Você acertou ${acertos} questões!`;
            document.querySelector('h3').innerText = "Respostas";
            const respostas = [
                "1 - O Brasil sediou a Copa do Mundo de 2014",
                "2 - A França ganhou a Copa do Mundo de 2018",
                "3 - Miroslav Klose é o  maior artilheiro de todos os Mundiais com 16 gols",
                "4 - Cristiano Ronaldo é o jogador com mais gols marcados em uma única edição da Champions League na temporada 2013-2014",
                "5 - O Barcelona conquistou a Champions League 5 vezes em sua história",
                "6 - O Chelsea venceu a UEFA Champions League na temporada 2020-2021",
                "7 - O São Paulo venceu a Libertadores 3 vezes em sua história",
                "8 - O Corinthians venceu a Libertadores de 2012 de maneira invicta",
                "9 - O Santos foi o primeiro time brasileiro a ganhar a Libertadores em 1962",
                "10 - A seleção feminina dos Estados Unidos venceu a Copa do Mundo de Futebol Feminino em 2019"
            ];
            document.querySelector('.container').style.backgroundColor = "#f0f0f0";
            document.querySelector('#botao').style.display = "none";
            const resultadoContainer = document.querySelector('.options');
            resultadoContainer.style.padding = "10px";  
            resultadoContainer.innerHTML = respostas.join("<br>");
            
        }
    }
}