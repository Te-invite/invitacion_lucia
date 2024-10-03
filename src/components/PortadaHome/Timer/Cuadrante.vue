<script>
import Timer from './Timer.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default{
    name:'Cuadrante',
    components:{
        Timer
    },
    mounted(){
        AOS.init({
            duration: 700
        })
    }
}
</script>
<template>
    <div class="container__cuadrante" data-aos="fade-down">
        <Timer/>        
    </div>
</template>
<style>
.container__cuadrante{
    margin-top:2rem;
    background-image: url('../../icons/circulo.png');
    background-repeat: no-repeat;
    background-size: cover;
    width:150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
@media (min-width: 768px) and (max-width: 991px) {
    .container__cuadrante{
        width:340px;
        height:340px;
    }

}
@media (min-width: 1025px) {
    .container__cuadrante{
        width:440px;
        height:440px;
    }
}
</style>