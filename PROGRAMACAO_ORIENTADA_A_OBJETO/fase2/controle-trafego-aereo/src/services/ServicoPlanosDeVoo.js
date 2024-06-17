const PlanoDeVoo = require("../models/PlanoDeVoo");

class ServicoPlanosDeVoo {
  constructor(servicoPilotos, servicoAeronaves, servicoAerovias) {
    this.planos = [];
    this.contadorId = 1;
    this.servicoPilotos = servicoPilotos;
    this.servicoAeronaves = servicoAeronaves;
    this.servicoAerovias = servicoAerovias;
    this.slotsOcupados = {}; // Inicializar estrutura para armazenar slots ocupados
  }

  aprovarPlanoDeVoo(
    matriculaPiloto,
    prefixoAeronave,
    data,
    horario,
    aerovia,
    altitude
  ) {
    const piloto =
      this.servicoPilotos.recuperarPilotoPorMatricula(matriculaPiloto);
    if (!piloto || !piloto.habilitacaoAtiva) {
      return "Piloto não encontrado ou habilitação inativa";
    }

    const aeronave =
      this.servicoAeronaves.recuperarAeronavePorPrefixo(prefixoAeronave);
    if (!aeronave) {
      return "Aeronave não encontrada";
    }

    const aeroviaEncontrada =
      this.servicoAerovias.recuperarAeroviaPorIdentificador(aerovia);
    if (!aeroviaEncontrada) {
      return "Aerovia não encontrada";
    }

    if (aeronave.autonomia < aeroviaEncontrada.tamanho * 1.1) {
      return "Aeronave não possui autonomia suficiente";
    }

    if (
      (aeronave.tipo === "ComercialPassageiros" && altitude < 28000) ||
      (aeronave.tipo === "Particular" &&
        (altitude < 25000 || altitude > 27000)) ||
      (aeronave.tipo === "ComercialCarga" &&
        (horario < "00:00" || horario > "06:00"))
    ) {
      return "Altitude ou horário incompatível com o tipo de aeronave";
    }

    const slotsOcupados = this.calcularSlotsOcupados(
      aeroviaEncontrada.tamanho,
      aeronave.velocidadeCruzeiro,
      horario
    );
    const slotsLivres = this.verificarDisponibilidade(
      aerovia,
      data,
      slotsOcupados,
      altitude
    );

    if (!slotsLivres) {
      return "Slots de horário não disponíveis";
    }

    const plano = new PlanoDeVoo(
      this.contadorId++,
      matriculaPiloto,
      prefixoAeronave,
      data,
      horario,
      aerovia,
      altitude,
      slotsOcupados
    );

    this.planos.push(plano);
    this.marcarSlotsOcupados(aerovia, data, slotsOcupados, altitude);

    // Retorna uma cópia do plano, apenas com propriedades públicas
    return {
      id: plano.id,
      matriculaPiloto: plano.matriculaPiloto,
      prefixoAeronave: plano.prefixoAeronave,
      data: plano.data,
      horario: plano.horario,
      aerovia: plano.aerovia,
      altitude: plano.altitude,
      slotsOcupados: plano.slotsOcupados,
    };
  }

  recuperarPlanoPorId(id) {
    return this.planos.find((plano) => plano.id === id);
  }

  calcularSlotsOcupados(tamanho, velocidadeCruzeiro, horario) {
    const horasNecessarias = Math.ceil(tamanho / velocidadeCruzeiro);
    const horaInicial = parseInt(horario.split(":")[0]);
    const slots = Array.from(
      { length: horasNecessarias },
      (_, i) => horaInicial + i
    );
    return slots;
  }

  verificarDisponibilidade(aerovia, data, slotsOcupados, altitude) {
    if (!this.slotsOcupados[aerovia]) {
      this.slotsOcupados[aerovia] = {};
    }
    if (!this.slotsOcupados[aerovia][data]) {
      this.slotsOcupados[aerovia][data] = {};
    }
    if (!this.slotsOcupados[aerovia][data][altitude]) {
      this.slotsOcupados[aerovia][data][altitude] = [];
    }

    const slotsExistentes = this.slotsOcupados[aerovia][data][altitude];
    for (let slot of slotsOcupados) {
      if (slotsExistentes.includes(slot)) {
        return false;
      }
    }

    return true;
  }

  marcarSlotsOcupados(aerovia, data, slotsOcupados, altitude) {
    if (!this.slotsOcupados[aerovia]) {
      this.slotsOcupados[aerovia] = {};
    }
    if (!this.slotsOcupados[aerovia][data]) {
      this.slotsOcupados[aerovia][data] = {};
    }
    if (!this.slotsOcupados[aerovia][data][altitude]) {
      this.slotsOcupados[aerovia][data][altitude] = [];
    }

    this.slotsOcupados[aerovia][data][altitude].push(...slotsOcupados);
  }
}

module.exports = ServicoPlanosDeVoo;
