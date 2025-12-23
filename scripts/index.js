const barra = document.getElementById("barra-progreso");

function actualizarBarra() {
    const scrollTop = window.scrollY;
    const alturaTotal = document.body.scrollHeight - window.innerHeight;
    const porcentaje = (scrollTop / alturaTotal) * 100;
    barra.style.width = porcentaje + "%";
}

window.addEventListener("scroll", actualizarBarra);

const boton = document.querySelector(".butondown");
let t = 0;

function rebote() {
    const y = Math.sin(t) * 5;
    boton.style.transform = `translateY(${-y}px)`;
    t += 0.1;
    requestAnimationFrame(rebote);
}

rebote();
