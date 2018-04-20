<template>
    <section id="loadingPage" v-if="display" :style="{height:height+'px'}">
        <img src="http://localhost/gits/fyj/data/image/logo.gif" alt="浮遇纪" />
    </section>
</template>
<script>
import {nWindowHeight} from '../js/common.js';
export default {
    props: ['list'],
    data(){
        return {
            height: nWindowHeight,
            display: true,
        };
    },
    mounted(){
        setInterval(()=>{
            this.display = false;
        }, 3500);
        window.onload = ()=>{
            this.display = false;
        };
    },
};
</script>
<style lang="scss" scoped>
    #loadingPage{
        width: 100%; height: 100%;
        background-color: white;
        position: fixed;
        z-index: 99999;
        img{
            position: relative;
            width: 100%;
            top: 30%;
        }
    }
</style>
