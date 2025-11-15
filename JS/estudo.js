
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
`844454119 Onesimo`
// JS para Mostrar/Esconder Formulários
        function toggleForm(id) {
            const element = document.getElementById(id);
            const isVisible = element.classList.contains('active');
            
            // Fecha todos os formulários
            document.querySelectorAll('.form-content').forEach(form => {
                form.classList.remove('active');
            });

            // Se não estava visível, mostra o formulário clicado
            if (!isVisible) {
                element.classList.add('active');
            }
        }
        
        // JS para Mostrar Modal
        function showModal(message) {
            document.getElementById('modalMessage').textContent = message;
            document.getElementById('successModal').style.display = 'flex';
        }

        // JS para Esconder Modal
        function closeModal() {
            document.getElementById('successModal').style.display = 'none';
        }

        // 1. Lógica para o Formulário de Inscrição
        document.getElementById('formInscricao').addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            showModal('Inscrição enviada com sucesso! Aguarde nosso contato.');
            
            // Limpar o formulário
            this.reset();
        });

        // 2. Lógica para o Formulário de Resumo
        document.getElementById('formResumo').addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            showModal('Resumo da aula enviado com sucesso! Parabéns pelo seu estudo.');
            
            // Limpar o formulário
            this.reset();
        });
        
        // Mostrar Inscrição por padrão
        document.addEventListener('DOMContentLoaded', () => {
             document.getElementById('inscricao-form').classList.add('active');
        });