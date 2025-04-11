
const botonesFavorito = document.querySelectorAll('.btn-favorito');
const contenedorFavoritos = document.getElementById('contenedorFavoritos');

botonesFavorito.forEach(boton => {
    boton.addEventListener('click', () => {
        const servicioOriginal = boton.closest('article');
        const titulo = servicioOriginal.querySelector('h4').textContent;
        const imagenSrc = servicioOriginal.querySelector('img').src;
        const imagenAlt = servicioOriginal.querySelector('img').alt;

        const nuevoArticulo = document.createElement('article');
        nuevoArticulo.innerHTML = `
            <h4>${titulo}</h4>
            <img src="${imagenSrc}" alt="${imagenAlt}">
            <button class="btn-eliminar">Quitar de favoritos</button>
        `;

        contenedorFavoritos.appendChild(nuevoArticulo);

        nuevoArticulo.querySelector('.btn-eliminar').addEventListener('click', () => {
            nuevoArticulo.remove();
        });
    });
});