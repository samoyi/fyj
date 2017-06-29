<template>
    <ul>
        <li v-for="item in list">
            <img :src="item.url" :alt="item.name" />
        </li>
    </ul>
</template>

<script>
    export default {
        data: function () {
            return {
                list: [],
            };
        }
    };

</script>

<style lang="scss">
    ul{
        width: 300px; height: 300px;
        li{
            width: 100%; height: 100%;
            img{
                width: 100%; height: 80%;
            }
        }
    }
</style>
