<template>
    <section class="addr">
        <div class="noAddr" v-if="!list">
            <div></div>
            <p>
                暂时还没有地址
            </p>
        </div>
        <ul class="addrList" v-if="list">
            <li v-for="(item,index) in list" :key="index" v-if="item.consignee">
                <span class="name-tel">{{item.consignee}}  {{item.tel}}</span>
                <span class="addr">{{getAddr(item)}}</span>
                <div class="default">
                    <input type="radio" :checked="item.isDefault" @click="setDefault(item)" name="isDefault" :id="index" /><label :for="index">  默认地址</label>
                </div>
                <span class="delete" @click="deleteAddr(item.addr_id)">删除地址</span>
            </li>
        </ul>
        <div class="add" v-if="!list[2]">
            <router-link v-show="displayAddBtn(list)" class="addAddr" to="/user/addAddr">+ 新增收货地址</router-link>
        </div>
        <router-view></router-view>
    </section>
</template>

<script>

export default {
    props: ['list'],
    data: function(){
        return {
            regionCode: {
                province: {
                    16: '江苏省',
                },
                city: {
                    16: {
                        220: '南京市',
                    },
                },
                area: {
                    16: {
                        220: {
                            1834: '玄武区',
                            1835: '鼓楼区',
                            1837: '建邺区',
                            1838: '秦淮区',
                            1839: '雨花台区',
                            1841: '栖霞区',
                            1843: '江宁区',
                        },
                    },
                },
            },
        };
    },
    methods: {
        getAddr(item){
            let oRegionCode = this.regionCode;
            return oRegionCode.province[item.province] + ' '
                + oRegionCode.city[item.province][item.city] + ' '
                + oRegionCode.area[item.province][item.city][item.area] + ' '
                + item.consigneeAddr;
        },
        deleteAddr(addrID){
            let sURL = 'http://localhost/gits/fyj/data/ajax.php';
            let oPostBody = {
                act: 'deleteAddr',
                addr_id: JSON.stringify(addrID),
            };
            this.$http.post(sURL, oPostBody, {emulateJSON: true})
                .then(res=>{
                    this.$store.commit('modifyAddrs', res.body);
                })
                .catch(err=>{
                    throw new Error(err);
                });
        },
        setDefault(item){
            if (!item.isDefault){
                let sURL = 'http://localhost/gits/fyj/data/ajax.php';
                let oPostBody = {
                    act: 'changeDefaultAddr',
                    addr_id: JSON.stringify(item.addr_id),
                };
                this.$http.post(sURL, oPostBody, {emulateJSON: true})
                    .then(res=>{
                        this.$store.commit('modifyAddrs', res.body);
                    })
                    .catch(err=>{
                        throw new Error(err);
                    });
            }
        },
        displayAddBtn(list){ // 有效地址少于三个就显示添加地址按钮
            return list.length < 3;
        },
    },
};

</script>

<style lang="scss" scoped>
.addr{
    .noAddr{
        text-align: center;
        div{
            margin: 64px auto auto auto;
            width: 87px; height: 87px;
            border: none;
            background:{
                image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
                size: 761px 809px;
                position: -198px -209px;
            }
        }
        p{
            margin-top: 18px;
            color: #9b9b9b;
            font-size: 12px;
            line-height: 16px;
        }
    }
    .addrList{
        background-color: #f6f6f6;
        >li{
            width: 325px; height: 101px;
            font-size: 12px;
            position: relative;
            margin: 10px auto auto auto;
            background-color: white;
            >span{
                position: absolute;
            }
            .name-tel{
                top: 28px; left: 14px;
            }
            .addr{
                top: 48px; left: 14px;
            }
            div{
                position: absolute;
                left: 180px; bottom: 12px;
                width: 65px;
                text-align: right;
                input{
                    position: absolute;
                    left: 0;
                    margin: 0;
                }
            }
            .delete{
                bottom: 12px; right: 14px;
            }
        }
    }
    .add{
        width: 100%; height: 63px;
        position: fixed; bottom: 0;
        .addAddr{
            display: block;
            width: 218px; height: 40px; line-height: 40px;
            text-align: center;
            position: absolute;
            top: 12px; left: 50%; margin-left: -109px;
            text-decoration: none;
            color: white;
            // background:{
            //     image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
            //     size: 761px 809px;
            //     position: -341px -298px;
            // }
            background:{
                image: url("http://localhost/gits/fyj/data/image/icons/temp3.png");
                position: 0px -70px;
                size: 325px 154px;
            }
        }
    }
}
</style>
