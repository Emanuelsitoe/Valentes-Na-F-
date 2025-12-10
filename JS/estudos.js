// Animação de rolagem suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Se o menu mobile estiver aberto, fecha ele após clicar em um link
            if (document.body.classList.contains('nav-open')) {
                document.body.classList.remove('nav-open');
                document.querySelector('.menu-toggle').classList.remove('active');
            }
        });
    });

    // Menu Hamburger para Responsividade
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('.header');

    menuToggle.addEventListener('click', function() {
        header.classList.toggle('nav-open');
        this.classList.toggle('active'); // Adiciona/remove classe para animação do hambúrguer
    });


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
        /*function showModal(message) {
            document.getElementById('modalMessage').textContent = message;
            document.getElementById('successModal').style.display = 'flex';
        }

        // JS para Esconder Modal
        function closeModal() {
            document.getElementById('successModal').style.display = 'none';
        }*/

        // 1. Lógica para o Formulário de Inscrição
       /* document.getElementById('formInscricao').addEventListener('submit', function(e) {
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
        });*/
        
        // Mostrar Inscrição por padrão
        document.addEventListener('DOMContentLoaded', () => {
             document.getElementById('inscricao-form').classList.add('active');
        });