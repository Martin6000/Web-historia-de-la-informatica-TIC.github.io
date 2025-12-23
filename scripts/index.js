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
    const percent = 15;
    const heighttotal = document.body.scrollHeight - window.innerHeight;
    const newposition = window.scrollY + (heighttotal * percent / 100);

    window.scrollTo({
        top: newposition,
        behavior: "smooth"
    });
});
