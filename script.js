// Evento onload
function onPageLoad() {
    document.getElementById('loadMessage').innerText = 'La página ha cargado correctamente.';
}

// Evento onunload
function onPageUnload() {
    alert('La página se está cerrando o navegando a otro lugar.');
}

// Evento onerror y onabort
function onObjectError() {
    alert('Hola!, parece que ha ocurrido un error al cargar el objeto. (CAMBIO)');
}

function onObjectAbort() {
    alert('La carga del objeto ha sido abortada.');
}

// Evento onfocus y onblur
function onInputFocus() {
    console.log('El campo de texto ha recibido el foco.');
}

function onInputBlur() {
    console.log('El campo de texto ha perdido el foco.');
}

// Evento onchange
function onInputChange() {
    alert('Has cambiado el valor del campo de texto.');
}

// Evento onselect
function onTextSelect() {
    alert('Has seleccionado texto en el área de texto.');
}

// Evento onsubmit y onreset
function onFormSubmit(event) {
    event.preventDefault(); // Evita el envío del formulario
    alert('Formulario enviado correctamente.');
}

function onFormReset() {
    alert('Formulario restablecido.');
}

// Evento onscroll
function onScroll() {
    console.log('Se ha desplazado por el área.');
}
