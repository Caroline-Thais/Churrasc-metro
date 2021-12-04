// Carne - 400gr por pessoa + de 6h - 650gr (criança - considerar metade)
//Cerveja - 1200ml por pessoa + de 6h - 2000ml
//Refrigerante/água - 1000ml por pessoa + de 6h 1500ml

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} garrafas de 2L de bebidas (água/refrigerante) </p>`
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >=6){
        return 2000;
    } else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if (duracao >= 6){
        return 1500;
    } else{
        return 1000;
    }
}