<?php
header('Access-Control-Allow-Origin:*');  //允许任意的域名访问
header('Access-Control-Allow-Method:POST,GET'); //允许请求方式是get和post

include "conn.php";//引入数据库连接代码。

$result = $conn->query("select * from listdata"); //获取数据的结果集(记录集)

$arr = array();
for ($i = 0; $i < $result->num_rows; $i++) {
    $arr[$i] = $result->fetch_assoc();
}

echo json_encode($arr);



