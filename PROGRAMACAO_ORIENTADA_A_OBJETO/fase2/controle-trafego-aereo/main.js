const readline = require("readline");
const Piloto = require("./src/models/Piloto");
const ServicoPilotos = require("./src/services/ServicoPilotos");
const AeronaveParticular = require("./src/models/AeronaveParticular");
const AeronaveComercialPassageiros = require("./src/models/AeronaveComercialPassageiros");
const AeronaveComercialCarga = require("./src/models/AeronaveComercialCarga");
const ServicoAeronaves = require("./src/services/ServicoAeronaves");
const Aerovia = require("./src/models/Aerovia");
const ServicoAerovias = require("./src/services/ServicoAerovias");
const ServicoPlanosDeVoo = require("./src/services/ServicoPlanosDeVoo");

// Criação dos serviços
const servicoPilotos = new ServicoPilotos();
const servicoAeronaves = new ServicoAeronaves();
const servicoAerovias = new ServicoAerovias();
const servicoPlanosDeVoo = new ServicoPlanosDeVoo(
  servicoPilotos,
  servicoAeronaves,
  servicoAerovias
);

// Adicionando pilotos ao serviço
servicoPilotos.adicionarPiloto("123", "João Silva", true);
servicoPilotos.adicionarPiloto("456", "Maria Oliveira", false);

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

const aerovia1 = new Aerovia("POA-RJ", "Porto Alegre", "Rio de Janeiro", 1000);
const aerovia2 = new Aerovia("SP-BA", "São Paulo", "Salvador", 1500);
servicoAerovias.adicionarAerovia(aerovia1);
servicoAerovias.adicionarAerovia(aerovia2);

// Funções para exibir informações
function exibirPilotos() {
  console.log("Lista de pilotos:", servicoPilotos.listarPilotos());
  menu();
}

function exibirAeronaves() {
  console.log("Lista de aeronaves:", servicoAeronaves.listarAeronaves());
  menu();
}

function exibirAerovias() {
  console.log("Lista de aerovias:", servicoAerovias.listarAerovias());
  menu();
}

// Função para aprovar plano de voo
function aprovarPlanoDeVoo() {
  const planoAprovado = servicoPlanosDeVoo.aprovarPlanoDeVoo(
    "123", // Matrícula do piloto
    "PT-ABC", // Prefixo da aeronave
    new Date(), // Data do voo (exemplo: data atual)
    "14:00", // Horário do voo
    "POA-RJ", // Identificador da aerovia
    26000 // Altitude do voo
  );

  if (typeof planoAprovado === "string") {
    console.log(planoAprovado);
  } else {
    console.log("Plano de voo aprovado:", planoAprovado);
  }
  menu();
}
// Configuração do readline para interação com o usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.log("\nMenu:");
  console.log("1. Listar Pilotos");
  console.log("2. Listar Aeronaves");
  console.log("3. Listar Aerovias");
  console.log("4. Aprovar Plano de Voo (Exemplo)");
  console.log("0. Sair");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao.trim()) {
      case "0":
        console.log("Saindo...");
        rl.close();
        break;
      case "1":
        exibirPilotos();
        break;
      case "2":
        exibirAeronaves();
        break;
      case "3":
        exibirAerovias();
        break;
      case "4":
        aprovarPlanoDeVoo();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        menu();
        break;
    }
  });
}

// Início do programa
console.log("Sistema de Controle de Tráfego Aéreo\n");
menu();
