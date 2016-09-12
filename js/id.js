$(function() {
    $('#exit').click(sendForm);


function sendForm(e) {
    e.preventDefault();
    if ((!$('#mail').val()) ||
            (!$('#password').val()))
            {
                alert('You logout from page')
                return;
            }}
});