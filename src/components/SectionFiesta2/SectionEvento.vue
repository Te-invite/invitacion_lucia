<script>
import background2 from '@/assets/img/background_invitacion.png'
import DressCode from './DressCode.vue';
import SectionGift from './SectionGift.vue';
import SectionMusic from './SectionMusic.vue';
import CurvaRightPlateada from '../icons/CurvaRightPlateada.vue';
export default {
    name: 'SectionEvento',
    data() {
        return {
            background2
        }
    },
    components: {
        DressCode,
        SectionGift,
        SectionMusic,
        CurvaRightPlateada
    }
}
</script>
<template>
    <div class="container_evento">
        <img :src="background2" class="background2" alt="tapiz">
        <div class="content_evento">
            <!-- Dress Code -->
            <DressCode />
            <!-- Regalos -->
            <SectionGift />
            <!-- Musica -->
            <SectionMusic />
        </div>
        <CurvaRightPlateada class="curvaRight" />
    </div>

</template>
<style>
.container_evento {
    position: relative;
    width: 100%;
    min-height:900px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.background2 {
    width: 100%;
    height: 850px;
}

.content_evento {
    margin-top: 2rem;
    position: absolute;
    z-index: 0;

}

.curvaRight {
    position: absolute;
    bottom: 0%;
    right: 0;
    width: 100%;
    height: auto;
    z-index: 1;
}

@media (min-width: 768px) and (max-width: 991px) {
    .content_evento {
        width: 100%;
        height: auto;
    }

    .curvaRight {
        bottom: 4%;
    }

    .background2 {
        width: 100%;
        height: 90%;
    }

    .content_evento {
        margin-top: 2rem;

    }
}

@media (min-width: 1025px) {

    .content_evento {
        width: 100%;
    }

    .curvaRight {
        bottom: 0;
    }

    .background2 {
        width: 100%;
        height: 1300px;
    }
}
</style>