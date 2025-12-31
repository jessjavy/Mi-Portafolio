const $form = document.querySelector('#miFormulario');

$form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita que la página se recargue o redirija

    // Creamos un objeto con los datos del formulario
    const formulario = new FormData($form);

    // Enviamos los datos usando Fetch
    const respuesta = await fetch('https://formspree.io/f/xregwajn', {
        method: 'POST',
        body: formulario,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (respuesta.ok) {
        // 1. Limpiamos los campos
        $form.reset(); 
        
        // 2. Avisamos al usuario (puedes usar un alert o un mensaje en el DOM)
        alert('¡Gracias por escribir! Tu mensaje ha sido enviado.');
    } else {
        alert('Ups, hubo un error al enviar el mensaje.');
    }
});