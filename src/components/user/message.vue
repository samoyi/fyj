<template>
    <section class="message">
        <ul class="messageList" v-if="list">
            <li v-for="item in list" :key="item.content">
                <span class="date">{{item.date}}</span>
                <div class="content">{{item.content}}</div>
            </li>
        </ul>
    </section>
</template>

<script>

export default {
    props: ['list'],
    data(){
        return {};
    },
};

</script>

<style lang="scss" scoped>
.message{
    .messageList{
        background-color: #f6f6f6;
        >li{
            width: 325px; height: 130px;
            font-size: 12px;
            color: #9b9b9b;
            position: relative;
            margin: 15px auto auto auto;
            .date{
                width: 100%;
                top: 17px;
                left: 20px;
                position: absolute;
                text-align: center;
            }
            .content{
                background-color: white;
                color: #1e1e1e;
                width: 100%; line-height: 18px;
                position: absolute;
                top: 38px;
                left: 0;
                font-size: 12px;
                padding: 16px;
                box-sizing: border-box;
            }
        }
    }
}
</style>
