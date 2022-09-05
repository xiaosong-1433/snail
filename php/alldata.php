<?php
header('Access-Control-Allow-Origin:http://192.168.125.2:8000');  //允许任意的域名访问

// 响应类型
header('Access-Control-Allow-Methods:*');
//请求头
header('Access-Control-Allow-Headers:*');
// 响应头设置
header('Access-Control-Allow-Credentials:true');


include "conn.php";//引入数据库连接代码。

$result = $conn->query("select * from listdata"); //获取数据的结果集(记录集)

$arr = array();
for ($i = 0; $i < $result->num_rows; $i++) {
    $arr[$i] = $result->fetch_assoc();
}

echo json_encode($arr);



