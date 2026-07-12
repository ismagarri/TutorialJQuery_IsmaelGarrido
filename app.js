$(document).ready(function() {
    $('#btnCargar').click(function() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET',
            success: function(data) {
                let html = '<ul>';
                $.each(data, function(index, user) {
                    html += `<li>${user.name} - ${user.email}</li>`;
                });
                html += '</ul>';
                $('#resultado').html(html);
            }
        });
    });
});