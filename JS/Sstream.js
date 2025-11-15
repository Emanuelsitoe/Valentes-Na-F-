document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão hamburger e o container dos links
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Adiciona o evento de clique ao botão
    hamburger.addEventListener('click', () => {
        // Alterna a classe 'open' no nav-links
        navLinks.classList.toggle('open');
        
        // Opcional: Alternar uma classe no próprio hamburger para animação de X
        hamburger.classList.toggle('open');
    });

    // Opcional: Fechar o menu ao clicar em um link (útil no mobile)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('open');
                hamburger.classList.remove('open');
            }
        });
    });
});