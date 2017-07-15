<template>
    <div>
        <datepicker v-model="date" language="ch" :min="min" :max="max"></datepicker>
        <select v-model="selectedHour" class="hour" @change="seleteHour">
            <option value="10" selected>10:00-11:00</option>
            <option value="11">11:00-12:00</option>
            <option value="12">12:00-13:00</option>
            <option value="13">13:00-14:00</option>
            <option value="14">14:00-15:00</option>
            <option value="15">15:00-16:00</option>
            <option value="16">16:00-17:00</option>
            <option value="17">17:00-18:00</option>
            <option value="18">18:00-19:00</option>
            <option value="19">19:00-20:00</option>
            <option value="20">20:00-21:00</option>
        </select>
    </div>
</template>

<script>
    import datepicker from 'vue-date'
    export default {
        data() {
            return {
                date: '',
                selectedHour: 10,
            }
        },
        components: { datepicker },
        computed:{
            aCurrent(){
                let d = new Date(),
                    year = d.getFullYear(),
                    month = d.getMonth()+1,
                    date = d.getDate();
                return [year, month, date];
            },
            min(){
                return this.aCurrent[0] +"-"+ this.aCurrent[1] +"-"+ this.aCurrent[2];
            },
            max(){
                return this.aCurrent[0] +"-"+ (this.aCurrent[1]+1) +"-"+ (this.aCurrent[2]-3); // 如果今天是1月31，截止日期就最多2月28
            },
        },
        methods: {
            seleteHour(){
                console.log( this.selectedHour );
            },
        },
        mounted(){
            let sDate = this.aCurrent[0] +"-"+ this.aCurrent[1] +"-"+ this.aCurrent[2];
            this.date = sDate;
        }
    }
</script>
