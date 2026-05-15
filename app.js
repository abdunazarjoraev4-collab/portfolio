
const textElement = document.getElementById('typing-text');
const message = "Assalomu alaykum va rahmatullohu barakatu";
let index = 0;

function typeEffect() {
if (index < message.length) {
    textElement.textContent += message.charAt(index);
    index++;
    setTimeout(typeEffect, 100); 
}
}

typeEffect();