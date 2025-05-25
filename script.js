// Your existing revealSectionsOnScroll code (unchanged)
function revealSectionsOnScroll() {
  document.querySelectorAll('section').forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 200;
    const height = sec.offsetHeight;
    if (top + window.innerHeight >= offset + 100) {
      sec.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('load', revealSectionsOnScroll);

// DARK MODE TOGGLE
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


