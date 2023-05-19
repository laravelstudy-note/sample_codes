<?php

$user_id = $_GET["user_id"];

$pdo = new PDO("mysql:host=mysql;dbname=test;charset=utf8", "root", "root");

//SQLの実行
$sql = "select * from personal_informations where id = :id";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(":id", $user_id, PDO::PARAM_INT);
$stmt->execute();

//実行結果の取得
$result = $stmt->fetch(PDO::FETCH_ASSOC);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
