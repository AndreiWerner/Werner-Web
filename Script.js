
var css = document.getElementsByClassName('b1')
var html = document.getElementsByClassName('b2')
var js = document.getElementsByClassName('b3')
var baixo = document.getElementById('baixo')

css.addEventListener('click', sair)
html.addEventListener('click', sair)
js.addEventListener('click', sair)
bt.addEventListener('click', sair)






function mostrarDescricao(tecnologia) {

baixo.style.width = '50vw'
baixo.style.height =  '25vh'
baixo.style.padding = '23px'
baixo.style.marginTop = '20px'
baixo.style.marginBottom = '5px'
baixo.style.marginLeft = '55px'
baixo.style.fontSize = '74%'

    const descricao = document.getElementById("baixo")

    if (tecnologia === "css") {

        baixo.style.border = '1px solid orange'

        descricao.innerText = "CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para descrever a apresentação de documentos HTML. Ela permite controlar o layout, as cores e as fontes de uma página web, aplicando estilos a elementos através de seletores. Com o CSS, é possível criar designs responsivos que se adaptam a diferentes tamanhos de tela, melhorando a experiência do usuário. Junto com HTML e JavaScript, CSS é essencial para desenvolver interfaces atraentes.";

    } else if (tecnologia === "html") {

        baixo.style.border = '1px solid blue'

        descricao.innerText = "HTML (HyperText Markup Language) é a linguagem usada para estruturar conteúdo na web, organizando textos, imagens e links com tags como `<h1>` e `<p>`. É fundamental para a criação de sites, pois define a estrutura e o layout, trabalhando em conjunto com CSS e JavaScript para proporcionar interatividade e estilo.";

    } else if (tecnologia === "js") {
        
        baixo.style.border = '1px solid yellow'

        descricao.innerText = "JavaScript é uma linguagem de programação essencial para a web, usada para tornar páginas interativas e dinâmicas. Ela permite manipular elementos em tempo real, responder às ações dos usuários e adicionar efeitos visuais. Executada tanto no navegador quanto no servidor com Node.js, JavaScript é versátil e suporta o desenvolvimento de aplicativos completos e interfaces modernas com frameworks como React e Vue.js.";

    }
}