<?php
    include('./lib/conn.php');
    $id = $_REQUEST['id'];
    $num = $_REQUEST['num'];
    $sql = "select * from product where id=$id";
    $result = $mysqli->query($sql);
    $arr = array();
    // $mysqli->close();
    while($row = $result->fetch_assoc()){
        array_push($arr,$row);
    };
    $num1=$arr[0]['num'];
    $num = $num1-$num;
    $sql1 = "update product set num=$num where id=$id";
    $result = $mysqli->query($sql1);
    echo "{$num}";
?>