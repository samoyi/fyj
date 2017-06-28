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
                list: [
                    {
                        "url": "http://www.fuyj.com.cn/images/201706/thumb_img/60_thumb_G_1496868398868.jpg",
                        "name": "name1",
                        "des": "des1"
                    },
                    {
                        "url": "http://www.fuyj.com.cn/images/201704/thumb_img/59_thumb_G_1491948406750.jpg",
                        "name": "name2",
                        "des": "des2"
                    },
                    {
                        "url": "http://www.fuyj.com.cn/images/201703/thumb_img/58_thumb_G_1489687595724.jpg",
                        "name": "name3",
                        "des": "des3"
                    }
                ],
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
