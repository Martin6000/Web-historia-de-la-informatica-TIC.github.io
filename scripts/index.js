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
    const amplitud = 10;
    const y = Math.sin(t) * amplitud; 
    boton.style.transform = `translateY(${-y}px)`;
    t += 0.03;
    requestAnimationFrame(rebote);
}

rebote();

boton.addEventListener("click", () => {
    const porcentaje = 25;
    const alturaTotal = document.body.scrollHeight - window.innerHeight;
    const nuevaPosicion = window.scrollY + (alturaTotal * porcentaje / 100);

    window.scrollTo({
        top: nuevaPosicion,
        behavior: "smooth"
    });
});
