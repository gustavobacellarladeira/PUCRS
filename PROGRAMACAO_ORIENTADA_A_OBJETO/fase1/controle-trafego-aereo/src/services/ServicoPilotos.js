class ServicoPilotos {
  constructor() {
    this.pilotos = [];
  }

  adicionarPiloto(piloto) {
    this.pilotos.push(piloto);
  }

  recuperarPilotoPorMatricula(matricula) {
    return this.pilotos.find((piloto) => piloto.matricula === matricula);
  }

  listarPilotos() {
    return this.pilotos;
  }
}

module.exports = ServicoPilotos;
