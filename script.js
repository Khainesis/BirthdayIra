function revealMessage() {
    const message = document.getElementById("hiddenMessage");
    const button = document.getElementById("revealButton");

    message.classList.add("show");

    button.style.display = "none";
}