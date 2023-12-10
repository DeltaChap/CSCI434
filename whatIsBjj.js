
document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("animation-canvas");

    // Animation
    let xPos = 0;
    let startTime;

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