// essa lib de logs é opcional, mas ajuda a visualizar o que está acontecendo, feita por mim, @gustavobacellarladeira
const {
  logInfo,
  logWarning,
  logSuccess,
  setLogOptions,
} = require("react-native-debulog");
setLogOptions({
  showBadge: false,
});
const readline = require("readline");

const Piloto = require("./src/models/Piloto");
const ServicoPilotos = require("./src/services/ServicoPilotos");
const AeronaveParticular = require("./src/models/AeronaveParticular");
const AeronaveComercialPassageiros = require("./src/models/AeronaveComercialPassageiros");
const AeronaveComercialCarga = require("./src/models/AeronaveComercialCarga");
const ServicoAeronaves = require("./src/services/ServicoAeronaves");
const Aerovia = require("./src/models/Aerovia");
const ServicoAerovias = require("./src/services/ServicoAerovias");

// Criação de pilotos
const servicoPilotos = new ServicoPilotos();
const piloto1 = new Piloto("123", "João Silva", true);
const piloto2 = new Piloto("456", "Maria Oliveira", false);

servicoPilotos.adicionarPiloto(piloto1);
servicoPilotos.adicionarPiloto(piloto2);

// Criação de aeronaves
const servicoAeronaves = new ServicoAeronaves();
const aeronave1 = new AeronaveParticular("PT-ABC", 800, 2000, "Empresa A");
const aeronave2 = new AeronaveComercialPassageiros(
  "PT-DEF",
  900,
  3000,
  "Companhia B",
  150
);
const aeronave3 = new AeronaveComercialCarga(
  "PT-GHI",
  700,
  2500,
  "Companhia C",
  20
);

servicoAeronaves.adicionarAeronave(aeronave1);
servicoAeronaves.adicionarAeronave(aeronave2);
servicoAeronaves.adicionarAeronave(aeronave3);

// Criação de aerovias
const servicoAerovias = new ServicoAerovias();
const aerovia1 = new Aerovia("POA-RJ", "Porto Alegre", "Rio de Janeiro", 1000);
const aerovia2 = new Aerovia("SP-BA", "São Paulo", "Salvador", 1500);

servicoAerovias.adicionarAerovia(aerovia1);
servicoAerovias.adicionarAerovia(aerovia2);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.log("Menu:");
  console.log("1. Opção 1: Listar pilotos");
  console.log("2. Opção 2: Listar aeronaves");
  console.log("3. Opção 3: Listar aerovias");
  console.log("0. Sair");
}

function opcao1() {
  logInfo("Lista de pilotos", servicoPilotos.listarPilotos());
  logInfo(
    "Piloto recuperado por matrícula (123) ",
    servicoPilotos.recuperarPilotoPorMatricula("123")
  );
  menu();
}

function opcao2() {
  logWarning("Lista de aeronaves", servicoAeronaves.listarAeronaves());
  logWarning(
    "Aeronave recuperada por prefixo (PT-DEF) ",
    servicoAeronaves.recuperarAeronavePorPrefixo("PT-DEF")
  );
  menu();
}

function opcao3() {
  logSuccess("Lista de aerovias", servicoAerovias.listarAerovias());
  logSuccess(
    "Aerovia recuperada por identificador (SP-BA) ",
    servicoAerovias.recuperarAeroviaPorIdentificador("SP-BA")
  );
  menu();
}

rl.on("line", (input) => {
  switch (input.trim()) {
    case "0":
      rl.close();
      break;
    case "1":
      opcao1();
      break;
    case "2":
      opcao2();
      break;
    case "3":
      opcao3();
      break;
    default:
      console.log("Opção inválida");
      break;
  }
});

console.log("Sistema de controle de tráfego aéreo");
menu();
