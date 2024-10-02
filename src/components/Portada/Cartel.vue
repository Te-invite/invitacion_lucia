<script>
import Cartel from '@/assets/img/marco.png';
export default {
    name:'Cartel',
    data(){
        return{
            Cartel,
            subtitle:'¡Únete a la celebración de...!',
            title:'Lucia'
        }
    }
}
</script>
<template>
    <div class="container_cartel">
        <img :src="Cartel" class="imagen_1" alt="marco">
        <div class="contantent_text">
            <p class="subtitulo_cartel">{{ subtitle }}</p>
            <h1 class="titulo_cartel">{{ title }}</h1>
        </div>
        
    </div>
</template>
<style>
.container_cartel{
    width:320px;
    height: 246px;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
}
.imagen_1{
    width:100%;
    height:100%;
    object-fit: contain;
    
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
.titulo_cartel,
.subtitulo_cartel{
    font-family: "Playfair Display";
    font-weight: bold;
    font-style: italic;
}
.subtitulo_cartel{
    color:#8B8B8B;
    font-size: 1rem;
    line-height: 100%;
}
.titulo_cartel{
    color:#525252;
    font-size: 7rem;
    line-height: 100%;
}
@media (min-width: 1025px) {
    .container_cartel{
        width:900px;
        height:350px;
    }
    .subtitulo_cartel{
        font-size: 1.5rem;
    }
    .titulo_cartel{
        font-size: 9rem;
    }
}
</style>