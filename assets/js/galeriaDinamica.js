
const inputImagen = document.getElementById('inputImagen');
const galeria = document.getElementById('galeria');

inputImagen.addEventListener('change', () => {
  const archivos = Array.from(inputImagen.files);

  archivos.forEach(archivo => {
    const lector = new FileReader();

    lector.onload = function (evento) {
      const img = document.createElement('img');
      img.src = evento.target.result;
      img.alt = archivo.name;
      galeria.appendChild(img);
    };

    lector.readAsDataURL(archivo); 
  });
});