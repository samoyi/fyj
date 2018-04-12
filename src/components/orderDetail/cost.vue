<template>
    <div class="cost" :sum="sum" :freight="freight">
        <div>
            <span>商品总计</span>
            <span>¥ {{sum}}</span>
        </div>
        <div>
            <span>配送服务费</span>
            <span>¥ {{freight}}</span>
        </div>
    </div>
</template>

<script>

export default {
    props: ['sum', 'freight'],
};
</script>

<style lang="scss" scoped>
.cost{
    height: 64px;
    margin-top: 20px;
    font-size: 12px;
    background: white;
    >div{
        width: 97%; height: 50%;
        float: right;
        border-bottom: 1px solid #dddddd;
        line-height: 32px;
        span:last-child{
            float: right; margin-right: 14px;
            color: #17919f;
        }
    }
}
</style>
