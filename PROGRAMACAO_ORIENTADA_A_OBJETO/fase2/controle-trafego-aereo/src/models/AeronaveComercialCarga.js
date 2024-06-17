const Aeronave = require("./Aeronave");

class AeronaveComercial extends Aeronave {
  constructor(prefixo, tipo, velocidadeCruzeiro, autonomia) {
    super(prefixo, tipo, velocidadeCruzeiro, autonomia);
  }
}

module.exports = AeronaveComercial;
