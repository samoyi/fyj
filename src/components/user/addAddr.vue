<template>
    <section class="addAddr">
        <header>
            <span>返回</span>
            <h3>添加配送地址</h3>
            <span>保存</span></header>
        <section>
            <div>姓名： <input type="text" placeholder="收货人姓名" /></div>
            <div>手机： <input type="text" placeholder="收货人手机号" /></div>
            <div>城市： </div>
            <div>地址： <input type="text" placeholder="详细地址" /></div>
        </section>
        <div>
            <input type="radio" id="default" /><label for="default">设为默认地址</label>
        </div>
    </section>
</template>

<script>

    export default {
        data: function () {
            return {};
        },
        methods: {

        },
    };

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.addAddr{
    background-color: #f6f6f6;
    header{
        width: 100%;
        height: $headerHeight;
        background-color: white;
    }
    section{
        height: 176px;
        margin-top: 10px;
        background-color: white;
        >div{
            height: 44px; line-height: 44px;
            border-bottom: 1px solid #9b9b9b;
            box-sizing: border-box;
        }
        >div:last-child{
            border-bottom: none;
        }
    }
    >div{
        height: 44px;
        margin-top: 10px;
        background-color: white;
    }
}
</style>
