//TODO Capturar evento de submit do formulário
/*
Criar parágrafo e outros elementos pelo JS
const p = document.createElement('p');
p.classList.add('paragrafo-resultado');
p.innerHTML = 'teste de parágrafo';
*/

const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    //const imc = Number(calcIMC(inputPeso.value, inputAltura.value));
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) { 
        setResultado('Altura inválida', false);
        return;
    }

    const imc = calcIMC(peso, altura);
    const status = imcStatus(imc);

    msg = `Seu imc é ${imc} (${status}).`

    setResultado(msg, true);

});



function calcIMC(peso, altura) {
    return imc = (peso / (altura * altura)).toFixed(2);
}

function imcStatus(imc){
    const status = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3 (mórbida)'
    ];

    if (imc < 18.5) return status[0];

    if (imc >= 18.5 && imc < 25) return status[1];

    if (imc >= 25 && imc < 30) return status[2];

    if (imc >= 30 && imc < 35) return status[3];

    if (imc >= 35 && imc < 40) return status[4];

    if (imc >= 40) return status[5];    
}

function criaParagrafo() {    
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {    
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);    
}