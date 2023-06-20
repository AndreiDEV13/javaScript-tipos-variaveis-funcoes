// parâmetros de função

function soma(numero1, numero2) {
    return numero1 + numero2;
}

//console.log(soma(2, 2))
//console.log(soma(500, 30))
//console.log(soma(-450, 62))

// parametros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade('Andrei', 27))

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1*numero2;
}
                           //9   
console.log(multiplica(soma(4, 5)))