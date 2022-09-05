<?php
//1.连接数据库
header('Access-Control-Allow-Origin:http://192.168.125.2:8000');  //允许任意的域名访问

// 响应类型
header('Access-Control-Allow-Methods:*');
//请求头
header('Access-Control-Allow-Headers:*');
// 响应头设置
header('Access-Control-Allow-Credentials:true');

include "conn.php";

$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$password = $data['password'];
$idnumber = $data['idnumber'];
$phone = $data['phone'];
if(isset($data['username'])){
    $result=$conn->query("insert loginregistry values(null,'$username','$password','$idnumber','$phone');");//将数据传递给数据库。
    // echo json_encode($data['username']);   
    // echo json_encode($data['idnumber']);   
    // echo json_encode($data['phone']);  
    echo json_encode($result);
}