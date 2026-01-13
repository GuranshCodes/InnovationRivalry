// Minimal interactions: menu toggle + carousel
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      if (navList) navList.style.display = expanded ? 'none' : 'flex';
    });
  }

  // Simple auto-rotating carousel
  const carousel = document.getElementById('carousel');
  if (carousel) {
    const imgs = Array.from(carousel.querySelectorAll('img'));
    let idx = 0;
    imgs.forEach((img, i) => {
      img.style.display = i === 0 ? 'block' : 'none';
    });
    setInterval(() => {
      imgs[idx].style.opacity = 0;
      imgs[idx].style.display = 'none';
      idx = (idx + 1) % imgs.length;
      imgs[idx].style.display = 'block';
      imgs[idx].style.opacity = 1;
    }, 4500);
  }
});
