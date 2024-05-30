const Aeronave = require("./Aeronave");

class AeronaveComercialCarga extends Aeronave {
  constructor(
    prefixo,
    velocidadeCruzeiro,
    autonomia,
    companhiaAerea,
    capacidadeCarga
  ) {
    super(prefixo, "ComercialCarga", velocidadeCruzeiro, autonomia);
    this.companhiaAerea = companhiaAerea;
    this.capacidadeCarga = capacidadeCarga;
  }
}

module.exports = AeronaveComercialCarga;
