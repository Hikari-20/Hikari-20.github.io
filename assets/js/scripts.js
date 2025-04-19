const messages = [
    "Web Developer",
    "Mobile Developer",
    "IT Enthusiast",
    "IT Student at NU-Dasma"
];

let messageIndex = 0;
const typingText = document.getElementById('typing-text');

function typeMessage() {
const message = messages[messageIndex];
let charIndex = 0;
typingText.textContent = '';

function typeChar() {
    if (charIndex < message.length) {
        typingText.textContent += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 100);
    } else {
        setTimeout(() => {
            messageIndex = (messageIndex + 1) % messages.length;
            typeMessage();
        }, 5000);
    }
}

typeChar();
}

typeMessage();

const project1 = document.getElementById('project1');
project1.addEventListener('click', () => {
window.location.href = "projects/counter/counter.html";
});
const project2 = document.getElementById('project2');
project2.addEventListener('click', () => {
window.location.href = "projects/moving box/moving-box.html";
});
const project3 = document.getElementById('project3');
project3.addEventListener('click', () => {
window.location.href = "projects/weather app/index.html";
});