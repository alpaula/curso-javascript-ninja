/*
Crie um array com 5 items (tipos variados).
*/
var arr = [ 'Anna', 26, null, function(a, b){ a + b}, [ 1, 2, 3 ] ]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem( item ){
    arr.push(item);
    return arr;
}

console.log(addItem('Novo Item'));

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem( [ undefined, { comer: 'comida' }, '1sti' ] ));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log( 'O segundo elemento do segundo array é ' + arr[6][1].comer + '.' )

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O primeiro array tem ' + arr.length + ' itens.' )

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O segundo array tem ' + arr[6].length + ' itens.' )

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

console.log( 'Números pares entre 10 e 20: ' );
var number = 10;
while( number <= 20){
    number % 2 === 0 ? console.log(number) : '',
    number++;
};

// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var number2 = 10;
while( number2 <= 20 ){
    number2 % 2 !== 0 ? console.log(number2) : '';
    number2++
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for( var number3 = 100; number3 <= 120; number3++ ){
    if(number3 % 2 === 0){
        console.log(number3)
    }
};

console.log( 'Números ímpares entre 111 e 125:' );
for( var number4 = 100; number4 <= 120; number4++ ){
    if(number4 % 2 !== 0 ){
        console.log(number4)
    }
}