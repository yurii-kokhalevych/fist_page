$('.filmstrip li').mouseenter(function () {
    $(this).css({border: '0 dashed black '}).animate({borderWidth : '5px'}, 'slow', 'linear');
}).mouseleave(function () {
     $(this).animate({
        borderWidth: 0
    }, 500);
});