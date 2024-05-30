const Aeronave = require("./Aeronave");

class AeronaveParticular extends Aeronave {
  constructor(prefixo, velocidadeCruzeiro, autonomia, empresaManutencao) {
    super(prefixo, "Particular", velocidadeCruzeiro, autonomia);
    this.empresaManutencao = empresaManutencao;
  }
}

module.exports = AeronaveParticular;
