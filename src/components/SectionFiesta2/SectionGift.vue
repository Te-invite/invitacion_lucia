<script>
import IconGift from '../icons/IconGift.vue';
import TitleSection from '../TitleSection.vue';
import PopupBancario from '../popup/PopupBancario.vue';
import Boton from '../Boton.vue';
export default {
    name:'SectionGift',
    components:{
        TitleSection,
        IconGift,
        Boton,
        PopupBancario
    },
    data(){
        return{
            text:'Si deseas regalarme algo más que tu hermosa presencia...',
            popup:false
        }
    },
    methods: {
        togglePopUp(){
            this.popup = !this.popup
        }        
    }
}
</script>
<template>
    <div id="gift" class="content_gift" data-aos="zoom-out">
        <TitleSection title="REGALOS">
            <template #icon>
                <IconGift/>
            </template>
        </TitleSection>  
        <span class="content_text_gift">
            <p class="textGift">{{ text }}</p>
        </span>
        <div class="content_button">
            <PopupBancario v-show="popup" @close="togglePopUp()"/>
            <Boton label="DATOS BANCARIOS" customClass="btn-mayor" @click="togglePopUp()"/>
        </div>

    </div>
</template>
<style>
.content_gift{
    margin-top:1rem;
    width:100%;
    display: flex;
    flex-direction: column;
    align-content: center;
}
.content_text_gift{
    width:100%;
    display: flex;
    justify-content: center;
}
.textGift{
    font-family: "Playfair";
    font-style: italic;
    font-weight: lighter;
    text-align: center;
    font-size: 1.5rem;
    margin:0 1rem; 
}
.content_button{
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
}
@media (min-width: 768px) and (max-width: 991px) {
    .textGift{
        font-size: 2.5rem;
    }
}
@media (min-width: 1025px) {
    .textGift{
        font-size: 2.5rem;
    }
}
</style>