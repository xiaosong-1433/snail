
<?php
header('Access-Control-Allow-Origin:http://192.168.125.2:8000');  //允许任意的域名访问

// 响应类型
header('Access-Control-Allow-Methods:*');
//请求头
header('Access-Control-Allow-Headers:*');
// 响应头设置
header('Access-Control-Allow-Credentials:true');


//1.连接数据库
include "conn.php";

//2.获取前端出入的sid
if(isset($_GET['uid'])){
    $uid = $_GET['uid'];
    $phone = $_GET['phone'];
    $result=$conn->query("update loginregistry set phone = $phone where uid = $uid");
    echo json_encode($result->fetch_assoc()); 
}