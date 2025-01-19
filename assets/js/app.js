$(document).ready(function () {
    // Función para agregar un amigo a la lista
    function agregarAmigo() {
        const amigo = $('#amigo').val().trim();
        if (amigo) {
            $('#listaAmigos').append(`<li>${amigo}</li>`);
            $('#amigo').val('').focus();
        } else {
            alert('Por favor, escribe un nombre válido.');
        }
    }

    // Función para sortear un amigo
    function sortearAmigo() {
        const amigos = $('#listaAmigos li');
        if (amigos.length === 0) {
            $('#resultado').text('La lista está vacía. Agrega amigos primero.');
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = $(amigos[indiceAleatorio]).text();
        $('#resultado').text(`Amigo sorteado: ${amigoSorteado}`);
    }

    // Asociar eventos a los botones
    $('#agregarAmigo').on('click', agregarAmigo);
    $('#sortearAmigo').on('click', sortearAmigo);

    // Mejoras adicionales
    // Permitir agregar amigos con la tecla Enter
    $('#amigo').on('keypress', function (e) {
        if (e.key === 'Enter') {
            agregarAmigo();
        }
    });
});
