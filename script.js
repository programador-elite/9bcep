document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === '9bacesso' && password === '9bsenha') {
        window.location.href = 'calendar.html';
    } else {
        document.getElementById('error-message').innerText = 'Usuário ou senha incorretos.';
    }
});
document.getElementById("toggleMenu").addEventListener("click", function() {
    var sidebar = document.querySelector(".sidebar");
    var overlay = document.querySelector(".overlay"); // Seleciona a sobreposição
    sidebar.classList.toggle("hidden");
    overlay.classList.toggle("visible"); // Adiciona ou remove a classe visible
});

// Fecha o menu e a sobreposição ao clicar na sobreposição
document.querySelector(".overlay").addEventListener("click", function() {
    var sidebar = document.querySelector(".sidebar");
    var overlay = document.querySelector(".overlay");
    sidebar.classList.add("hidden");
    overlay.classList.remove("visible"); // Remove a classe visible
});