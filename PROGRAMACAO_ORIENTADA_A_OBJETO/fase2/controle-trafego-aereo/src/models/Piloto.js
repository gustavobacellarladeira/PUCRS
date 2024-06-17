class Piloto {
  #matricula;
  #nome;
  #habilitacaoAtiva;

  constructor(matricula, nome, habilitacaoAtiva) {
    this.#matricula = matricula;
    this.#nome = nome;
    this.#habilitacaoAtiva = habilitacaoAtiva;
  }

  get matricula() {
    return this.#matricula;
  }

  set matricula(value) {
    this.#matricula = value;
  }

  get nome() {
    return this.#nome;
  }

  set nome(value) {
    this.#nome = value;
  }

  get habilitacaoAtiva() {
    return this.#habilitacaoAtiva;
  }

  set habilitacaoAtiva(value) {
    this.#habilitacaoAtiva = value;
  }
}

module.exports = Piloto;
