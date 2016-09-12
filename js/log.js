$(function() {
    $('#in').click(sendForm);
});

function sendForm(e) {
    e.preventDefault();
    if ((!$('#mail').val()) ||
            (!$('#password').val()))
            {
                alert('Please fill required fields')
                return;
            }
    $.ajax({
        url: "https://formspree.io/borodatuu@gmail.com",
        method: "POST",
            data: {
            mail: $('#mail').val(),
            password: $('#password').val()
                    },
        dataType: "json",
        success: function(){
            $('#thanks').html(alert('Thank you for registration'));
            $('.login')[0].reset();
        }
    });
}