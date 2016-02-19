$(function () {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            $('#result').text(ajax.responseText);
        };
    };
    ajax.open('GET', 'Ajax.php', true);
    ajax.send();
});
