const Aeronave = require("./Aeronave");

class AeronaveComercialPassageiros extends Aeronave {
  constructor(
    prefixo,
    velocidadeCruzeiro,
    autonomia,
    companhiaAerea,
    capacidadePassageiros
  ) {
    super(prefixo, "ComercialPassageiros", velocidadeCruzeiro, autonomia);
    this.companhiaAerea = companhiaAerea;
    this.capacidadePassageiros = capacidadePassageiros;
  }
}

module.exports = AeronaveComercialPassageiros;
