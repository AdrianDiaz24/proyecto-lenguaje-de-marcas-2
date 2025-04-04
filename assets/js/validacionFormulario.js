
const errorNombre = document.getElementById('error-nombre');
const errorCorreo = document.getElementById('error-correo');
const errorTelefono = document.getElementById('error-telefono');
const errorDireccion = document.getElementById('error-direccion');
const errorServicios = document.getElementById('error-servicios');
const errorMensaje = document.getElementById('error-mensaje');

const formNombre = document.getElementById('form-nombre');
const formCorreo = document.getElementById('form-correo');
const formTelefono = document.getElementById('form-telefono');
const formDireccion = document.getElementById('form-direccion');
const checkboxes = document.querySelectorAll('.servicio');
const formMensaje = document.getElementById('form-mensaje');


formNombre.addEventListener('input', () => {
    if (formNombre.value === '') {
        errorNombre.style.display = 'block';
    } else {
        errorNombre.style.display = 'none';
    }
});

const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

formCorreo.addEventListener('input', () => {
    if (formCorreo.value === '' || !correoRegex.test(formCorreo.value)) {
        errorCorreo.style.display = 'block';
    } else {
        errorCorreo.style.display = 'none';
    }
});

formTelefono.addEventListener('input', () => {
    if (formTelefono.value === '') {
        errorTelefono.style.display = 'block';
    } else {
        errorTelefono.style.display = 'none';
    }
});


formDireccion.addEventListener('input', () => {
    if (formDireccion.value === '') {
        errorDireccion.style.display = 'block';
    } else {
        errorDireccion.style.display = 'none';
    }
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const alMenosUnoSeleccionado = Array.from(checkboxes).some(cb => cb.checked);
        
        if (alMenosUnoSeleccionado) {
            errorServicios.style.display = 'none';
        } else {
            errorServicios.style.display = 'block';
        }
    });
});
    

formMensaje.addEventListener('input', () => {
    if (formMensaje.value === '') {
        errorMensaje.style.display = 'block';
    } else {
        errorMensaje.style.display = 'none';
    }
});