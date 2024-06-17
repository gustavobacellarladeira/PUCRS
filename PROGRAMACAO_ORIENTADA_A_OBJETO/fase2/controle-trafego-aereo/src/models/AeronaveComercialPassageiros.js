const Aeronave = require("./Aeronave");

class AeronaveComercialPassageiros extends Aeronave {
  #capacidadePassageiros;

  constructor(
    prefixo,
    velocidadeCruzeiro,
    autonomia,
    companhiaAerea,
    capacidadePassageiros
  ) {
    super(
      prefixo,
      "ComercialPassageiros",
      velocidadeCruzeiro,
      autonomia,
      companhiaAerea
    );
    this.#capacidadePassageiros = capacidadePassageiros;
  }

  get capacidadePassageiros() {
    return this.#capacidadePassageiros;
  }

  set capacidadePassageiros(value) {
    this.#capacidadePassageiros = value;
  }
}

module.exports = AeronaveComercialPassageiros;
