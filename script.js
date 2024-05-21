// Exemplo de JavaScript para rolagem suave para âncoras
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            const targetId = this.getAttribute('href').substring(1); // Obtém o ID da seção alvo
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Ajusta para o cabeçalho fixo
                    behavior: 'smooth' // Rolagem suave
                });
            }
        });
    });
});
