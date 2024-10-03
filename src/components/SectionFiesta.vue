<script>
import TitleSection from './TitleSection.vue';
import IconParty from './icons/IconParty.vue';
export default {
    name:'SectionFiesta',
    components:{
        TitleSection,
        IconParty
    },
    data(){
        return{
            title:'Fiesta'
        }
    }
}
</script>
<template>
    <div class="container_fiesta">
        <TitleSection title="Fiesta">
            <template #icon>
                <IconParty /> <!-- Pasa el icono directamente en el slot -->
            </template>
        </TitleSection>
        <!--Titulo de la sesion-->
        <!--Frase-->
        <!--Cartel-->
        <!--Formulario-->
    </div>
</template>
<style>
.container_fiesta{
    border:1px solid red;
    width:100%;
    height:300px
}
</style>


