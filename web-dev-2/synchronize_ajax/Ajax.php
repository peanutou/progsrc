<?php
    class song
    {
        public $artist = NULL;
        public $name = NULL;
    }
 
    if (isset($_REQUEST['artist']) &&
        isset($_REQUEST['song']))
    {
        $song = new song();
        $song->artist = $_REQUEST['artist'];
        $song->name = $_REQUEST['song'];
 
        header('Content-Type: application/json');
        echo json_encode($song);
    }
?>
