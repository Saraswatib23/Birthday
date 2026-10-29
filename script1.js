
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const hint = document.getElementById("hint");

// Make the NO button run away.
function moveNoButton() {
    if (!noButton || !hint) return;

    noButton.style.position = "fixed";

    const maxX = Math.max(
        0,
        window.innerWidth - noButton.offsetWidth - 15
    );

    const maxY = Math.max(
        0,
        window.innerHeight - noButton.offsetHeight - 15
    );

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    hint.textContent = "HAHAHA! You can't catch it 😂💗";
}

if (noButton) {
    noButton.addEventListener("mouseenter", moveNoButton);

    noButton.addEventListener("click", moveNoButton);

    noButton.addEventListener("touchstart", function (event) {
        event.preventDefault();
        moveNoButton();
    }, { passive: false });
}

// YES opens the second HTML page.
if (yesButton) {
    yesButton.addEventListener("click", function () {
        window.location.href = "surprise.html";
    });
}
