class Troco {
  static getQtdeNotas(reais) {
    const notasQtd = {
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
    return this.calcularQuantidadeNotas(reais, notasQtd);
  }

  static calcularQuantidadeNotas(valorTotal, quantidadeNotas){

      // Array contendo todos os valores da maior nota para a menor
      const valoresNotas = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];

      // Descobre o número de posições que o array possui (contando índice 0)
      const numeroNotasDisponiveis = valoresNotas.length - 1;
 
        // O laço irá percorrer todas as notas enquanto o valor for maior que 0
        let i = 0;
        while(i <= numeroNotasDisponiveis && valorTotal > 0){
            const notaAtual = valoresNotas[i];
            while(valorTotal >= notaAtual){
                quantidadeNotas[notaAtual]++;
                valorTotal = Number(valorTotal - notaAtual).toFixed(2);
            }

            i++;
        }
        return quantidadeNotas;
    }
}

module.exports = Troco;


