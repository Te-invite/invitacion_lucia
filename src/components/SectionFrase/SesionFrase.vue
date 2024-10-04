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
    margin-bottom: 3.5rem;
}
.cintaP{
    position:absolute;
    bottom:-25%;
   
}
@media (min-width: 768px) and (max-width: 991px) {
    .container_sesion-frase{
        width: 100%;
        height:630px;
    }
    .cintaP{
        bottom:-20%;
        margin:0;
    }
}

@media (min-width: 1025px) {
    .container_sesion-frase{
        width: 100%;
        height:1200px;
    }
    .cintaP{
        bottom:0%;
    }
}
</style>