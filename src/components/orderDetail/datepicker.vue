<template>
    <div>
        <datepicker v-model="date" language="ch" :min="min()" :max="max()"></datepicker>
        <select v-model="selectedHour" class="hour" @change="seleteHour">
            <option value="10" v-show="isValidHour(10)" selected>10:00-11:00</option>
            <option value="11" v-show="isValidHour(11)">11:00-12:00</option>
            <option value="12" v-show="isValidHour(12)">12:00-13:00</option>
            <option value="13" v-show="isValidHour(13)">13:00-14:00</option>
            <option value="14" v-show="isValidHour(14)">14:00-15:00</option>
            <option value="15" v-show="isValidHour(15)">15:00-16:00</option>
            <option value="16" v-show="isValidHour(16)">16:00-17:00</option>
            <option value="17" v-show="isValidHour(17)">17:00-18:00</option>
            <option value="18" v-show="isValidHour(18)">18:00-19:00</option>
            <option value="19" v-show="isValidHour(19)">19:00-20:00</option>
            <option value="20" v-show="isValidHour(20)">20:00-21:00</option>
        </select>
    </div>
</template>

<script>
import datepicker from 'vue-date';
export default {
    data(){
        return {
            bNextDay: false, // 日期选择器是否从第二天开始（当天时间已不足制作和配送）
            selectedHour: '',
            date: '',
        };
    },
    components: { datepicker },
    computed: {
        aCurrent(){
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let date = d.getDate();
            return {year, month, date};
        },
    },
    methods: {
        getSomedayLater(nDays){ // 若干天之后的某天的时间字符串
            let nextDay = new Date(new Date().getTime()
                + nDays * 24 * 60 * 60 * 1000);
            let year = nextDay.getFullYear();
            let month = nextDay.getMonth() + 1;
            let date = nextDay.getDate();
            return year + '-' + month + '-' + date;
        },
        // 检查某个配送小时时间段是否可用
        // 当天订购时三小时之后的时间段，或者是之后某一天的时间段可用
        isValidHour(hour){
            let date = new Date();
            return (hour > date.getHours() + 3) || this.bNextDay;
        },
        min(){
            if ((new Date()).getHours() < 18){ // 当天还有时间
                return this.getSomedayLater(0);
            }
            else { // 当天已经没有时间
                this.bNextDay = true;
                return this.getSomedayLater(1);
            }
        },
        max(){
            return this.getSomedayLater(30);
        },
        seleteHour(){
            this.$parent.$parent.deliveryInfo.hour = Number.parseInt(this.selectedHour, 10);
        },
    },
    watch: {
        date(newDate, oldDate){
            if (newDate !== this.min()){
                this.bNextDay = true;
            }
        },
    },
    mounted(){
        this.date = this.min();

        let date = new Date();
        let nCurHour = date.getHours();
        if (nCurHour + 4 > 20){
            this.selectedHour = 10;
        }
        else {
            this.selectedHour = nCurHour + 4;
        }
    },
};
</script>
<style lang="scss" scoped>
select{
    width: 100%;
    height: 32px;
}
</style>
