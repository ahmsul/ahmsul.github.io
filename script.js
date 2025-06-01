window.onload = () => {
  setTimeout(() => {
    alert("Welcome to Ahmed Alharbi's Portfolio!");
  }, 800);
};

// Back to Top Button
const backToTopBtn = document.createElement("button");
backToTopBtn.textContent = "↑ Top";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = () => {
  document.documentElement.scrollTop = 0;
};

// Scroll reveal effect
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach(section => {
  observer.observe(section);
});
