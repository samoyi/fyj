<template>
    <div class="payNow" :sum="sum" :freight="freight">
        <span class="btn" @click="pay">立即支付</span>
        <span class="sum">共计：¥{{sum+freight}}</span>
    </div>
</template>

<script>

export default {
    props: ['freight'],
    data(){
        return {
            aSelected: [],
        };
    },
    computed: {
        sum(){
            return this.$store.getters.curOrderSum;
        },
        list(){
            return this.$store.state.userModule.order;
        },
    },
    methods: {
        pay(){
            if (!this.$parent.deliveryInfo.date){
                alert('请选择收货日期');
                return;
            }
            if (!this.$parent.deliveryInfo.hour){
                alert('请选择收货时间');
                return;
            }
            if (window.confirm('模拟支付。选择支付成功或失败，'
                + '点击“确定”表示支付成功')){
                let sURL = 'http://localhost/gits/fyj/data/ajax.php';
                let oPostBody = {
                    act: 'pay',
                    id: this.$store.state.orderModule.curOrderID,
                    addr_id: this.$store.state.orderModule.curAddrID,
                };
                this.$http.post(sURL, oPostBody, {emulateJSON: true})
                    .then(res=>{
                        this.$store.commit('paid', res.body.trim());
                        this.$router.push('/user');
                    })
                    .catch(err=>{
                        throw new Error(err);
                    });
            }
            else {
                this.$router.push('/user');
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.payNow{
    background:{
        image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
        position: -341px -155px;
        size: 761px 809px;
    }
    width: 100%; height: 64px;
    position: fixed;
    bottom: 0; z-index: 9;
    .btn{
        color: white;
        font-size: 14px;
        width: 103px; text-align: center;
        height: 31px; line-height: 31px;
        position: absolute; right: 17px; top: 16px;
        // background:{
        //     image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
        //     position: -341px -348px;
        //     size: 761px 809px;
        // }
        background:{
            image: url("http://localhost/gits/fyj/data/image/icons/temp3.png");
            position: 0px -120px;
            size: 325px 154px;
        }
        text-decoration: none;
    }
    .sum{
        color: #17919f;
        line-height: 64px;
        font-size: 12px;
        margin-left: 30px;
    }
}
</style>
