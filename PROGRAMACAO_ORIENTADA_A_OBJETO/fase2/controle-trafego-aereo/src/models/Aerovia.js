class Aerovia {
  #identificador;
  #aeroportoOrigem;
  #aeroportoDestino;
  #tamanho;

  constructor(identificador, aeroportoOrigem, aeroportoDestino, tamanho) {
    this.#identificador = identificador;
    this.#aeroportoOrigem = aeroportoOrigem;
    this.#aeroportoDestino = aeroportoDestino;
    this.#tamanho = tamanho;
  }

  get identificador() {
    return this.#identificador;
  }

  set identificador(value) {
    this.#identificador = value;
  }

  get aeroportoOrigem() {
    return this.#aeroportoOrigem;
  }

  set aeroportoOrigem(value) {
    this.#aeroportoOrigem = value;
  }

  get aeroportoDestino() {
    return this.#aeroportoDestino;
  }

  set aeroportoDestino(value) {
    this.#aeroportoDestino = value;
  }

  get tamanho() {
    return this.#tamanho;
  }

  set tamanho(value) {
    this.#tamanho = value;
  }
}

module.exports = Aerovia;
