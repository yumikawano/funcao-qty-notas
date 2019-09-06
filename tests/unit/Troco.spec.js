const Troco = require('../../src/Troco')

it('espera que o metodo Troco.getQtdeNotas retorne o valor correto', () => {
  const expected = {
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
  }

  expect(Troco.getQtdeNotas(100)).toEqual(expected)
}) 