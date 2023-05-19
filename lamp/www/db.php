<?php

$pdo = new PDO("mysql:host=mysql;dbname=test;charset=utf8", "root", "root");

//SQLの実行
$sql = "select * from personal_informations";
$stmt = $pdo->prepare($sql);
$stmt->execute();

//実行結果の取得
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
