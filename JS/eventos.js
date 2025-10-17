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

