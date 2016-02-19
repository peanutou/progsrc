$(function () {
    $('#p').hover(function () {
        $(this).addClass('hovering');
    }, function () {
        $(this).removeClass('hovering');
    });
});