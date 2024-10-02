<script>
import Boton from '../Boton.vue';
export default {
    name:'PanelControl',
    components:{
        Boton
    },
    methods:{
        enterWithMusic(){
            // this.$router.push({ name: 'Invitation' });
        },
        enterWithoutMusic(){
            // this.$router.push({ name: 'Invitation' });
        }
    }
}
</script>
<template>
    <div class="container__button">
        <Boton label="INGRESAR CON MUSICA" customClass="btn-mayor btn_ingreso" @click="enterWithMusic"/>
        <Boton label="INGRESAR SIN MUSICA" customClass="btn-mayor" @click="enterWithoutMusic"/>
    </div>
    
</template>
<style>
.container__button{
    margin-top: 2rem;
    width:100%;
    height:130px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

@media (min-width: 1025px) {
    .container__button{
        margin-top: 2rem;
        width:630px;
        height:130px;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
}
</style>