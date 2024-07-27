// Script JavaScript di esempio

// Aggiungi un effetto hover ai link di navigazione
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#ff3333";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "#e6e6e6";
    });
});

//movimento fluido tra i link anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});