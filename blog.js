$(function() {
    $('#btn-send').click(sendForm);
});

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/borodatuu@gmail.com",
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#msg').val()
        },
        dataType: "json",
        success: function(){
            $('#thanks').html(alert('Thank you for contacting me'));
        }
    });
}