$(document).ready(function () {

	$('#agregarAmigo').click(function () {
		const texto = $('#amigo').val().trim(); // Obtener texto del input
		if (texto) { // Verificar si no está vacío
			$('#listaAmigos').append(`<li>${texto}</li>`); // Agregar a la lista
			$('#amigo').val(''); // Limpiar el cuadro de texto
		} else {
			alert('Por favor, escribe algo antes de agregar.');
		}
	});




});
