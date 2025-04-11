const filtrosHardware = document.querySelectorAll('input[name="filtroHardware"]');
const articulosHardware = document.getElementById('noticiasHardware').querySelectorAll('div > div');
const filtrosSoftware = document.querySelectorAll('input[name="filtroSoftware"]');
const articulosSoftware = document.getElementById('noticiasSoftware').querySelectorAll('div > div');

filtrosHardware.forEach(filtro => {
  filtro.addEventListener('change', () => {
    const filtrosActivosHardware = Array.from(filtrosHardware)
      .filter(f => f.checked)
      .map(f => f.value);

    for (articulo of articulosHardware) {
        const categoria = articulo.id;

      if (filtrosActivosHardware.length === 0 || filtrosActivosHardware.includes(categoria)) {
        articulo.style.display = 'block';
      } else {
        articulo.style.display = 'none';
      }
    };
  });
});


filtrosSoftware.forEach(filtro => {
  filtro.addEventListener('change', () => {
    const filtrosActivosSoftware = Array.from(filtrosSoftware)
      .filter(f => f.checked)
      .map(f => f.value);

    articulosSoftware.forEach(articulo => {
      const categoria = articulo.id;  

      if (filtrosActivosSoftware.length === 0 || filtrosActivosSoftware.includes(categoria)) {
        articulo.style.display = 'block';
      } else {
        articulo.style.display = 'none';
      }
    });
  });
});