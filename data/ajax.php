<?php

    if (isset($_GET['act']) && !empty($_GET['act'])){
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
    }


    if (isset($_POST['act']) && !empty($_POST['act'])){
        // 创建订单，存入数据，并返回订单
        if ($_POST['act'] === 'createOrder' && isset($_POST['items'])){
            $userData = json_decode(file_get_contents('./userData.json'));
            $order = array(
                'items'=> $_POST['items'],
                'time'=> time()
            );
            array_unshift($userData->order, $order);
            file_put_contents('./userData.json', json_encode($userData));
            echo json_encode($order);
        }
    }

?>
