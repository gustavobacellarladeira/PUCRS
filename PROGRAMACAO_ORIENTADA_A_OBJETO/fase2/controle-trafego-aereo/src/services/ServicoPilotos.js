const Piloto = require("../models/Piloto");

class ServicoPilotos {
  constructor() {
    this.pilotos = [];
  }

  adicionarPiloto(matricula, nome, habilitacaoAtiva) {
    const piloto = new Piloto(matricula, nome, habilitacaoAtiva);
    this.pilotos.push(piloto);
    console.log(`Piloto ${piloto.nome} adicionado com sucesso!`);
  }

  recuperarPilotoPorMatricula(matricula) {
    return this.pilotos.find((piloto) => piloto.matricula === matricula);
  }

  listarPilotos() {
    return this.pilotos.map((piloto) => ({
      matricula: piloto.matricula,
      nome: piloto.nome,
      habilitacaoAtiva: piloto.habilitacaoAtiva,
    }));
  }
}

module.exports = ServicoPilotos;
