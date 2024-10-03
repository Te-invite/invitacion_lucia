<script>
import imgPortada from '../../assets/img/img_portada.jpg';
import TituloPortada from './TituloPortada.vue';
export default {
    name:'SectionHome',
    data(){
        return{
            imgPortada,        
        }
    },
    components:{
        TituloPortada
    }


}
</script>
<template>
    <div class="container_portada_home">
        <img :src="imgPortada" class="fotoPortada overlay" alt="foto">
        <div class="overlay"></div>
        <!--titulo-->
        <TituloPortada class="tit_portada"/>
        <!--timer-->
    </div>
</template>
<style>
.container_portada_home{
    width:100%;
    height:587px;
}
.fotoPortada{
    width:100%;
    height:100%;
    object-fit: cover;
    position:relative;
}
.overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 587px;
    background-color: rgba(0, 0, 0, 0.3); 
}
.tit_portada{
    margin-left:2rem;
}
@media (min-width: 768px) and (max-width: 991px) {
    .container_portada_home{
        width:100%;
        height:900px;
        border:1px solid red;
    }
    .fotoPortada{
        width:100%;
        height:900px;
    }
    .overlay{
        width:100%;
        height:900px;         
    }
}

@media (min-width: 1025px) {
    .container_portada_home{
        width:100%;
        height:1200px;
    }
    .fotoPortada{
        width:100%;
        height:1200px;
    }
    .overlay{
        width:100%;
        height:1200px;
    }
}
</style>