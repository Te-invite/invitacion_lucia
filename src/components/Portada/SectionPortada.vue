<script>
import Cartel from './Cartel.vue';
import PanelControl from './PanelControl.vue';
export default {
    name:'SectionPortada',
    components:{
        Cartel,
        PanelControl
    }
}
</script>
<template>
    <div class="container_portada container">
        <Cartel/>
        <PanelControl/>
    </div>
</template>
<style>
.container_portada{
    background-image:url('@/assets/img/background_home.png') ;
    width: 100%;
    min-height:100vh;
    object-fit: cover;
    overflow: hidden;
}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media (min-width: 1025px) {
    .container_portada{
        min-width: 100%;
        height:100%;
    }
}
</style>