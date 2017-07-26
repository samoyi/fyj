<?php

    $url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx2e87611162aae7f4&secret=9aef7e06d6c0cf735762e2982fa755ca&code=' .$_GET['code']. '&grant_type=authorization_code';
    $result = httpGet($url);
    $openId = json_decode($result)->openid;

    if($openId){
        header('location: index.html#/bindTel?openid=' .$openId);
    }
    else{
        echo '登录失败，请返回重试';
    }

     function httpGet($url)//发送GET请求
     {
         $ch = curl_init();
         curl_setopt($ch, CURLOPT_URL, $url);
         curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
         curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
         $output = curl_exec($ch);
         curl_close($ch);
         return $output;
     }

?>
