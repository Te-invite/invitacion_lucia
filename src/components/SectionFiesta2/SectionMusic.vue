<script>
import Boton from '../Boton.vue';
import IconMusic from '../icons/IconMusic.vue';
import TitleSection from '../TitleSection.vue';
import Swal from 'sweetalert2';
export default {
    name:'SectionMusic',
    components:{
        TitleSection,
        IconMusic,
        Boton
    },
    data(){
        return{
            text:'¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?',
        }
    },
    methods: {
        togglePopUp(){
            this.popup = !this.popup
        },
        redirectToSheet() {
        Swal.fire({
            title: 'Info!',
            text: 'Será redirigido a YouTube. Para continuar presione OK, o Cancelar para cerrar.',
            icon: 'info',
            showCancelButton: true, // Habilita el botón "Cancelar"
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancelar', // Texto del botón "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                // Si el usuario presiona "OK"
                window.open("");
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Si el usuario presiona "Cancelar", cierra el popup de SweetAlert
                this.togglePopUp();
            }
        });
    }    
    }
}
</script>
<template>
    <div  class="content_music" id="sectionmusic" data-aos="zoom-in-left">
        <TitleSection title="MÚSICA">
            <template #icon>
                <IconMusic/>
            </template>
        </TitleSection>  
        <span class="content_text_music">
            <p class="textMusic">{{ text }}</p>
        </span> 
        <Boton label="SUGERIR CANCIÓN" customClass="btn-mayor" @click="redirectToSheet()"/>   
    </div>
</template>
<style>
.content_music{
    margin-top:1rem;
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 
}
.content_text_music{
    width:100%;
    height:100%;
    display: flex;
   justify-content: center;
}
.textMusic{
    font-family: "Playfair";
    font-style: italic;
    font-weight: lighter;
    text-align: center;
    font-size: 1.5rem;
    margin:0 1rem; 
}
@media (min-width: 768px) and (max-width: 991px) {
    .textMusic{
        font-size: 2.5rem;
    }
}
@media (min-width: 1025px) {
    .content_music{
    width:100%;
    height:300px;
    }
    .textMusic{
        font-size: 2.5rem;
    }
}
</style>