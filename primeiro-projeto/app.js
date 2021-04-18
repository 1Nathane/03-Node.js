//Maneiras de exibir uma constante no console
/*const count = 5;
console.log('count: %d', count);
console.log('count:', count);
console.log(`count: ${count}`);*/


// Tempo que um for gasta para contar de 0 a 1000
//contar o tempo inicial
//contar o tempo final
//imprimir o resultado na tela

/*console.log('Tempo inicial:',tempo_inicial = Date.now());
for(let i = 0; i<=1000; i++);
//console.log(i);
console.log('Tempo Final:',tempo_final = Date.now());
console.log('Tempo gasto:',tempo_final-tempo_inicial,'milisegundos')*/

console.time('1000-iteracoes');
for(let i = 0; i<=1000; i++);
console.timeEnd('1000-iteracoes');

