<script>
import TitleSection from '../TitleSection.vue';
import IconDress from '../icons/IconDress.vue';
export default {
    name:'DressCode',
    components:{
        TitleSection,
        IconDress 
    },
    data(){
        return{
            text:'semiformal'
        }
    }
}
</script>
<template>
    <div class="dressCode">
        <TitleSection title="DRESS CODE">
            <template #icon>
                <IconDress/>
            </template>
        </TitleSection>
        <span class="container_text_dresscode">
            <p class="text_dresscode">{{ text }}</p>
        </span>
    </div>
    
</template>
<style>
.dressCode{
    margin-top:1rem;
    width:100%;
    display: flex;
    flex-direction: column;
    align-content: center;
}
.container_text_dresscode{
    width:100%;
    display: flex;
    justify-content: center;
}
.text_dresscode{
    font-family: "Playfair";
    font-style: italic;
    font-weight: lighter;
    text-align: center;
    font-size: 1.5rem;
}
@media (min-width: 768px) and (max-width: 991px) {
    .text_dresscode{
        font-size: 2.5rem;
    }
}
@media (min-width: 1025px) {
    .dressCode{
        margin-top:4rem;
    }
    .text_dresscode{
        font-size: 2.5rem;
    }
}
</style>