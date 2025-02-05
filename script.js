const container = document.getElementById("loveContainer");

// Generate 50 "I Love You" messages initially
for (let i = 0; i < 50; i++) {
    addLoveMessage();
}

// Function to add a new love message
function addLoveMessage() {
    let loveMessage = document.createElement("h1");
    loveMessage.className = "love-text";
    loveMessage.innerText = "I Love You ❤️";
    loveMessage.style.animationDelay = `${Math.random()}s`;
    container.appendChild(loveMessage);
}

// Infinite scrolling effect - adds more messages as the user scrolls
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        for (let i = 0; i < 10; i++) {
            addLoveMessage();
        }
    }
});

// Floating Hearts Effect
function createHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s"; 
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 300);
