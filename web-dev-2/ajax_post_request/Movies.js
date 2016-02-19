$(function () {
    // 为 id 为 submit 的 button 元素添加 click 的事件处理方法。
    $('#submit').on('click', function () {
        // 获得 id 为 movieName 的 input 元素。
        var movieInput = $('#movieName');
        // 获得输入的数据。
        var movieName = movieInput.val();
        if (movieName) {
            $.ajax({
                type: 'POST',
                url: 'Movies.php',
                data: {
                    movieName: movieName
                },
                // 请求成功。
                success: function (data, status, jqXHR) {
                    // 更新电影列表。
                    $('#movies').append('<li>' + movieName + '</li>');
                    movieInput.val(null);
                },
                // 请求失败。
                error: function (jqXHR, status, errorThrown) {
                    alert("添加电影《" + movieName + "》时发生错误.");
                }
            });
        };
    });
});