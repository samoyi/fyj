<?php
    header('Access-Control-Allow-Origin: http://localhost:8080');

    if (empty($_GET['act'])){
        exit;
    }

    // 首页数据
    if ($_GET['act'] === 'home'){
        echo file_get_contents('./home.json');
    }

    // 所有商品
    if ($_GET['act'] === 'goods'){
        echo file_get_contents('./goods.json');
    }

    // 商品详情
    if ($_GET['act'] === 'detail' && isset($_GET['id'])){
        echo file_get_contents('./detail/' . $_GET['id'] . '.json');
    }

    // 商品详情
    if ($_GET['act'] === 'user' && isset($_GET['tel'])
        && $_GET['tel'] === '18009'){
        echo file_get_contents('./userData.json');
    }
?>
