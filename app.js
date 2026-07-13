/* 
  ARCHIVO: app.js
  DESCRIPCIÓN: Lógica central del tutorial.
  Contiene la interactividad del DOM, animaciones y peticiones asíncronas AJAX.
*/

$(document).ready(function() {

    // 1. Funcionalidad Extra: Interacción básica de la página de Inicio
    // Utilizamos fadeToggle para demostrar animaciones de jQuery
    $('#btnInteraccion').click(function() {
        $('#mensajeInteraccion').fadeToggle('slow');
    });

    // 2. Escenario 1: Petición AJAX para obtener Usuarios
    $('#btnCargarUsuarios').click(function() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET',
            success: function(data) {
                let html = '<ul>';
                $.each(data, function(index, user) {
                    html += '<li>' + user.name + ' - ' + user.email + '</li>';
                });
                html += '</ul>';
                $('#resultadoUsuarios').html(html);
            },
            error: function() {
                $('#resultadoUsuarios').html('<p>Error al cargar usuarios.</p>');
            }
        });
    });

    // 3. Escenario 2: Petición AJAX para obtener Posts (con parámetro de filtro)
    $('#btnCargarPosts').click(function() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts?_limit=5',
            method: 'GET',
            success: function(data) {
                let html = '<h3>Últimos Posts:</h3><ul>';
                $.each(data, function(index, post) {
                    html += '<li><strong>' + post.title + '</strong></li>';
                });
                html += '</ul>';
                $('#resultadoPosts').html(html);
            },
            error: function() {
                $('#resultadoPosts').html('<p>Error al cargar posts.</p>');
            }
        });
    });

});