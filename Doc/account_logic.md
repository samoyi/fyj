# 账号逻辑

## 注册或绑定原账号
1. 微信授权，跳转到`redirect.php`，获得OpenID
2. 数据库检查该OpenID，发现没有记录，说明该微信号尚未注册
3. 设置cookie记录OpenID
4.  `redirect.php`跳转到填写手机号的页面
5. 用户发送手机号和cookie中的OpenID
6. 数据库检查
    * 如果没有该手机号，新创建一个用户，并绑定OpenID
    * 如果有该手机号，直接绑定OpenID

## 登录
1. 微信授权，跳转到`redirect.php`，获得OpenID
2. 数据库找到该OpenID，刷新Expires
3. `redirect.php`跳转到登录前页面

## 更改绑定的手机号
1. 向新手机号码发送验证码
2. 验证通过后，修改数据库中OpenID对应的手机号码
