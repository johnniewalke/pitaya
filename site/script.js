// Script.js

// Movimento de luzes coloridas
const lights = document.querySelector('.lights');

function moveLights() {
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;

    lights.style.transform = `translate(${xPos}px, ${yPos}px)`;

    requestAnimationFrame(moveLights);
}

moveLights();

// Deslocamento de imagens
const images = document.querySelectorAll('.move-image');

function moveImages() {
    images.forEach((image) => {
        const xPos = Math.random() * (window.innerWidth - 380);
        const yPos = Math.random() * (window.innerHeight - 380);

        image.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });

    requestAnimationFrame(moveImages);
}

moveImages();
