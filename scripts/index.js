function crearEstrellas() {
    const container = document.getElementById('space-container');
    const cantidadEstrellas = 150;

    for (let i = 0; i < cantidadEstrellas; i++) {
        const estrella = document.createElement('div');
        estrella.classList.add('star');

        // Posición aleatoria
        estrella.style.left = `${Math.random() * 100}%`;
        estrella.style.top = `${Math.random() * 100}%`;

        const size = Math.random() * 2 + 1;
        estrella.style.width = `${size}px`;
        estrella.style.height = `${size}px`;

        estrella.style.animationDuration = `${Math.random() * 3 + 1}s`;
        estrella.style.animationDelay = `${Math.random() * 2}s`;

        container.appendChild(estrella);
    }
}
window.onload = crearEstrellas;

function descargarJuego() {
    mostrarToast();
    const urlDelJuego = "https://github.com/4B1M3L3TH/CosmoDex/releases/download/Juego/CosmoDex.apk";

    setTimeout(() => {
        const a = document.createElement('a');
        a.href = urlDelJuego;
        a.download = 'App/CosmoDex.apk';

        document.body.appendChild(a);
        a.click();

        // Limpieza del enlace temporal
        document.body.removeChild(a);
    }, 1500);
}
function mostrarToast() {
    const toast = document.getElementById("toast");
    toast.className = "show";
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 3500);
}
