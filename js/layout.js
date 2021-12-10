
document.querySelectorAll('.row .card').forEach((card, index) => {
    // Numeración de cestas
    index = index + 1;
    (header => {
        // Header
        ['d-flex', 'align-items-start', 'justify-content-between'].forEach(item => header.classList.add(item));
        header.insertAdjacentHTML('beforeend', `<span class="badge bg-secondary fs-6 ms-2">${index}</span>`);
    })(card.querySelector('.card-header'));
});

// Zoom de imágenes
document.addEventListener('click', event => {
    if (event && event.target && event.target.src) {
        window.open(event.target.src.replace('-s.', '.'));
    }
});