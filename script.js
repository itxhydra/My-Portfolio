const textArray = ["3D Animator", "Maya Specialist", "Game Animator"];
let index = 0;
let textPosition = 0;
const speed = 150;

function typeEffect() {
    console.log("Typing Effect Started");
    let target = document.querySelector(".typing-text span");
    if (textPosition < textArray[index].length) {
        target.innerHTML += textArray[index].charAt(textPosition);
        textPosition++;
        setTimeout(typeEffect, speed);
    } else {
        console.log("Text typed fully, starting erase");
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    console.log("Erasing effect started");
    let target = document.querySelector(".typing-text span");
    if (textPosition > 0) {
        target.innerHTML = textArray[index].substring(0, textPosition - 1);
        textPosition--;
        setTimeout(eraseEffect, speed / 2);
    } else {
        index = (index + 1) % textArray.length;
        console.log("Switching to next text");
        setTimeout(typeEffect, 500);
    }
}


document.addEventListener("DOMContentLoaded", typeEffect);
