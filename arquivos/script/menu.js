let menu_hbg = document.getElementById("menu-hbg");
let menu_fechar = document.getElementById("menu-fechar");
let menu_tela = document.getElementById("menu_tela");
let atalho_sobre = document.getElementById("atalho_sobre");
let atalho_projetos = document.getElementById("atalho_projetos");

let corpo = document.getElementsByTagName("body");

menu_tela.style.setProperty("display", 'none');

menu_hbg.addEventListener("click", function abrir() {
    if(menu_tela.style.getPropertyValue("display") == "none"){
        menu_tela.style.setProperty("display", 'flex');
    } else {
        menu_tela.style.setProperty("display", 'none');
    }
})

menu_fechar.addEventListener("click", function fechar() {
    if(menu_tela.style.getPropertyValue("display") == "flex"){
        menu_tela.style.setProperty("display", 'none');
    } else {
        menu_tela.style.setProperty("display", 'flex');
    }
})

atalho_sobre.addEventListener("click", function fechar() {
    if(menu_tela.style.getPropertyValue("display") == "flex"){
        menu_tela.style.setProperty("display", 'none');
    } else {
        menu_tela.style.setProperty("display", 'flex');
    }
})

atalho_projetos.addEventListener("click", function fechar() {
    if(menu_tela.style.getPropertyValue("display") == "flex"){
        menu_tela.style.setProperty("display", 'none');
    } else {
        menu_tela.style.setProperty("display", 'flex');
    }
})