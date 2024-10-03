<script>
import CintaPlateada from '../icons/CintaPlateada.vue';
import SectionFrase from './SectionFrase.vue';
export default {
    name:'SesionFrase',
    components:{
        CintaPlateada,
        SectionFrase
    }
    
}
</script>
<template>
    <div class="container_sesion-frase">
        <SectionFrase/>
        <CintaPlateada class="cintaP"/>
    </div>
</template>
<style>
.container_sesion-frase{
    position:relative;
}
.cintaP{
    position:absolute;
    bottom:-25%;
}
@media (min-width: 768px) and (max-width: 991px) {
    .cintaP{
        bottom:-50%;
    }
}

@media (min-width: 1025px) {
    .cintaP{
        bottom:-55%;
    }
}
</style>