const Aeronave = require("../models/Aeronave");

class ServicoAeronaves {
  constructor() {
    this.aeronaves = [];
  }

  adicionarAeronave(aeronave) {
    if (aeronave instanceof Aeronave) {
      this.aeronaves.push(aeronave);
    } else {
      throw new Error("O objeto não é uma instância de Aeronave");
    }
  }

  recuperarAeronavePorPrefixo(prefixo) {
    return this.aeronaves.find((aeronave) => aeronave.prefixo === prefixo);
  }

  listarAeronaves() {
    return this.aeronaves.map((aeronave) => ({
      prefixo: aeronave.prefixo,
      tipo: aeronave.tipo,
      velocidadeCruzeiro: aeronave.velocidadeCruzeiro,
      autonomia: aeronave.autonomia,
      companhiaAerea: aeronave.companhiaAerea || undefined,
      capacidadePassageiros: aeronave.capacidadePassageiros || undefined,
      capacidadeCarga: aeronave.capacidadeCarga || undefined,
      empresaManutencao: aeronave.empresaManutencao || undefined,
    }));
  }
}

module.exports = ServicoAeronaves;
