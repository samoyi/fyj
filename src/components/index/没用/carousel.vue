<template>
    <ul class="carousel" v-if="list">
        <li v-for="item in list" :style="{backgroundImage:'url('+item.url+')'}">
        </li>
    </ul>
</template>

<script>
    export default {
        props: ["list"],
        data: function () {
            return {

            };
        }
    };

</script>

<style lang="scss" scoped>
    ul{
        width: 300%; height: 375px;
        transform: translate3d(0px, 0, 0);
        li{
            width: 33.33%; height: 100%;
            text-align: center;
            float: left;
            background{
                size: cover;
                position: center;
                repeat: no-repeat;
            }
        }
    }
</style>
