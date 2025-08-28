const links = document.querySelectorAll('nav a');
    const conteudos = document.querySelectorAll('.conteudo');

    links.forEach(link => {
      link.addEventListener('click', () => {
        // Remover classe "active" de todos os links
        links.forEach(l => l.classList.remove('active'));
        // Adicionar "active" ao link clicado
        link.classList.add('active');

        // Esconder todos os conteúdos
        conteudos.forEach(c => c.classList.remove('ativo'));
        // Mostrar o conteúdo correspondente
        const alvo = link.getAttribute('data-alvo');
        document.getElementById(alvo).classList.add('ativo');
      });
    });