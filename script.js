// Screen navigation

const screens = document.querySelectorAll(".screen");

function showScreen(id) {

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(id);

    if (nextScreen) {
        nextScreen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Screen 1 → Screen 2

document.getElementById("openBtn").addEventListener("click", function() {
    showScreen("invitation");
});


// Screen 2 → Screen 3

document.getElementById("letterBtn").addEventListener("click", function() {
    showScreen("letter");
});


// Screen 3 → Screen 4

document.getElementById("diyaBtn").addEventListener("click", function() {
    showScreen("diyaScreen");
});


// Light the diya

let diyaLit = false;

document.getElementById("lightBtn").addEventListener("click", function() {

    const diya = document.getElementById("diya");
    const message = document.getElementById("diyaMessage");
    const button = document.getElementById("lightBtn");

    if (!diyaLit) {

        diya.classList.add("lit");

        message.textContent =
            "May all your little wishes find their way to you. ♡";

        button.textContent = "See your final surprise ✨";

        diyaLit = true;

    } else {

        showScreen("finalScreen");

        startFireworks();

    }

});


// Floating golden particles

const particleContainer = document.getElementById("particles");

for (let i = 0; i < 30; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (6 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        (Math.random() * 10) + "s";

    particle.style.opacity = Math.random();

    particleContainer.appendChild(particle);

}


// Fireworks

function startFireworks() {

    const container = document.getElementById("fireworks");

    function createBurst() {

        const centerX = Math.random() * window.innerWidth;
        const centerY = Math.random() * window.innerHeight * 0.65;

        for (let i = 0; i < 24; i++) {

            const spark = document.createElement("div");

            spark.classList.add("spark");

            const angle = (Math.PI * 2 * i) / 24;
            const distance = 45 + Math.random() * 90;

            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            spark.style.left = centerX + "px";
            spark.style.top = centerY + "px";

            spark.style.setProperty("--x", x + "px");
            spark.style.setProperty("--y", y + "px");

            container.appendChild(spark);

            setTimeout(function() {
                spark.remove();
            }, 1400);

        }

    }

    createBurst();

    setTimeout(createBurst, 400);
    setTimeout(createBurst, 900);
    setTimeout(createBurst, 1500);
    setTimeout(createBurst, 2200);

}