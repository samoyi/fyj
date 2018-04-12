<template>
    <div class="regionSelector">
        <select v-model="province">
            <option value="16">江苏省</option>
        </select>
        <select v-model="city">
            <option value="220">南京市</option>
        </select>
        <select v-model="area" @change="selectArea">
            <option>选择城区</option>
            <option value="1834">玄武区</option>
            <option value="1835">鼓楼区</option>
            <option value="1837">建邺区</option>
            <option value="1838">秦淮区</option>
            <option value="1839">雨花台区</option>
            <option value="1841">栖霞区</option>
            <option value="1843">江宁区</option>
        </select>
    </div>
</template>

<script>

export default {
    data: function(){
        return {
            province: 16,
            city: 220,
            area: null,
        };
    },
    methods: {
        selectArea(){
            this.$parent.province = this.province;
            this.$parent.city = this.city;
            this.$parent.area = this.area;
            console.log(this.area);
        },
    },
};

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.regionSelector{

    height: 26px;
    position: absolute;
    // width: 94%;
    // top: 0;
    // left: 64px;
    font-size: 12px;
    line-height: 26px;
    color: #464a4c;
    background-color: #fff;
    background-image: none;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border-radius: .25rem;
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
}
</style>
