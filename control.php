<?php

date_default_timezone_set("Asia/Osaka");
//header("Cache-Control: no-store");
header("Content-Type: text/event-stream");
//header('Content-Type: application/json;  charset=UTF-8');
header('Access-Control-Allow-Origin: *');



//write
$json = file_get_contents('php://input');
$params = json_decode($json, true);

if($params){
  file_put_contents("log.txt",'data: {"something":"'.$params.'"}', FILE_APPEND);
  file_put_contents("current.txt",$params);
}


//read
// $counter = rand(1, 10);
// while (true) {
//   // "ping" イベントを毎秒送信
//   echo "event: ping\n";
//   $curDate = date(DATE_ISO8601);
//   echo 'data: {"time": "' . $curDate . '"}';
//   echo "\n\n";

//   // シンプルなメッセージをランダムな間隔で送信

//   $counter--;

//   if (!$counter) {
//     echo 'data: This is a message at time ' . $curDate . "\n\n";
//     $counter = rand(1, 10);
//   }

//   ob_end_flush();
//   flush();

//   // クライアントが接続を中止したら（ページを閉じたら）ループから抜ける

//   if ( connection_aborted() ) break;

//   sleep(1);
// }






