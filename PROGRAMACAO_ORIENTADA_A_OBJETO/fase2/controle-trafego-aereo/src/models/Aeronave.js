class Aeronave {
  #prefixo;
  #tipo;
  #velocidadeCruzeiro;
  #autonomia;

  constructor(prefixo, tipo, velocidadeCruzeiro, autonomia) {
    this.#prefixo = prefixo;
    this.#tipo = tipo;
    this.#velocidadeCruzeiro = velocidadeCruzeiro;
    this.#autonomia = autonomia;
  }

  get prefixo() {
    return this.#prefixo;
  }

  set prefixo(value) {
    this.#prefixo = value;
  }

  get tipo() {
    return this.#tipo;
  }

  set tipo(value) {
    this.#tipo = value;
  }

  get velocidadeCruzeiro() {
    return this.#velocidadeCruzeiro;
  }

  set velocidadeCruzeiro(value) {
    this.#velocidadeCruzeiro = value;
  }

  get autonomia() {
    return this.#autonomia;
  }

  set autonomia(value) {
    this.#autonomia = value;
  }
}

module.exports = Aeronave;
