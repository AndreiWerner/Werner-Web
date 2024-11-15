var cssElements = document.getElementsByClassName('b1');
var htmlElements = document.getElementsByClassName('b2');
var jsElements = document.getElementsByClassName('b3');
var baixo = document.getElementById('baixo');
var bt = document.getElementById('botao'); // Certifique-se de que o ID esteja correto.

const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
let index = 0;
let startX = 0;
let currentTranslate = 0;

// Início do toque
carouselImages.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  // Remove qualquer transição durante o toque
  carouselImages.style.transition = 'none';
});

// Movimento do dedo na tela
carouselImages.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  const moveX = touch.clientX - startX;

  // Atualiza o deslocamento da imagem
  currentTranslate = -index * 100 + (moveX / window.innerWidth) * 100;
  carouselImages.style.transform = `translateX(${currentTranslate}vw)`;
});

// Final do toque
carouselImages.addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const distance = touchEndX - startX;

  // Define uma transição suave para o ajuste final da posição
  carouselImages.style.transition = 'transform 0.3s ease';

  // Verifica se foi um deslize para a direita ou esquerda
  if (distance > 50 && index > 0) {
    index--; // Volta uma imagem
  } else if (distance < -50 && index < totalImages - 1) {
    index++; // Avança uma imagem
  }

  // Ajusta a posição final do carrossel
  carouselImages.style.transform = `translateX(-${index * 100}vw)`;
});

// Função para adicionar evento 'click' a cada elemento
function addClickListener(elements, tecnologia) {
  Array.from(elements).forEach(element => {
    element.addEventListener('click', () => mostrarDescricao(tecnologia));
  });
}

// Adicionando eventos de clique
addClickListener(cssElements, 'css');
addClickListener(htmlElements, 'html');
addClickListener(jsElements, 'js');
bt.addEventListener('click', sair);

// Função para mostrar a descrição
function mostrarDescricao(tecnologia) {
  baixo.style.width = '82%';
  baixo.style.height = '21vh';
  baixo.style.padding = '15px';
  baixo.style.margin = 'auto'
  baixo.style.marginLeft = '6%'
  baixo.style.marginBottom = '5%'
  

  if (tecnologia === "css") {
    baixo.style.border = '1px solid orange';
    baixo.innerText = "CSS (Cascading Style Sheets) é uma linguagem de estilo que define a aparência de páginas web, controlando cores, fontes, espaçamentos e layouts. Ele permite separar o conteúdo do design, facilitando a criação de sites visualmente atraentes e responsivos para diferentes dispositivos.";
  } else if (tecnologia === "html") {
    baixo.style.border = '1px solid lightblue';
    baixo.innerText = "HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar o conteúdo da web, organizando textos, imagens e links em uma página. Ele define a hierarquia e o layout básico, servindo como a fundação para o estilo com CSS e a interatividade com JavaScript.";
  } else if (tecnologia === "js") {
    baixo.style.border = '0.3px solid yellow';
    baixo.innerText = "JavaScript é uma linguagem de programação que torna as páginas web interativas. Ele permite animações, validação de dados e resposta às ações do usuário em tempo real, criando experiências dinâmicas. Com HTML e CSS, JavaScript amplia as possibilidades para páginas ricas em recursos ";
  }
}
