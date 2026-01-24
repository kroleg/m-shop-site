// Product image gallery
function changeImage(thumbnail) {
  const mainImage = document.getElementById('mainImage');
  const source = mainImage?.parentElement?.querySelector('source');

  if (mainImage) {
    const large = thumbnail.dataset.large;
    const medium = thumbnail.dataset.medium;

    mainImage.src = large;

    if (source && medium && large) {
      source.srcset = `${medium} 600w, ${large} 1200w`;
    }

    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
  }
}

// Confirm delete actions
document.querySelectorAll('[data-confirm]').forEach(el => {
  el.addEventListener('click', e => {
    if (!confirm(el.dataset.confirm)) {
      e.preventDefault();
    }
  });
});
