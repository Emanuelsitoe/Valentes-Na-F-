document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const iconCheck = document.getElementById('iconCheck');

    // 1. Animação de entrada (fade-in e slide-up) do container
    setTimeout(() => {
        container.classList.add('loaded');
    }, 100); // Pequeno atraso para garantir que o CSS inicial seja aplicado
    
    // 2. Adiciona classe para restart/garantir animação do ícone
    // (Embora o CSS puro já faça a maior parte, isso garante consistência)
    iconCheck.style.display = 'block';
});