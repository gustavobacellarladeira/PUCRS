class PlanoDeVoo {
  #id;
  #matriculaPiloto;
  #prefixoAeronave;
  #data;
  #horario;
  #aerovia;
  #altitude;
  #slotsOcupados;
  #cancelado;

  constructor(
    id,
    matriculaPiloto,
    prefixoAeronave,
    data,
    horario,
    aerovia,
    altitude,
    slotsOcupados,
    cancelado = false
  ) {
    this.#id = id;
    this.#matriculaPiloto = matriculaPiloto;
    this.#prefixoAeronave = prefixoAeronave;
    this.#data = data;
    this.#horario = horario;
    this.#aerovia = aerovia;
    this.#altitude = altitude;
    this.#slotsOcupados = slotsOcupados;
    this.#cancelado = cancelado;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    this.#id = value;
  }

  get matriculaPiloto() {
    return this.#matriculaPiloto;
  }

  set matriculaPiloto(value) {
    this.#matriculaPiloto = value;
  }

  get prefixoAeronave() {
    return this.#prefixoAeronave;
  }

  set prefixoAeronave(value) {
    this.#prefixoAeronave = value;
  }

  get data() {
    return this.#data;
  }

  set data(value) {
    this.#data = value;
  }

  get horario() {
    return this.#horario;
  }

  set horario(value) {
    this.#horario = value;
  }

  get aerovia() {
    return this.#aerovia;
  }

  set aerovia(value) {
    this.#aerovia = value;
  }

  get altitude() {
    return this.#altitude;
  }

  set altitude(value) {
    this.#altitude = value;
  }

  get slotsOcupados() {
    return this.#slotsOcupados;
  }

  set slotsOcupados(value) {
    this.#slotsOcupados = value;
  }

  get cancelado() {
    return this.#cancelado;
  }

  set cancelado(value) {
    this.#cancelado = value;
  }
}

module.exports = PlanoDeVoo;
