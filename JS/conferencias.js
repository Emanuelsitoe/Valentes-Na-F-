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

//Pesquisa
fetch('../JSON/conferencias.json')
  .then(response => response.json())
  .then(videos => {
    const container = document.getElementById('conferencia');

    // Renderiza os vídeos
    videos.forEach(video => {
      const div = document.createElement('div');
      div.classList.add('video');
      div.innerHTML = `
       <div class="video-card" >
            <div class="video-thumbnail">
                <div class="video-thumbnail-placeholder">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="video-info">
                <h3>${video.titulo}</h3>
                    <p>${video.descricao}</p>
                <a href="${video.url}" class="watch-link"><iclass="fas fa-eye"></i> Assistir Agora</a>
            </div>
        </div>
      `;
      container.appendChild(div);
    });

    //  Parte de FILTRAGEM
    const search = document.querySelector(".input");
    search.addEventListener("input", () => {
      const termo = search.value.toLowerCase();
      const videosDiv = container.querySelectorAll(".video");

      videosDiv.forEach(div => {
        const titulo = div.querySelector("h3").textContent.toLowerCase();
        const descricao = div.querySelector("p").textContent.toLowerCase();
        if (titulo.includes(termo)) {
          div.style.display = "flex";
        } else {
          div.style.display = "none";
        }
        if (descricao.includes(termo)) {
          div.style.display = "flex";
        }
        
      });
    });
  })
  .catch(error => console.error('Erro ao carregar vídeos:', error));
