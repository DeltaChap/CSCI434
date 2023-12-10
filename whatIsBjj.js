
document.addEventListener("DOMContentLoaded", function(){
    const text = "What is Brazilian Jiu-Jitsu?";
    const textContainer = document.getElementById("handwriting-text");
    const canvas = document.getElementById("animation-canvas");
    const ctx = canvas.getContext("2d");

    // Splits text into individual characters and wraps each character in a span
    const characters = text.split("");
    const spannedText = characters.map(char => `<span>${char}</span>`).join("");

    textContainer.innerHTML = spannedText;

    // Animation
    let xPos = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "24px Courier New";
        ctx.fillText("What is Brazilian Jiu-Jitsu?", xPos, 50);
        xPos += 2;
        requestAnimationFrame(draw);
    }

    // Initial call to start the animation
    draw();
});