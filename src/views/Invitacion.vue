<script>
import { inject } from "vue";
import SectionHome from '../components/PortadaHome/SectionHome.vue';
import CurvaOscura from '../components/icons/CurvaOscura.vue';
import Cuadrante from '../components/PortadaHome/Timer/Cuadrante.vue';
import SesionFrase from '../components/SectionFrase/SesionFrase.vue';
import SectionFiesta from '../components/SetionFiesta/SectionFiesta.vue';
import SectionEvento from '../components/SectionFiesta2/SectionEvento.vue';
import SectionRedes from '../components/SectionRedes.vue';
import SectionFooter from '../components/SectionFooter.vue';
import BotonAudio from "../components/BotonAudio.vue";
export default {
    name:'Invitacion',
    components:{
        SectionHome,
        CurvaOscura,
        Cuadrante,
        SesionFrase,
        SectionFiesta,
        SectionEvento,
        SectionRedes,
        SectionFooter,
        BotonAudio
    },
    methods: {
        scrollTo(hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
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
        <SesionFrase/>
        <!-- Sesion Fiesta -->
        <SectionFiesta/>
         <SectionEvento/>
         <BotonAudio/>
        <!-- Hashtag -->
         <SectionRedes/>
         <SectionFooter/>
    </div>
</template>
<style>
.container_invitacion{
    width:100%;
    min-height: 100vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
}
.portada_home{
    width:100%;
    height:587px;
    position:relative;
}
.curva_oscura,
.cuadrante{
    position:absolute;
    z-index:3;
}

.curva_oscura{
    bottom:-2%;
}
.cuadrante{
    bottom:0%;
    right:0;
}
.section_frase{
    position:relative;
}
.box_section{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.box_section {
    font-size: .5rem;
}

.opcion_menu {
    margin-left: 1rem;
    font-family: var(--font_family_principal);
    color: var(--color__font_primary);
    font-size: .6rem;
    text-decoration: none;

    font-style: italic;
}
@media (min-width: 768px) and (max-width: 991px) {
    .container_invitacion{
        width:100%;
        max-height: 100%;
    }
    .curva_oscura{
        bottom:-55%;
    }
    .cuadrante{
    bottom:-55%;
    right:2%;
    
    }
}
@media (min-width: 1025px) {
    .container_invitacion{
        width:100%;
        max-height: 100%;
    }
    .curva_oscura{
        bottom:-120%;
    }
    .cuadrante{
    bottom:-110%;
    right:2%;
    }
}
</style>