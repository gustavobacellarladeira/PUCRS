const Aerovia = require("../models/Aerovia");

class ServicoAerovias {
  constructor() {
    this.aerovias = [];
  }

  adicionarAerovia(aerovia) {
    if (aerovia instanceof Aerovia) {
      this.aerovias.push(aerovia);
    } else {
      throw new Error("O objeto não é uma instância de Aerovia");
    }
  }

  recuperarAeroviaPorIdentificador(identificador) {
    return this.aerovias.find(
      (aerovia) => aerovia.identificador === identificador
    );
  }

  listarAerovias() {
    return this.aerovias.map((aerovia) => ({
      identificador: aerovia.identificador,
      aeroportoOrigem: aerovia.aeroportoOrigem,
      aeroportoDestino: aerovia.aeroportoDestino,
      tamanho: aerovia.tamanho,
    }));
  }
}

module.exports = ServicoAerovias;
