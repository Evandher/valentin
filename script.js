document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("responseMessage").innerText = "¡Sabía que dirías que sí! ❤️😍";
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    let button = this;

    // Definir límites para que no se salga de la pantalla
    let maxX = window.innerWidth - button.clientWidth;
    let maxY = window.innerHeight - button.clientHeight;

    // Generar nuevas coordenadas aleatorias dentro de los límites
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    // Mover el botón "No" a la nueva posición
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
});


function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${Math.random() * window.innerHeight}px`;
    heart.style.fontSize = `${Math.random() * 30 + 10}px`;
    heart.style.opacity = Math.random();
    heart.style.transition = "all 4s ease-out";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(-100vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Generar corazones cada 500ms
setInterval(createHeart, 500);

document.getElementById("yesButton").addEventListener("click", function() {
    const message = document.getElementById("responseMessage");
    message.innerText = "¡Sabía que dirías que sí! ❤️😍";
    message.style.fontSize = "2rem";
    message.style.animation = "zoomIn 1s ease-in-out";

    // Lanzar confeti
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
});

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.innerHTML = "✨";
    confetti.style.position = "fixed";
    confetti.style.left = `${Math.random() * window.innerWidth}px`;
    confetti.style.top = `${Math.random() * window.innerHeight}px`;
    confetti.style.fontSize = `${Math.random() * 20 + 10}px`;
    confetti.style.opacity = Math.random();
    confetti.style.transition = "all 3s ease-out";
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.style.transform = `translateY(100vh) rotate(${Math.random() * 360}deg)`;
        confetti.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Reproducir la canción cuando pase el mouse sobre el "Sí"
document.getElementById("yesButton").addEventListener("mouseover", function() {
    document.getElementById("loveSong").play();
});
