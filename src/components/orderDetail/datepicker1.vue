<template>
    <div>
        <datepicker v-model="date" language="ch" :min="min()" :max="max()">
        </datepicker>
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
            date: '',
            selectedHour: '',
        };
    },
    components: { datepicker },
    computed: {

    },
    methods: {
        isValidHour(hour){
            let date = new Date();
            return hour > date.getHours() + 4; // 至少要提前3个小时预定
        },
        aCurrent(){
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let date = d.getDate();
            return {year, month, date};
        },
        getSomedayLater(nDays){ // 若干天之后的某天的时间字符串
            let nextDay = new Date(new Date().getTime()
                + nDays * 24 * 60 * 60 * 1000);
            let year = nextDay.getFullYear();
            let month = nextDay.getMonth() + 1;
            let date = nextDay.getDate();
            return year + '-' + month + '-' + date;
        },
        min(){
            let {year, month, date} = this.aCurrent;

            if (this.isValidHour(20)){ // 当天还有时间
                return year + '-' + month + '-' + date;
            }
            else { // 当天已经没有时间
                console.log(this.getSomedayLater(1));
                return 2018 + '-' + 4 + '-' + 19;
                // return this.getSomedayLater(1);
            }
        },
        max(){
            // return this.aCurrent['year'] + '-' + (this.aCurrent['month'] + 1) + '-'
            //     + (this.aCurrent['date'] - 3); // 如果今天是1月31，截止日期就最多2月28
            // let maxDay = new Date(new Date().getTime()
            //     + 30 * 24 * 60 * 60 * 1000);
            // let y = nextDay.getFullYear();
            // let m = nextDay.getMonth() + 1;
            // let d = nextDay.getDate();
            // return y + '-' + m + '-' + d;
            return this.getSomedayLater(30);
        },
        seleteHour(){
            this.$parent.$parent.deliveryInfo.hour = Number.parseInt(this.selectedHour, 10);
        },
    },
    watch: {
        date(){
            this.$parent.$parent.deliveryInfo.date = this.date;
        },
    },
    mounted(){
        let sDate = this.aCurrent['year'] + '-' + this.aCurrent['month'] + '-' + this.aCurrent['date'];
        this.date = sDate;
    },
};
</script>
<style lang="scss" scoped>
select{
    width: 100%;
    height: 32px;
}
</style>
