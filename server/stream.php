<?php

date_default_timezone_set("Asia/Osaka");
header('Content-Type: text/event-stream');
header('Cache-Control: no-store');
header('Access-Control-Allow-Origin: *');
//header("Access-Control-Allow-Headers: *");
//header('Access-Control-Allow-Credentials: true');

while (true) {
  //https://tightrope.jp/stone/server/stream.php
  $contents = file_get_contents("current.txt");
  echo "event: ping\n";
  echo 'data: {"rpm": "' . $contents . '"}';
  echo "\n\n";

  ob_end_flush();
  flush();

  // クライアントが接続を中止したら（ページを閉じたら）ループから抜ける
  if ( connection_aborted() ) break;

  sleep(1);
}

?>
