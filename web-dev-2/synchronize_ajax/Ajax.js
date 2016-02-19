$(function () {
    $.ajax({
        type: 'GET',
        url: 'Ajaj.php',
        data: {
            artist: 'TFBoys',
            song: '青春练习手册'
        },
        success: function (song, status, jqXHR) {
            $('#result').text(song.artist + " 的这首歌《" + song.name + "》真赞！");
        },
        error: function (jqXHR, status, errorThrown) {
            $('#result').text('发现错误：' + jqXHR.status + ' ' + errorThrown);
        }
    });
});