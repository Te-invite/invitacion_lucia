<script>
import TitleSection from '../TitleSection.vue';
import IconLocation from '../icons/IconLocation.vue';
import Boton from '../Boton.vue';

export default {
    name:'SectionLugar',
    components:{
        TitleSection,
        IconLocation,
        Boton
    },
    data() {
        return {
        infoBtn: '¿CÓMO LLEGAR?',
        modalTitle: 'Cómo llegar a la ceremonia',
        mapUrl:'https://maps.app.goo.gl/aRUfbS4xgdfiCsDS9'
        };
    }, 
    methods:{
        openMap(){
            window.open(this.mapUrl, '_blank');
        }   
    }
}
</script>
<template>
    <div>
        <TitleSection title="Lugar">
            <template #icon>
                <IconLocation />
            </template>
        </TitleSection>
        <Boton label="¿CÓMO LLEGAR?" customClass="btn-mayor" @click="openMap()"/>
    </div>
</template>