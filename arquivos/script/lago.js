var root = document.documentElement;
    const circle = document.getElementById("circle");
    const over = document.getElementById("over");

    document.addEventListener("click", evento => {
        

        const x = evento.pageX / innerWidth;
        const y = evento.pageY / innerHeight;

        root.style.setProperty("--m-x", x);
        root.style.setProperty("--m-y", y);

        over.appendChild(document.createElement('div'));
        
        setTimeout(() => { over.removeChild(over.firstChild); }, 2800);
    })