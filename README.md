# Proyecto: Administrador de Amigos con jQuery

## Descripción
Este proyecto implementa una funcionalidad interactiva utilizando jQuery para gestionar una lista de amigos. Los usuarios pueden:
1. Agregar nombres a una lista de amigos.
2. Seleccionar un amigo aleatorio de la lista.
3. Mostrar el resultado de la selección en pantalla.

El proyecto tiene como objetivo demostrar el uso de jQuery para manipular el DOM de manera dinámica y eficiente.

---

## Funcionalidades

### 1. Agregar Amigos
- **Elemento HTML**: Campo de texto (`#amigo`) y botón (`#agregarAmigo`).
- **Acción**: Al hacer clic en el botón, el nombre ingresado en el cuadro de texto se agrega a la lista (`#listaAmigos`).
- **Validación**: Se asegura que el campo de texto no esté vacío antes de agregar el nombre.

### 2. Sortear Amigo
- **Elemento HTML**: Botón (`#sortearAmigo`).
- **Acción**: Al hacer clic, selecciona un amigo aleatorio de la lista y muestra el nombre en el elemento `#resultado`.
- **Validación**: Verifica que la lista no esté vacía antes de realizar el sorteo.

---

## Estructura del Proyecto

### Archivos
1. **index.html**: Contiene la estructura HTML.
2. **style.css**: (Opcional) Para estilos personalizados.
3. **script.js**: Archivo JavaScript con las funciones principales del proyecto (incluye jQuery).

### Dependencias
- **jQuery**: Biblioteca necesaria para el manejo de eventos y manipulación del DOM.

Incluye la biblioteca desde un CDN:
```html
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
```

---

## Ejecución
1. **Abrir el archivo `index.html`** en un navegador.
2. **Interacción**:
   - Ingresa un nombre en el cuadro de texto y presiona "Agregar Amigo" para añadirlo a la lista.
   - Presiona "Sortear Amigo" para elegir un elemento aleatorio de la lista.

---

## Código Reutilizable

### Buenas Prácticas Implementadas
1. **Modularidad**: Cada funcionalidad se encapsula en un evento separado para mejorar la claridad y reutilización del código.
2. **Validaciones**: Se incluyen alertas y mensajes para garantizar una buena experiencia de usuario.
3. **Eficiencia**: Uso de selectores y métodos jQuery optimizados.

### Mejoras Potenciales
1. **Estilización**: Añadir estilos CSS para mejorar la apariencia visual.
2. **Animaciones**: Usar jQuery para animar la adición de elementos o la selección aleatoria.
3. **Persistencia**: Guardar la lista de amigos utilizando `localStorage` o una base de datos.

---

## Ejemplo de Código
### Evento de Agregar Amigo
```javascript
$('#agregarAmigo').click(function() {
    const amigo = $('#amigo').val().trim();
    if (amigo) {
        $('#listaAmigos').append(`<li>${amigo}</li>`);
        $('#amigo').val(''); // Limpiar el campo de texto
    } else {
        alert('Por favor, ingresa un nombre.');
    }
});
```

---

## Créditos
- **Autor**: [Tu Nombre]
- **Tecnologías**: jQuery, HTML, CSS

---

## Contacto
Si tienes preguntas o comentarios sobre este proyecto, no dudes en contactarme a través de [tu correo electrónico o enlace profesional].

