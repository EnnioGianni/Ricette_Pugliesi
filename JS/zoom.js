
  document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImg');
      modalImg.src = img.src;
      modal.removeAttribute('hidden');
    });
  });

  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('imageModal').setAttribute('hidden', '');
  });