class PlanoDeVoo {
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
    this.id = id;
    this.matriculaPiloto = matriculaPiloto;
    this.prefixoAeronave = prefixoAeronave;
    this.data = data;
    this.horario = horario;
    this.aerovia = aerovia;
    this.altitude = altitude;
    this.slotsOcupados = slotsOcupados;
    this.cancelado = cancelado;
  }
}

module.exports = PlanoDeVoo;
