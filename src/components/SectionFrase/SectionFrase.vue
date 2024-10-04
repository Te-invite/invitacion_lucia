<script>
import ComillaApertura from '../icons/ComillaApertura.vue'
import ComillaCierre from '../icons/ComillaCierre.vue'

export default {
    name:'SectionFrase',
    data(){
        return{
            text:'Te espero para compartir la alegría de esa noche que será para mi mágica, inolvidable y única.'
        }
    },
    components:{
        ComillaApertura, ComillaCierre
    }
}
</script>
<template>
    <div class="container_frase">
        <ComillaApertura/>
        <span class="content_text" >
            <h4 class="texto">{{ text }}</h4>
        </span>
        <ComillaCierre/>
    </div>
</template>
<style>
.container_frase{
    margin:1.5rem 0;
    width:100%;
    height:180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.content_text{
    width:320px;
    height:60%;
    display: flex;
    justify-content: center;
}
.texto{
    font-family: "Playfair";
    font-style: italic;
    font-weight: lighter;
    text-align: center;
    font-size: 1.5rem;
}
@media (min-width: 768px) and (max-width: 991px) {
    .container_frase{
        margin:50% 0;
        width:100%;
        height:300px;
    }
    .content_text{
        width:80%;
        height:60%;
    }
    .texto{
        font-size: 2.5rem;
    }
}
@media (min-width: 1025px) {
    .container_frase{
        margin:60% 0;
        width:100%;
        height:300px;
    }
    .content_text{
        width:80%;
        height:60%;
    }
    .texto{
        font-size: 2.5rem;
    }
}
</style>