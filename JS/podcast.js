
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
fetch("../JSON/podcast.json")
.then(response => response.json())
  .then(videos => {
    const container = document.getElementById('podcast');

    // Renderiza os vídeos
    videos.forEach(video => {
      const div = document.createElement('div');
      div.classList.add('video');
      div.innerHTML = `
        <iframe src="${video.link}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
        <h3>${video.titulo}</h3>
      `;
      container.appendChild(div);
    });

    // 🔍 Parte de FILTRAGEM
    const search = document.querySelector(".input");
    search.addEventListener("input", () => {
      const termo = search.value.toLowerCase();
      const videosDiv = container.querySelectorAll(".video");

      videosDiv.forEach(div => {
        const titulo = div.querySelector("h3").textContent.toLowerCase();
        if (titulo.includes(termo)) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      });
    });
  })
  .catch(error => console.error('Erro ao carregar vídeos:', error));