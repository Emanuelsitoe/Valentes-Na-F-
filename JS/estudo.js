// --- 1. Funcionalidade de Animação ao Scroll (Intersection Observer) ---

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe 'in-view' quando o elemento entra na tela
            entry.target.classList.add('in-view');
        }
        // Se quiser que a animação seja repetida sempre que o usuário rolar
        // para fora e voltar:
        // else {
        //     entry.target.classList.remove('in-view');
        // }
    });
}, {
    // Margem para iniciar a animação antes do elemento estar totalmente visível
    rootMargin: '0px 0px -100px 0px' 
});

// Observa todos os elementos com a classe 'animate-on-scroll'
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});


// --- 2. Funcionalidade do Menu Hamburger (Mobile) ---

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Alterna a classe 'active' para exibir/esconder o menu
    navLinks.classList.toggle('active');
    // Alterna a classe 'is-active' para animar o ícone do hamburger para 'X'
    hamburger.classList.toggle('is-active'); 

    // Bloqueia o scroll do body quando o menu está aberto no mobile
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Opcional: Fechar o menu ao clicar em um link (útil para navegação interna)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('is-active');
        document.body.style.overflow = '';
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
        /*function closeModal() {
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
        });*/
        
        // Mostrar Inscrição por padrão
        document.addEventListener('DOMContentLoaded', () => {
             document.getElementById('inscricao-form').classList.add('active');
        });