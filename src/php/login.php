<?php
    include('./lib/conn.php');
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $sql = "select * from user where username='$username' and password='$password'";
    $ret = $mysqli->query($sql);
    $mysqli->close();
    if($ret->num_rows>0){
        echo '{"pd":true,"msg":"登录成功"}';
    }else{
        echo '{"pd":false,"msg":"密码或账号错误"}';
    };
?>