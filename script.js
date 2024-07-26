// Script JavaScript di esempio

// Mostra un messaggio di benvenuto quando la pagina è caricata
document.addEventListener("DOMContentLoaded", function() {
    alert("Benvenuto nel sito di Michele Proietti!");
});

// Aggiungi un effetto hover ai link di navigazione
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "yellow";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "white";
    });
});
