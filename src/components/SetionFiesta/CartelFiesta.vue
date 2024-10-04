<script>
import Cartel from '@/assets/img/marco.png';
export default {
    name:'CartelFiesta',
    data(){
        return{
            Cartel,
            title:'26.10.24',
            subtitle:'21:30 hs.',
        }
    }
}
</script>
<template>
    <div class="container_cartelFiesta" data-aos="flip-left">
        <img :src="Cartel" class="imagen_1" alt="marco">
        <div class="contantent_text">
            <h1 class="titulo_cartelFiesta">{{ title }}</h1>
            <p class="subtitulo_cartelFiesta">{{ subtitle }}</p>
        </div>
        
    </div>
</template>
<style>
.container_cartelFiesta{
    margin-top: 1rem;
    width:248px;
    height: 148px;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
}
.imagen_1{
    width:100%;
    height:100%;
    object-fit:fill;
    
}
.contantent_text{
    position:absolute;
    width:100%;
    height:80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.titulo_cartelFiesta,
.subtitulo_cartelFiesta{
    font-family: "Playfair";
    color:#1E1E1E;
    text-align: center;
}
.subtitulo_cartelFiesta{
    font-size: 1.5rem;
    line-height: 100%;
}
.titulo_cartelFiesta{
    font-size: 2.5rem;
    line-height: 80%;
    font-weight:normal;
}
@media (min-width: 768px) and (max-width: 991px) {
    .container_cartelFiesta{
        width:448px;
        height: 220px;
    }
    .subtitulo_cartelFiesta{
        font-size: 3rem;
    }
    .titulo_cartelFiesta{
        font-size: 5rem;
    }
}
@media (min-width: 1025px) {
    .container_cartelFiesta{
        width:648px;
        height: 320px;
    }
    .subtitulo_cartelFiesta{
        font-size: 4rem;
    }
    .titulo_cartelFiesta{
        font-size: 6rem;
    }
}
</style>