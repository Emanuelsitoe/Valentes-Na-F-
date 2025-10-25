const btn = document.querySelector(".hamburger");
const menu = document.getElementById("menuMobile");

btn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    
});

    // Fechar ao clicar fora
menu.addEventListener("click", e => {
    if(e.target === menu){ 
        menu.style.display = "none"; 
    }
});

//Pesquisa
fetch("../JSON/precacoes.json")
const pregacoes = document.querySelector("#pregacoes");


/*const displayVideo = data => {
    pregacoes.innerHTML ="";
    data.forEach(video => {
        pregacoes.innerHTML += ` 
            <div class="video">
              <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
              <h3>${video.titulo}</h3>
            </div>
        `
    });
}

window.addEventListener("load", displayVideo.bind(null, data))*/


fetch('../JSON/precacoes.json')
  .then(response => response.json())
  .then(videos => {
    const container = document.getElementById('pregacoes');
    videos.forEach(video => {
      const div = document.createElement('div');
      div.classList.add('video');
      div.innerHTML = `
        <iframe src="${video.link}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
        <h3>${video.titulo}</h3>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => console.error('Erro ao carregar vídeos:', error));

const search = document.querySelector(".input");

const pesquisar = videos.filter(s => s.titulo.toLocaleLowerCase())
