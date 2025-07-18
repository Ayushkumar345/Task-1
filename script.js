// Scroll navbar blur effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});

// Typing animation
const text = "Welcome to the Ayush World 🌍";
let i = 0;
const speed = 70;
const typed = document.getElementById("typed-text");

function typeWriter() {
  if (i < text.length) {
    typed.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;
