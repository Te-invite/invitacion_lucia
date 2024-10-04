<script>
import AOS from 'aos'; // Importar la librería
import 'aos/dist/aos.css'; // Importar el CSS de AOS

import TitleSection from '../TitleSection.vue';
import IconParty from '../icons/IconParty.vue';
import CartelFiesta from './CartelFiesta.vue';
import FormularioAsistencia from './FormularioAsistencia.vue';
import CurvaLeftPlateada from '../icons/CurvaLeftPlateada.vue';

export default {
    name:'SectionFiesta',
    components:{
        TitleSection,
        IconParty,
        CartelFiesta,
        FormularioAsistencia,
        CurvaLeftPlateada
    },
    data(){
        return{
            title:'Fiesta',
            frase:'Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.'
        }
    },
    mounted() {
    AOS.init({
      duration: 1200, // Duración de la animación
      once: true, // La animación solo ocurre una vez
    });
  }
}
</script>
<template>
    <div id="fiesta" class="container_fiesta" >
        <!--Titulo de la sesion-->
        <TitleSection title="Fiesta">
            <template #icon>
                <IconParty />
            </template>
        </TitleSection>
        <!--Frase-->
        <span class="content_fraseFiesta" data-aos="fade-down-left">
            <p class="textFraseFiesta">{{ frase }}</p>
        </span>
        <!--Cartel-->
        <CartelFiesta/>
        <!--Formulario-->
        <FormularioAsistencia/>
        <CurvaLeftPlateada class="curvaLeftPlateada"/>
    </div>
    
</template>
<style>
.container_fiesta{
    width:100%;
    height:900px;
    display:flex;
    flex-direction: column;
    align-items: center;
    position:relative;
    margin-bottom:2rem;
}
.content_fraseFiesta{
    width:80%;
    height:100%;
    display:flex;
    flex-direction: column;
}
.textFraseFiesta{
    text-align: center;
    font-family: "Playfair";
    font-size:1rem;
    font-style: italic;
    font-weight: lighter;
    color:#8b8b8b;
}
.curvaLeftPlateada{
    position:absolute;
    bottom:-8%;
    z-index: 1;
}
@media (min-width: 768px) and (max-width: 991px) {
    .container_fiesta{
        margin-top:5rem;
        width:100%;
        height:1200%;
    }
    .textFraseFiesta{
        font-size:2rem;
    }
    .curvaLeftPlateada{
        bottom:-15%;
    }
}

@media (min-width: 1025px) {
    .container_fiesta{
        margin-top:5rem;
        width:100%;
        min-height:1400px;
        margin-bottom:10%;
    }
    .textFraseFiesta{
        font-size:2rem;
    }
    .curvaLeftPlateada{
        bottom:-20%;
    }
}
</style>


