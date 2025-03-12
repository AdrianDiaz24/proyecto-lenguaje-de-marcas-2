

const montajeToggle = document.getElementById('montaje');

montajeToggle.addEventListener('change', () => {
    console.log('Checkbox de montaje cambiado:', montajeToggle.checked); 
    
    if (montajeToggle.checked) {

        document.querySelector('.montaje').style.display = 'block';


    } else {
        document.querySelector('.montaje').style.display = 'none';
    }
});