// Você pode utilizar este arquivo para testar no console o retorno da função.
// Basta executar node console/troco.js

const Troco = require('../src/Troco');

quantidadeReais = process.argv[2] || 0;
console.log(Troco.getQtdeNotas(quantidadeReais));
