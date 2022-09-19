const Troco = require('../../src/Troco')

it('Espera que o metodo Troco.getQtdeNotas(188.91) retorne o resultado com todas as notas e moedas com 1 unidade', () => {
  let valorACalcular = 188.91;
  let esperado = {
    '100': 1,
    '50': 1,
    '20': 1,
    '10': 1,
    '5': 1,
    '2': 1,
    '1': 1,
    '0.5': 1,
    '0.25': 1,
    '0.1': 1,
    '0.05': 1,
    '0.01': 1
  }

  expect(Troco.getQtdeNotas(valorACalcular)).toEqual(esperado)
});

it('Espera que o metodo Troco.getQtdeNotas(50.15) retorne o resultado com todas as notas e moedas com 1 unidade', () => {
  let valorACalcular = 50.15;
  let esperado = {
    '100': 0,
    '50': 1,
    '20': 0,
    '10': 0,
    '5': 0,
    '2': 0,
    '1': 0,
    '0.5': 0,
    '0.25': 0,
    '0.1': 1,
    '0.05': 1,
    '0.01': 0
  }

  expect(Troco.getQtdeNotas(valorACalcular)).toEqual(esperado)
});

it('Espera que o metodo Troco.getQtdeNotas(-100) retorne o resultado com todas as notas e moedas sem unidade', () => {
  let valorACalcular = -100;
  let esperado = {
    '100': 0,
    '50': 0,
    '20': 0,
    '10': 0,
    '5': 0,
    '2': 0,
    '1': 0,
    '0.5': 0,
    '0.25': 0,
    '0.1': 0,
    '0.05': 0,
    '0.01': 0
  };

  expect(Troco.getQtdeNotas(valorACalcular)).toEqual(esperado);
});

it('Espera que o metodo Troco.getQtdeNotas(\'asd\') retorne o resultado com todas as notas e moedas sem unidade', () => {
  let valorACalcular = 'asd';
  let esperado = {
    '100': 0,
    '50': 0,
    '20': 0,
    '10': 0,
    '5': 0,
    '2': 0,
    '1': 0,
    '0.5': 0,
    '0.25': 0,
    '0.1': 0,
    '0.05': 0,
    '0.01': 0
  };

  expect(Troco.getQtdeNotas(valorACalcular)).toEqual(esperado);
});

it('Espera que o metodo Troco.getQtdeNotas(0) retorne o resultado com todas as notas e moedas sem unidade', () => {
  let valorACalcular = 0;
  let esperado = {
    '100': 0,
    '50': 0,
    '20': 0,
    '10': 0,
    '5': 0,
    '2': 0,
    '1': 0,
    '0.5': 0,
    '0.25': 0,
    '0.1': 0,
    '0.05': 0,
    '0.01': 0
  };

 expect(Troco.getQtdeNotas(valorACalcular)).toEqual(esperado);
});