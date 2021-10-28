let hora = document.getElementById("horario");
    function horaUpdate() {
    let valHora = new Date();
    let h=valHora.getHours();
    let m=valHora.getMinutes();

    if (m < 10) {m = "0" + m;}
    hora.innerHTML = h + ":" + m;
    setTimeout('horaUpdate()',500);
    }
    
    horaUpdate();