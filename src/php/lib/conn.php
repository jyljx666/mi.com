<?php
    header('content-type:text/html;charset=utf-8');
    $mysql_conf = array(
        'host'=>'localhost:3306', // 地址 mysql默认端口号3306
        'db_user'=>'root', //用户名
        'db_pass'=>'root',//密码
        'db'=>'h5-2006' //数据库名
    );

    //链接数据库
    //mysqli 登录数据库
    //填写顺序 地址 用户名 密码
    //@屏蔽警告的作用
$mysqli = @new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pass']);
    //判断数据库是否链接成功
    //链接成功时 connect_errno的值为正数0 flase
    //为true时就证明这个数据库链接错误会返回错误代码
    if($mysqli->connect_errno){
        die('数据库链接错误'.$mysqli->connect_errno);
    };
     //设置查询字符集
     $mysqli->query('set names utf8');

     //选择数据库
     //select_db()方法用于选择数据库
     $select_db = $mysqli->select_db($mysql_conf['db']);
    //逻辑非把false变成true意思就是链接失败时结束代码运行
    //error返回的是Unknown database  '错误的数据库名字'
     if(!$select_db){
         die('数据库选择错误'.$mysqli->error);
     };