   const addZero = n => {
    if(n.toString().length < 2) return "0".concat(n)
    return n;
}

const actualizarHora = ()=>{
    const time = new Date();
    let hora = addZero(time.getHours());
    let minutos = addZero(time.getMinutes());
    let segundos = addZero(time.getSeconds());
    document.querySelector(".horas").textContent = hora;
    document.querySelector(".minutos").textContent = minutos;
    document.querySelector(".segundos").textContent = segundos;
}
actualizarHora();

setInterval(actualizarHora, 1000);


