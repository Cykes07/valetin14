const messages = [
    "Segura?",
    "Segurisima?",
    "Pero segura segura?",
    "Por favor di que si",
    "Piensa un poco mas",
    "Me voy a poner a llorar",
    "Ya estoy llorando",
    "Me demore haciendo esto",
    "Ni por un mcdonalds?",
    "Ya compre hasta tu regalo❤️",
    "Por favor di que si",
    "Bueno te quedararas infinitamente aqui entonces"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}