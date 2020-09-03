<?php
    include('./lib/conn.php');
    $username = $_REQUEST['username'];
    $sql = "select * from user where username='$username'";
    $ret = $mysqli->query($sql);
    $mysqli->close();
    if($ret->num_rows>0){
        echo '{"pd":false,"msg":"用户名已存在"}';
    }else{
        echo '{"pd":true,"msg":"可以注册"}';
    };
?>