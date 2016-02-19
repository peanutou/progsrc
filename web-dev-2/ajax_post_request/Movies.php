<?php
    // 如果接收到客户端发送来的新的电影信息。
    if (isset($_POST['movieName']))
    {
        $movieName = $_POST['movieName'];
        if ($movieName)
        {
            file_put_contents('movies.txt', htmlspecialchars($movieName) . "rn", FILE_APPEND);
        }

        // 当前的请求完成，如果没有发生异常，返回状态 200。
        exit();
    }
?>
<!DOCTYPE html>
<html>
    <?php
        // 取出当前后台文本文件中存储的所有电影信息，并生成电影列表信息。
        function fileAsUnorderedList($fileName, $notFoundMessage)
        {
            if (file_exists($fileName))
            {
                echo '<ul id="movies">';
                $lines = file($fileName);
                foreach ($lines as $line)
                {
                    echo '<li>' . htmlspecialchars($line) . '</li>';
                }
                echo '</ul>';
            }
            else
            {
                echo $notFoundMessage;
            }
        }
    ?>
    <header>
        <title>我喜欢的电影！</title>
        <meta charset="utf-8">
        <meta name="description" content="我喜欢的电影列表。">
        <meta name="keywords" content="喜欢的，电影">
        <meta name="author" content="Yanliang Ou">
        <script src="http://code.jquery.com/jquery-2.2.0.min.js"></script>
        <script type="text/javascript" src="Movies.js"></script>
    </header>
    <body>
        <h1>我喜欢的电影！</h1>
        <p>
        <?php
            fileAsUnorderedList('movies.txt', '没有找到喜欢的电影');
        ?>
        </p>
        <h2>Add a movie!</h2>
        <div>
            <label for="movieName">电影名称：</label>
            <input type="text" name="movieName" id="movieName" />
            <button id="submit">提交</button>
        </div>
    </body>
</html>