document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Previene el envío por defecto del formulario

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('mail').value;
            const mensaje = document.getElementById('mensaje').value;

            const subject = `Nuevo mensaje de ${nombre}`;
            const body = `Mensaje: ${mensaje}\n\nEnviado por: ${nombre} (${email})`;

            // Crear el enlace mailto con parámetros URL-encoded
            const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=bnkiin47@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Abrir Gmail con el correo prellenado
            window.open(mailtoLink, '_blank');
        });
    } else {
        console.error('Formulario no encontrado');
    }
});
