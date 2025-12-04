document.addEventListener('DOMContentLoaded', function() {
    // --- VARIÁVEL FIXA DO VÍDEO ---
    // **IMPORTANTE: SUBSTITUA ESTA VARIÁVEL PELO LINK DE INCORPORAÇÃO (EMBED) DO SEU VÍDEO**
    // Ex: "https://www.youtube.com/embed/LIVE_STREAM_ID" ou um vídeo de placeholder
    const FIXED_VIDEO_URL = "https://www.youtube.com/embed/i7iHphYgsTo?si=EE2Japz2LNody9Se"; // Exemplo de placeholder

    // --- ELEMENTOS PRINCIPAIS ---
    const modal = document.getElementById('videoModal');
    const openBtn = document.getElementById('openModalBtn');
    const youtubePlayer = document.getElementById('youtubePlayer');
    const closeBtn = document.getElementById('closeModalBtn');
    
    // --- ELEMENTOS DA SUB-MODAL DE DOAÇÃO ---
    const donationModal = document.getElementById('donationModal');
    const openDonationModalLink = document.getElementById('openDonationModalLink'); 
    const closeDonationBtn = document.getElementById('closeDonationModalBtn');
    const copyBtns = document.querySelectorAll('.copy-btn');
    
    // --- 1. LÓGICA DA MODAL DE VÍDEO (PRINCIPAL) ---
    
    // Abrir Modal de Vídeo (Usa o link fixo)
    openBtn.onclick = function() {
        modal.style.display = "block";
        // Define o src do iframe com o URL fixo e ativa autoplay
        youtubePlayer.src = FIXED_VIDEO_URL + "?autoplay=1&mute=0";
    }

    // Fechar Modal de Vídeo (Botão X)
    closeBtn.onclick = function(e) {
        e.preventDefault(); 
        modal.style.display = "none";
        // Limpa o src do iframe para parar a reprodução
        youtubePlayer.src = "";
    }
    
    // --- 2. LÓGICA DA SUB-MODAL DE DOAÇÃO ---

    // Abrir Modal de Doação
    openDonationModalLink.onclick = function(e) {
        e.preventDefault(); 
        donationModal.style.display = "block";
    }

    // Fechar Modal de Doação (Botão X)
    closeDonationBtn.onclick = function(e) {
        e.preventDefault();
        donationModal.style.display = "none";
    }

    // --- 3. GESTÃO DE FECHAMENTO GLOBAL (CLIQUE E ESC) ---

    // Fechamento ao clicar fora
    window.onclick = function(event) {
        if (event.target == donationModal) {
            donationModal.style.display = "none";
        }
        if (event.target == modal) {
            modal.style.display = "none";
            youtubePlayer.src = "";
        }
    }
    
    // Fechamento com Tecla ESC (prioriza fechar a sub-modal primeiro)
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
             if (donationModal.style.display === "block") {
                donationModal.style.display = "none";
            } else if (modal.style.display === "block") {
                modal.style.display = "none";
                youtubePlayer.src = "";
            }
        }
    });

    // --- 4. LÓGICA DE COPIAR CHAVE PIX ---
    
    copyBtns.forEach(button => {
        button.onclick = function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            const valueToCopy = targetElement.textContent.trim();
            
            // Usa a API Clipboard (método moderno)
            navigator.clipboard.writeText(valueToCopy)
                .then(() => {
                    this.textContent = 'Copiado! 🎉';
                    setTimeout(() => {
                        this.textContent = 'Copiar Chave';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Falha ao copiar:', err);
                    alert('Falha ao copiar a chave. Por favor, copie manualmente.');
                });
        }
    });
});




    
    // Mantenha o restante do código do script.js (lógica da modal de vídeo)
