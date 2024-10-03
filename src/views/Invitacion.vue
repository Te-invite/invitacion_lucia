<script>
import SectionHome from '../components/PortadaHome/SectionHome.vue';
import CurvaOscura from '../components/icons/CurvaOscura.vue';
import Cuadrante from '../components/PortadaHome/Timer/Cuadrante.vue';

export default {
    name:'Invitacion',
    components:{
        SectionHome,
        CurvaOscura,
        Cuadrante
    }
}
</script>
<template>
    <div class="container_invitacion">
        <!--Portada Home -->
        <div class="portada_home">
            <CurvaOscura class="curva_oscura" />
            <Cuadrante class="cuadrante"/>     
            <SectionHome/>
        </div>
        <!-- Frase -->
        <!-- Sesion Fiesta -->
        <!-- Formulario -->
        <!-- Dress Code -->
        <!-- Musica -->
        <!-- Hashtag -->
    </div>
</template>
<style>
.container_invitacion{
    width:100%;
    height: 100vh;
    overflow-x: hidden;
}
.portada_home{
    width:100%;
    height:587px;
    position:relative;
}
.curva_oscura{
    position:absolute;
    z-index:3;
    bottom:-2%;
}
.cuadrante{
    position:absolute;
    z-index:3;
    bottom:0%;
    right:0;
}
@media (min-width: 768px) and (max-width: 991px) {
    .curva_oscura{
        bottom:-90%;
    }
    .cuadrante{
    bottom:-55%;
    right:2%;
    
    }
}
@media (min-width: 1025px) {
    .curva_oscura{
        bottom:-120%;
    }
    .cuadrante{
    bottom:-110%;
    right:2%;
    }
}
</style>