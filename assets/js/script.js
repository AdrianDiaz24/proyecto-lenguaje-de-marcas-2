

const darkModeToggle = document.getElementById('dark-mode');
const body = document.body;
const footer = document.querySelector('footer');

darkModeToggle.addEventListener('change', () => {
    console.log('Checkbox de modo oscuro cambiado:', darkModeToggle.checked);

    if (darkModeToggle.checked) {

        body.setAttribute('data-theme', 'dark-mode');
        footer.setAttribute('data-theme', 'dark-mode-footer');
        const message = document.createElement('div');
        message.textContent = '🌙 Modo oscuro activado';
        message.style.position = 'fixed';
        message.style.bottom = '10px';
        message.style.right = '10px';
        message.style.backgroundColor = '#000';
        message.style.color = '#fff';
        message.style.padding = '10px';
        message.style.borderRadius = '5px';
        document.body.appendChild(message);

        setTimeout(() => {
            document.body.removeChild(message);
        }, 1000);
        
    } else {

        body.removeAttribute('data-theme');
        footer.removeAttribute('data-theme');
        const message = document.createElement('div');
        message.textContent = '☀️ Modo oscuro desactivado';
        message.style.position = 'fixed';
        message.style.bottom = '10px';
        message.style.right = '10px';
        message.style.backgroundColor = '#000';
        message.style.color = '#fff';
        message.style.padding = '10px';
        message.style.borderRadius = '5px';
        document.body.appendChild(message);

        setTimeout(() => {
            document.body.removeChild(message);
        }, 1000);
    }

    console.log('Atributo body:', body.getAttribute('data-theme'));
    console.log('Atributo footer:', footer.getAttribute('data-theme'));
});

