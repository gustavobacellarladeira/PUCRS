const Aeronave = require("./Aeronave");

class AeronaveParticular extends Aeronave {
  #empresaManutencao;

  constructor(prefixo, velocidadeCruzeiro, autonomia, empresaManutencao) {
    super(prefixo, "Particular", velocidadeCruzeiro, autonomia);
    this.#empresaManutencao = empresaManutencao;
  }

  get empresaManutencao() {
    return this.#empresaManutencao;
  }

  set empresaManutencao(value) {
    this.#empresaManutencao = value;
  }
}

module.exports = AeronaveParticular;
