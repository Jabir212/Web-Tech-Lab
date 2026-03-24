// Mobile Menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Typing Effect
const text = ["Web Developer", "Programmer", "Student"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = text[i];
  
  if (!isDeleting) {
    document.getElementById("typing").innerHTML =
      currentText.substring(0, j++);
  } else {
    document.getElementById("typing").innerHTML =
      currentText.substring(0, j--);
  }

  if (j == currentText.length) isDeleting = true;
  if (j == 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, 100);
}

type();