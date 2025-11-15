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
