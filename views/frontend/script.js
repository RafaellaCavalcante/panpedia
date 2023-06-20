/* Cria a barra de pesquisa, botão de busca e os filtros */
const searchInput = document.getElementById('inputPesquisa');
const searchBtn = document.getElementById('botaoPesquisa');
var darkMode = false;

$(document).ready(function() {
    // Verifica se o modo escuro está ativado ou não
    darkMode = localStorage.getItem("darkMode")  === 'true'; 

    // Esconde as imagens 3 e 4
    $('#imagem3').hide();
    $('#imagem4').hide();
    $('#estrelinhas').hide();

    // Obtém a referência ao elemento body
    var element = document.body;

    var checkbox = document.getElementById("bolabtn");

    checkbox.checked = darkMode;


    if (darkMode) {
        // Se o modo escuro estiver ativado, mostra as imagens 3 e 4, e adiciona a classe "darkMode" ao body
        $('#imagem1').hide();
        $('#imagem3').show();
        $('#imagem2').hide();
        $('#imagem4').show();
        $('#estrelinhas').show();
        element.classList.add("darkMode");
    } else {
        // Caso contrário, mostra as imagens 1 e 2
        $('#imagem1').show();
        $('#imagem3').hide();
        $('#imagem2').show();
        $('#imagem4').hide();
        $('#estrelinhas').hide();
    }
});

function funcaoDarkMode() {
    // Obtém a referência ao elemento body
    var element = document.body;

    if (darkMode === false) {
        // Se o modo escuro estiver desativado, esconde as imagens 1 e 2, mostra as imagens 3 e 4, 
        // define darkMode como true, salva o valor em localStorage e adiciona a classe "darkMode" ao body
        $('#imagem1').hide();
        $('#imagem3').show();
        $('#imagem2').hide();
        $('#imagem4').show();
        $('#estrelinhas').hide();
        darkMode = true;
        console.log('darkMode', darkMode);
        localStorage.setItem("darkMode", darkMode);
        element.classList.add("darkMode");
    } else {
        // Caso contrário, mostra as imagens 1 e 2, esconde as imagens 3 e 4,
        // define darkMode como false, salva o valor em localStorage e remove a classe "darkMode" do body
        $('#imagem1').show();
        $('#imagem3').hide();
        $('#imagem2').show();
        $('#imagem4').hide();
        $('#estrelinhas').show();
        darkMode = false;
        localStorage.setItem("darkMode", darkMode);
        element.classList.remove("darkMode");
    }
    
}
