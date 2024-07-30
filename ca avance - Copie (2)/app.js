document.addEventListener("DOMContentLoaded", () => {
    const snowContainer = document.getElementById("snow-container");

    function createSnowflake() {
        const snowflake = document.createElement("img");
        snowflake.src = "tete butters s.png"; // Assurez-vous que ce chemin est correct
        snowflake.className = "snowflake";
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = Math.random() * 5 + 5 + "s"; // Allonger la durée de l'animation
        snowflake.style.width = Math.random() * 10 + 10 + "px";
        snowflake.style.height = snowflake.style.width;

        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
        });

        snowContainer.appendChild(snowflake);
    }

    setInterval(createSnowflake, 2000); // Crée un flocon toutes les 2000 ms pour moins d'effet de neige

    const hiddenElements = document.querySelectorAll(".hidden");

    window.addEventListener('scroll', () => {
        hiddenElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('show');
            } else {
                el.classList.remove('show');
            }
        });
    });

    // Fonctionnalité pour afficher le total supply lorsque TOKENOMICS est cliqué
    document.querySelector(".nav-link[href='#tokenomics']").addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector("#total-supply").scrollIntoView({ behavior: 'smooth' });
    });
});

function copyToClipboard() {
    var text = document.getElementById("token-link").innerText;
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

window.onload = function () {
    var context = new AudioContext();
};

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // If scrolling down, hide the navbar
        document.getElementById("navbar").style.transform = "translateY(-100%)";
    } else {
        // If scrolling up, show the navbar
        document.getElementById("navbar").style.transform = "translateY(0)";
        if (scrollTop > 0) {
            // If not at the top, set the background color
            document.getElementById("navbar").style.backgroundColor = "rgba(127, 140, 141, 0.7)"; // gray
        } else {
            // If at the top, clear the background color
            document.getElementById("navbar").style.backgroundColor = "";
        }
    }
    lastScrollTop = scrollTop;
});

document.addEventListener("DOMContentLoaded", (event) => {
    const videoElement = document.querySelector("audio");
    const muteButton = document.querySelector("#mute-button");
    const muteImage = document.querySelector("#mute-image");
    const overlay = document.querySelector("#overlay");
    const heroImage = document.querySelector("#hero");
    const titleImage = document.querySelector("#title");

    const spinTime = 11; // 10 seconds into the audio

    // Define the elements that should spin
    const spinElements = [muteButton, muteImage, heroImage, titleImage];

    const originalAnimations = spinElements.map((el) => el.style.animation);

    // Add the timeupdate event listener to the audio element
    videoElement.addEventListener("timeupdate", () => {
        if (videoElement.currentTime >= spinTime) {
            // If the current time is greater than or equal to the spin time, make the elements spin
            spinElements.forEach((el, i) => {
                el.style.animation = "spin 0.2s linear infinite";
            });
        }

        if (videoElement.currentTime >= spinTime + 4 || videoElement.paused) {
            spinElements.forEach((el, i) => {
                el.style.animation = originalAnimations[i];
            });
        }
    });

    muteButton.addEventListener("click", () => {
        if (videoElement.paused) {
            videoElement.play();
            muteImage.src = "tete butters s.png";
            muteButton.style.animation = "bounce 1s";
            overlay.style.animation = "flashing 1s linear infinite";
            heroImage.src = "tete butters s.png";
        } else {
            videoElement.pause();
            muteImage.src = "tete butters s.png";
            muteButton.style.animation = "none"; // Arrêter l'animation du bouton
            overlay.style.animation = "none"; // Arrêter l'animation de l'overlay
            heroImage.src = "butters ia mange du betters.jpg";
        }
    });

    // Sélectionner les images à animer
    const targetImages = document.querySelectorAll("img.rocket");

    // Appliquer l'animation de chute
    targetImages.forEach(image => {
        image.classList.add("falling");
    });
});
