class ServicoAeronaves {
  constructor() {
    this.aeronaves = [];
  }

  adicionarAeronave(aeronave) {
    this.aeronaves.push(aeronave);
  }

  recuperarAeronavePorPrefixo(prefixo) {
    return this.aeronaves.find((aeronave) => aeronave.prefixo === prefixo);
  }

  listarAeronaves() {
    return this.aeronaves;
  }
}

module.exports = ServicoAeronaves;
