let checkbox = document.getElementById("tema-check");
let solLua = document.getElementById("sol-lua");
let tema = document.getElementById("tema");
let body = document.getElementById("body");
let root = document.documentElement;

tema.addEventListener("click", function iluminacao() {
    if (checkbox.checked) {
        root.style.setProperty("--cor-body", 'linear-gradient(to right, #252525 29%, transparent 29%), linear-gradient(to bottom, #111920, #323c46)');
        root.style.setProperty("--cor-logo", 'white');
        root.style.setProperty("--cor-main1", '#774069');


        tema.classList.add("noite-check");
        tema.classList.remove("dia-check");

        solLua.classList.add("lua");
        solLua.classList.remove("sol");

    }
    else {
        root.style.setProperty("--cor-body", 'linear-gradient(to right, #ffffff 29%, transparent 29%), linear-gradient(to bottom, #048cc2, #06a6e6 )');
        root.style.setProperty("--cor-logo", '#242424');
        root.style.setProperty("--cor-main1", '#fec24e');


        tema.classList.add("dia-check");
        tema.classList.remove("noite-check");

        solLua.classList.add("sol");
        solLua.classList.remove("lua");

    }
});
