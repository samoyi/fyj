<template>
    <section class="comment">
        <div>
            <span>许愿墙</span>
            <span>我们会尽力满足您的愿望</span>
        </div>
    </section>
</template>

<script>

    export default {
        data: function () {
            return {
                name: "",
                tel: "11111111111",
                addr: "",
                isDefult: true,
                // 提交时要要验证这三个err都是false。所以这里不能一开始就是false
                nameErr: null,
                telErr: null,
                addrErr: null,
            };
        },
        methods: {
            // 失去焦点检查是否有正确输入
            checkName(){
                if( 0 === this.name.trim().length){
                    this.nameErr = true;
                }
            },
            checkTel(){
                if( !/^1\d{10}$/.test(this.tel) ){
                    this.telErr = true;
                }
            },
            checkAddr(){
                if( 0 === this.addr.trim().length){
                    this.addrErr = true;
                }
            },
            // 获得焦点让错误提示消失
            getFocus(err){
                this[err] = false;
            },
            back(){
                history.back();
            },
            save(){

                if(false===this.nameErr && false===this.telErr && false===this.addrErr){
                    let oNewAddr = {
                        "tel": this.tel,
                        "name": this.name,
                        "addr": this.addr,
                        "isDefault": this.isDefult,
                    };

                    // 过滤掉null之后，现有的有效地址
                    let addrList = this.$parent.$parent.$parent.addrList.filter((item)=>item.name);

                    if(this.isDefult){ // 新添加的设为默认地址
                        this.$parent.$parent.defaultAddrIndex = addrList.length;
                    }
                    addrList.push(oNewAddr);
                    // 因为地址列表必须要有三个（空的用null补），所以这里在实际地址
                    // 的数组上用null补全三项
                    while(addrList.length<3){
                        addrList.push({});
                    }
                    this.$parent.$parent.$parent.addrList = addrList;
                    alert("提交地址列表")
                    history.back();
                }
            },
        },
    };

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.addAddr{
    opacity: 0.5;
    background-color: #f6f6f6;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    header{
        width: 100%;
        height: $headerHeight;
        background-color: white;
        .back{
            line-height: 55px;
            position: absolute;
            left: 14px;
        }
        h3{
            line-height: 55px;
            display: block;
            text-align: center;
            font-size: 16px;
        }
        .save{
            line-height: 55px;
            position: absolute;
            right: 14px;
            top: 0;
        }
    }
    section{
        height: 132px;
        margin-top: 10px;
        background-color: white;
        >div{
            height: 44px; line-height: 44px;
            border-bottom: 1px solid #9b9b9b;
            box-sizing: border-box;
            padding-left: 14px;
            input{
                border: none;
                height: 30px;
            }
        }
        >div:last-child{
            border-bottom: none;
        }
        .error{
            color: red;
            line-height: 44px;
            font-size: 12px;
            float: right;
            margin-right: 14px;
        }
    }
    >div{
        height: 44px;
        margin-top: 10px;
        background-color: white;
        line-height: 44px;
        padding-left: 14px;
        box-sizing: border-box;
    }
}
</style>
