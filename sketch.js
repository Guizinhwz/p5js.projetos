let generoFantasia;
let generoFiccaoCientifica;
let generoAcao;
let generoDrama;

// Variáveis para imagens
let imgNetflixlogo, imgMaxlogo, imgGloboplaylogo, imgDisneyPluslogo;
let imgPadrao; // Imagem padrão quando nenhum gênero selecionado

function preload() {
  // Carregar as imagens
  imgNetflixlogo = loadImage('imgNetflixlogo.webp');
  imgGloboplaylogo = loadImage('imgGloboplaylogo.webp');
  imgMaxlogo = loadImage('imgMaxlogo.webp');
  imgDisneyPluslogo = loadImage('imgDisneyPluslogo.webp');
  imgPadrao = loadImage('imgPadrao.webp'); // Imagem padrão
}

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Sua melhor Escolha Você encontra Aqui").style('color', 'white');
  createSpan("PRIMEIRO SELECIONE O SEU GENERO FAVORITO E VEJA OS fILMES RECOMENDADOS PARA VOCÊ").style('color', 'white');
  
  // Checkbox para os gêneros
  generoFantasia = createCheckbox("Gênero fantasia").style('color', 'white');
  generoFiccaoCientifica = createCheckbox("Gênero ficção científica").style('color', 'white');
  generoAcao = createCheckbox("Gênero ação").style('color', 'white');
  generoDrama = createCheckbox("Gênero drama").style('color', 'white');

  textAlign(CENTER, CENTER); // Centraliza texto
}

function draw() {
  // Verifica os estados das checkboxes
  let GeneroFantasia = generoFantasia.checked();
  let GeneroFiccaoCientifica = generoFiccaoCientifica.checked();
  let GeneroAcao = generoAcao.checked();
  let GeneroDrama = generoDrama.checked();

  // Define o fundo com base na seleção do usuário
  if (GeneroFiccaoCientifica) {
    background(imgMaxlogo);
  } else if (GeneroAcao) {
    background(imgNetflixlogo);
  } else if (GeneroDrama) {
    background(imgGloboplaylogo);
  } else if (GeneroFantasia) {
    background(imgDisneyPluslogo);
  } else {
    background(imgPadrao); // Imagem padrão quando nenhum gênero selecionado
    text("Bem-vindo ao Recomendador de Filmes!", width/2, height/2); // Texto no centro da imagem padrão
    textSize(42); // Tamanho do texto
    return; // Retorna para evitar a exibição da recomendação de filmes
  }

  // Gera a recomendação de filme com base na seleção do usuário
  let recomendacao = gerarRecomendacao(GeneroFantasia, GeneroFiccaoCientifica, GeneroAcao, GeneroDrama);

  // Configuração do texto
  fill(0); // Texto preto
  textSize(20); // Tamanho do texto
  text(recomendacao, width/2, height/2); // Exibe a recomendação no centro do canvas
}

function gerarRecomendacao(generoFantasia, generoFiccaoCientifica, generoAcao, generoDrama) {
  // Retorna o filme recomendado com base nos gêneros selecionados
  if (generoFiccaoCientifica) {
    return `
      1. Blade Runner 2049 - Classificação: 16 anos - Ano: 2017
      2. Interestelar - Classificação: 10 anos - Ano: 2014
      3. Duna - Classificação: 14 anos - Ano: 2021
      4. Matrix - Classificação: 14 anos - Ano: 1999
      5. A Chegada - Classificação: 12 anos - Ano: 2016
      6. Ex Machina: Instinto Artificial - Classificação: 14 anos - Ano: 2015
      7. Aniquilação - Classificação: 16 anos - Ano: 2018
      8. O Predestinado - Classificação: 16 anos - Ano: 2014
      9. O Homem do Futuro - Classificação: 12 anos - Ano: 2011
      10. Jogador Nº 1 - Classificação: 12 anos - Ano: 2018
    `;
  } else if (generoAcao) {
    return `
      1. Resgate - Classificação: 16 anos - Ano: 2020
      2. The Old Guard - Classificação: 16 anos - Ano: 2020
      3. Bright - Classificação: 16 anos - Ano: 2017
      4. Project Power - Classificação: 16 anos - Ano: 2020
      5. 6 Underground - Classificação: 16 anos - Ano: 2019
      6. Triple Frontier - Classificação: 16 anos - Ano: 2019
      7. Army of the Dead: Invasão em Las Vegas - Classificação: 18 anos - Ano: 2021
      8. Tyler Rake: Operação Resgate - Classificação: 16 anos - Ano: 2020
      9. Círculo de Fogo: A Revolta - Classificação: 12 anos - Ano: 2018
      10. Power - Classificação: 16 anos - Ano: 2020
    `;
  } else if (generoDrama) {
    return `
      1. Bacurau - Classificação: 16 anos - Ano: 2019
      2. Central do Brasil - Classificação: 12 anos - Ano: 1998
      3. Aquarius - Classificação: 16 anos - Ano: 2016
      4. O Filho Eterno - Classificação: 12 anos - Ano: 2016
      5. Que Horas Ela Volta? - Classificação: 12 anos - Ano: 2015
      6. Marighella - Classificação: 16 anos - Ano: 2019
      7. A Vida Invisível - Classificação: 16 anos - Ano: 2019
      8. Praia do Futuro - Classificação: 16 anos - Ano: 2014
      9. O Som ao Redor - Classificação: 16 anos - Ano: 2012
      10. Estômago - Classificação: 16 anos - Ano: 2007
    `;
  } else if (generoFantasia) {
    return `
      1. A Bela e a Fera - Classificação: Livre - Ano: 2017
      2. Aladdin - Classificação: Livre - Ano: 2019
      3. Malévola - Classificação: 10 anos - Ano: 2014
      4. Alice no País das Maravilhas - Classificação: 10 anos - Ano: 2010
      5. O Retorno de Mary Poppins - Classificação: Livre - Ano: 2018
      6. Dumbo - Classificação: Livre - Ano: 2019
      7. A Branca de Neve e os Sete Anões - Classificação: Livre - Ano: 1937
      8. Encantada - Classificação: Livre - Ano: 2007
      9. O Quebra-Nozes e os Quatro Reinos - Classificação: Livre - Ano: 2018
      10. Frozen 2 - Classificação: Livre - Ano: 2019
    `;
  } else {
    return "Bem vindo ao recomendador de filmes!";
  }
}
