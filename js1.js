// Função para obter uma nota válida do usuário
function obterNotaValida() {
    let nota;
    do {
      nota = prompt("Digite uma nota válida (ou digite 'stop' para encerrar):");
      if (nota.toLowerCase() === 'stop') {
        return null; // Retorna null para indicar que o processo foi interrompido
      }
    } while (isNaN(nota) || nota < 0 || nota > 10); // A nota deve ser um número entre 0 e 10
  
    return parseFloat(nota);
  }
  
  // Função para calcular a média de uma disciplina com base nas notas fornecidas
  function calcularMedia(disciplina, numAvaliacoes) {
    let somaNotas = 0;
  
    for (let i = 0; i < numAvaliacoes; i++) {
      let nota = obterNotaValida();
      if (nota === null) {
        return null; // Retorna null se o usuário desejar parar
      }
      somaNotas += nota;
    }
  
    let mediaInicial = somaNotas / numAvaliacoes;
  
    return { disciplina, mediaInicial };
  }
  
  // Lista de disciplinas
  let disciplinas = ["Matemática", "Português", "Ciências", "História", "Geografia", "Inglês", "Artes", "Educação Física", "Física", "Química", "Biologia", "Filosofia", "Sociologia"];
  
  // Array para armazenar os resultados
  let resultados = [];
  
  // Calcular a média para cada disciplina
  for (let disciplina of disciplinas) {
    let resultado = calcularMedia(disciplina, 4);
    if (resultado === null) {
      alert("Processo interrompido pelo usuário.");
      break; // Interrompe o loop se o usuário desejar parar
    }
    resultados.push(resultado);
  }
  // Criar e exibir a tabela
let table = document.createElement("table");
table.style.marginTop = "200px"; // Adiciona uma margem superior à tabela

let headerRow = table.insertRow(0);

// Cabeçalho da tabela
let disciplinaHeader = headerRow.insertCell(0);
disciplinaHeader.innerHTML = "<b>Disciplina</b>";

let mediaHeader = headerRow.insertCell(1);
mediaHeader.innerHTML = "<b>Média Final</b>";

// Linhas da tabela com os resultados
for (let i = 0; i < resultados.length; i++) {
  let row = table.insertRow(i + 1);

  let disciplinaCell = row.insertCell(0);
  disciplinaCell.textContent = resultados[i].disciplina;

  let mediaCell = row.insertCell(1);
  mediaCell.textContent = resultados[i].mediaInicial.toFixed(2); // Limita a 2 casas decimais
}

// Adiciona a tabela ao corpo do documento
document.body.appendChild(table);