const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const pecas = {
    "bracos" : {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem" : {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos" : {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas" : {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes" : {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
} 
controle.forEach((elemento)=> {
    elemento.addEventListener('click', (evento) =>  {
        const quantidadePecas = evento.target.parentNode.querySelector('[data-contador]').value;
        const operacao = evento.target.dataset.controle;
        
        manipulaDados(operacao, evento.target.parentNode);
        if ((quantidadePecas === "00" || quantidadePecas === "0") && operacao === "-"){
            console.log(`ERRO: impossível calcular estatísticas de equipamentos com valor negativo = Quantidade de peças: ${quantidadePecas}`)
        } else {
            atualizaEstatistica(evento.target.dataset.peca, operacao);
        }
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector('[data-contador]');

    if(operacao === '-'){
        peca.value > 0 ? peca.value = parseInt(peca.value) - 1 : console.log('Não é possível subtrair mais dessa peça');
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
 }


 function atualizaEstatistica(peca, operacao){
    estatisticas.forEach((elemento)=>{ 
        operacao === "+" ? elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica] : elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];       
    })
 }

