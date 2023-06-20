function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
}

// Obtém todas as tabelas
var tables = document.querySelectorAll('.folder');

// Defina uma variável para rastrear o número atual de tabelas
var currentPage = 1;

// Defina o número total de tabelas
var totalTables = 16; // Exemplo: 16 tabelas no total

// Defina o número de tabelas a serem carregadas por página
var tablesPerPage = 8;

// Função para carregar novas tabelas com base no índice inicial e final
function loadTabelas(startIndex, endIndex) {
    // Obtém o contêiner das tabelas
    var tableContainer = document.getElementById('tableContainer');

    // Limpa o conteúdo atual das tabelas
    tableContainer.innerHTML = '';

    // Loop para criar e adicionar as novas tabelas
    for (var i = startIndex; i < endIndex; i++) {
        var table = document.createElement('div');
        table.classList.add('folder');
        table.innerText = 'Tabela ' + (i + 1) + ': ID #XXXXXXX';
        tableContainer.appendChild(table);
    }
}

// Função para carregar a próxima página de tabelas
function nextPage() {
    // Verifica se há mais tabelas a serem carregadas
    if (currentPage * tablesPerPage < totalTables) {
        // Calcula o índice inicial e final das tabelas a serem carregadas
        var startIndex = currentPage * tablesPerPage;
        var endIndex = startIndex + tablesPerPage;

        // Chama uma função para carregar as novas tabelas
        loadTables(startIndex, endIndex);

        // Atualiza o número da página atual
        currentPage++;
    }
}

// Função para carregar a página anterior de tabelas
function anterior() {
    // Verifica se há tabelas anteriores para serem carregadas
    if (currentPage > 1) {
        // Calcula o índice inicial e final das tabelas a serem carregadas
        var endIndex = (currentPage - 1) * tablesPerPage;
        var startIndex = endIndex - tablesPerPage;

        // Chama uma função para carregar as tabelas da página anterior
        loadTables(startIndex, endIndex);

        // Atualiza o número da página atual
        currentPage--;
    }
}

function openpopup() {
    document.getElementById("popupContainer").style.display = "block";
}

function closepopup() {
    document.getElementById("popupContainer").style.display = "none";
}

tables.forEach(function (table) {
    table.addEventListener('click', function () {
        openpopup();
    });
});
