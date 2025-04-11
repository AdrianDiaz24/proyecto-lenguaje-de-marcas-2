const filtrosHardware = document.querySelectorAll('input[name="filtroHardware"]');
const articulosHardware = document.getElementById('noticiasHardware').querySelectorAll('div > div');

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
