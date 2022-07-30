const controle = document.querySelectorAll("[data-controle]"); //mapeia/seleciona os campos com - e + para fazer as operações matematicas
const estatisticas = document.querySelectorAll('[data-estatistica]'); //mapeia/seleciona os campos com {forca, poder, energia, velocidade} para manipular os valores.
const pecas = { //peças para adicionar 
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagens": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
controle.forEach( (elemento) =>{ 
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode, evento);
         console.log(evento.target.dataset.controle)
    });
});

function manipulaDados(operacao, elemento, poderes){
    const peca = elemento.querySelector('[data-contador]');
    console.log(peca)
    switch(operacao){
        case '-'||"menos":
            if(peca.value <= 00){return;}
            peca.value = parseInt(peca.value) - 1;
            atualizaEstatisticas(poderes.target.dataset.peca, '-');
            break;
        case '+'||"mais":
            if(peca.value >= 50){return;}
            atualizaEstatisticas(poderes.target.dataset.peca);
            peca.value = parseInt(peca.value) + 1;
            break;
        default:
            return;
            
    }
}

function atualizaEstatisticas(peca, operacao = '+'){
    estatisticas.forEach((elemento) => {
        // console.log(elemento.dataset.estatistica)
        if(operacao !== '+'){
            elemento.textContent = parseInt(elemento.textContent) - (pecas[peca][elemento.dataset.estatistica]);
            return;
        }
        elemento.textContent = parseInt(elemento.textContent) + (pecas[peca][elemento.dataset.estatistica]);
    });
}
