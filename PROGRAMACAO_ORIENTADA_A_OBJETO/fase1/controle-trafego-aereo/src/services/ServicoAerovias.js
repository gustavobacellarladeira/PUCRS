class ServicoAerovias {
  constructor() {
    this.aerovias = [];
  }

  adicionarAerovia(aerovia) {
    this.aerovias.push(aerovia);
  }

  recuperarAeroviaPorIdentificador(identificador) {
    return this.aerovias.find(
      (aerovia) => aerovia.identificador === identificador
    );
  }

  listarAerovias() {
    return this.aerovias;
  }
}

module.exports = ServicoAerovias;
