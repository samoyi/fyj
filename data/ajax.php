<?php
    header('Access-Control-Allow-Origin: http://localhost:8080');

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

        // 购物车页面中用户购物车内容以外的数据
        if ($_GET['act'] === 'cartPageInfo'){
            echo file_get_contents('./cartPageInfo.json');
        }
    }


    if (isset($_POST['act']) && !empty($_POST['act'])){

        // 更新购物车
        if ($_POST['act'] === 'updateCart' && isset($_POST['cart'])){
            $userData = json_decode(file_get_contents('./userData.json'));
            $userData->cart = json_decode($_POST['cart']);
            file_put_contents('./userData.json', json_encode($userData));
            echo 'true';
        }

        // 购物车中的商品数量增减
        if ($_POST['act'] === 'increment' && isset($_POST['index'])){
            $userData = json_decode(file_get_contents('./userData.json'), true);
            $userData['cart'][$_POST['index']]['amount']++;
            if(file_put_contents('./userData.json', json_encode($userData))){
                echo 'true';
            }
        }
        if ($_POST['act'] === 'decrement' && isset($_POST['index'])){
            $userData = json_decode(file_get_contents('./userData.json'), true);
            $userData['cart'][$_POST['index']]['amount']--;
            if(file_put_contents('./userData.json', json_encode($userData))){
                echo 'true';
            }
        }

        // 购物车中商品的选中或不选
        if ($_POST['act'] === 'switchCheck' && isset($_POST['index'])){
            $userData = json_decode(file_get_contents('./userData.json'), true);
            $userData['cart'][$_POST['index']]['checked']
                = !$userData['cart'][$_POST['index']]['checked'];
            if(file_put_contents('./userData.json', json_encode($userData))){
                echo 'true';
            }
        }

        // 创建订单，存入数据，并返回订单
        if ($_POST['act'] === 'createOrder' && isset($_POST['items'])){
            $userData = json_decode(file_get_contents('./userData.json'));
            $order = array(
                'items'=> json_decode($_POST['items']),
                'time'=> time(),
                'id'=> mt_rand(100000, 999999),
                'status'=>json_decode($_POST['status'])
            );
            array_unshift($userData->order, $order);
            file_put_contents('./userData.json', json_encode($userData));
            echo json_encode($order);
        }

        // 支付
        if ($_POST['act'] === 'pay' && isset($_POST['id'])){
            $userData = json_decode(file_get_contents('./userData.json'), true);
            foreach ($userData['order'] as $key=>&$value){
                if ($value['id'] == $_POST['id']){
                    $value['status'] = 1;
                    $value['addr_id'] = $_POST['addr_id'];
                    file_put_contents('./userData.json', json_encode($userData));
                    echo $value['id'];
                    exit;
                }
            }
        }

        // 取消订单
        if ($_POST['act'] === 'cancelOrder' && isset($_POST['id'])){
            $userData = json_decode(file_get_contents('./userData.json'), true);
            foreach ($userData['order'] as $key=>&$value){
                if ($value['id'] == $_POST['id']){
                    $value['status'] = 5;
                    file_put_contents('./userData.json', json_encode($userData));
                    echo 'true';
                    exit;
                }
            }
        }

        // 确认收货
        if ($_POST['act'] === 'signFor' && isset($_POST['id'])){
            $userData = json_decode(file_get_contents('./userData.json'), true);
            foreach ($userData['order'] as $key=>&$value){
                if ($value['id'] == $_POST['id']){
                    $value['status'] = 4;
                    file_put_contents('./userData.json', json_encode($userData));
                    echo 'true';
                    exit;
                }
            }
        }

        // 添加地址
        if ($_POST['act'] === 'addAddr' && isset($_POST['addr'])){
            $userData = json_decode(file_get_contents('./userData.json'), true);
            $newAddr = json_decode($_POST['addr'], true);
            $newAddr['addr_id'] = $userData['addr'][0]['addr_id'] + 1;
            if ($newAddr['isDefault']){
                foreach ($userData['addr'] as &$addr){
                    $addr['isDefault'] = false;
                }
            }
            array_unshift($userData['addr'], $newAddr);
            file_put_contents('./userData.json', json_encode($userData));
            echo json_encode($userData['addr']);
        }

        // 修改默认地址
        if ($_POST['act'] === 'changeDefaultAddr' && isset($_POST['addr_id'])){
            $userData = json_decode(file_get_contents('./userData.json'), true);
            $nDefaultID = json_decode($_POST['addr_id']);
            foreach ($userData['addr'] as &$addr){
                if ($addr['addr_id'] === $nDefaultID){
                    $addr['isDefault'] = true;
                }
                else{
                    $addr['isDefault'] = false;
                }
            }
            file_put_contents('./userData.json', json_encode($userData));
            echo json_encode($userData['addr']);
        }

        // 删除地址
        if ($_POST['act'] === 'deleteAddr' && isset($_POST['addr_id'])){
            $userData = json_decode(file_get_contents('./userData.json'), true);
            $nID = json_decode($_POST['addr_id']);

            $isDefault = false;
            foreach ($userData['addr'] as $key=>$addr){
                if ($addr['addr_id'] === $nID){
                    $isDefault = $addr['isDefault'] ? true : false;
                    unset($userData['addr'][$key]);
                    break;
                }
            }
            if ($isDefault){ // 如果删除的是默认地址
                $userData['addr'][0]['isDefault'] = true;
            }
            file_put_contents('./userData.json', json_encode($userData));
            echo json_encode($userData['addr']);
        }
    }

?>
