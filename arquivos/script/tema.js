let checkbox = document.getElementById("tema-check");
let sol = document.getElementById("sol");
let lua = document.getElementById("lua");
let tema = document.getElementById("tema");
let body = document.getElementById("body");

tema.addEventListener("click", function iluminacao() {
    if (checkbox.checked) {
        console.log("noite");

        body.classList.add("noite-body");
        body.classList.remove("dia-body");


        tema.classList.add("noite-check");
        tema.classList.remove("dia-check");

        lua.classList.add("lua");
        sol.classList.remove("sol");
    }
    else {
        console.log("dia");
        body.classList.add("dia-body");
        body.classList.remove("noite-body");


        tema.classList.add("dia-check");
        tema.classList.remove("noite-check");

        sol.classList.add("sol");
        lua.classList.remove("lua");
    }
});
