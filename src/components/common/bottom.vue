<template>
    <div class="bottom">
        <i class="logo"></i>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bottom{
    width: 100%; height: 70px;
    position: relative;
    .logo{
        display: block;
        width: 64px; height: 36px;
        position: absolute;
        top: 17px; left: 50%; margin-left: -32px;
        background:{
            image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/temp/temp2.png");
            size: cover;
        }
    }
}
</style>
