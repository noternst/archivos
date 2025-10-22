document.querySelectorAll('.icon-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.window').forEach(w => w.classList.add('hidden'));
    const target = btn.getAttribute('data-target');
    document.getElementById('win-' + target).classList.remove('hidden');
  });
});

document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', () => btn.closest('.window').classList.add('hidden'));
});

// Lightbox para imágenes
document.querySelectorAll('.thumb').forEach(img => {
  img.addEventListener('click', () => {
    const src = img.style.backgroundImage.slice(5, -2);
    const lb = document.querySelector('.lightbox');
    lb.querySelector('img').src = src;
    lb.classList.remove('hidden');
  });
});

document.querySelector('.lightbox').addEventListener('click', e => {
  if (e.target.tagName !== 'IMG') e.currentTarget.classList.add('hidden');
});
