let checkbox = document.getElementById("tema-check");
let solLua = document.getElementById("sol-lua");
let tema = document.getElementById("tema");
let body = document.getElementById("body");
let root = document.documentElement;

tema.addEventListener("click", function iluminacao() {
    if (checkbox.checked) {
        console.log("noite");

        body.classList.add("noite-body");
        body.classList.remove("dia-body");


        tema.classList.add("noite-check");
        tema.classList.remove("dia-check");

        solLua.classList.add("lua");
        solLua.classList.remove("sol");

        root.style.setProperty("--cor-logo", 'white');
    }
    else {
        console.log("dia");
        body.classList.add("dia-body");
        body.classList.remove("noite-body");


        tema.classList.add("dia-check");
        tema.classList.remove("noite-check");

        solLua.classList.add("sol");
        solLua.classList.remove("lua");

        root.style.setProperty("--cor-logo", '#242424');

    }
});
