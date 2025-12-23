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

const appleImage = document.querySelector(".apple-image");
const ibmImage = document.querySelector(".ibm-image");
var applefactor = 1;
var ibmfactor = 1;
function imagenClickapple(event) {
    applefactor = applefactor * -1;
    if (applefactor === 1) {
        appleImage.src = "images/Apple2.jpg";
    }
    if (applefactor === -1) {
        appleImage.src = "images/IBMPC.jpg";
    }
}
function imagenClickibm(event) {
    ibmfactor = ibmfactor * -1;
    if (ibmfactor === 1) {
        ibmImage.src = "images/IBMPC.jpg";
    }
    if (ibmfactor === -1) {
        ibmImage.src = "images/Apple2.jpg";
    }
}
appleImage.addEventListener("click", imagenClickapple);
ibmImage.addEventListener("click", imagenClickibm);
