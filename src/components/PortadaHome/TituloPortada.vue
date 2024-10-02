<script>
export default {
    name:'TituloPortada',
    data(){
        return{
            title1:'xv',
            title2:'Lucia',
            subtitle:'26.10.24'
        }
    }
}
</script>
<template>
    <div class="container_title-portada">
        <h1 class="title_portadaHome">{{ title1 }}</h1>
        <h1 class="title_portada">{{ title2 }}</h1>
        <div class="line"></div>
        <p class="subtitle_portadaHome">{{ subtitle }}</p>
    </div>
</template>
<style>
.container_title-portada{
    width:100%;
    height: 70%;
    position:absolute;   
    display:flex;
    flex-direction: column;
    align-items: center;
    z-index: 2; 
}
.title_portadaHome,
.title_portada,
.subtitle_portadaHome{
    color:white;
    
}
.title_portadaHome{
    font-family: "Allura";
    font-size: 17.5rem;
    text-align: center;
    line-height: 80%;
    margin-top:3rem;
}
.title_portada{
    font-family: "Playfair Display";
    font-weight: bold;
    font-style: italic;
    text-align: center;
    font-size: 5rem;
    line-height: 0;
}
.line{
    width:220px;
    height:1px;
    border-top:2px solid white;
    margin-top:2.5rem;
}
.subtitle_portadaHome{
    font-family: "Playfair Display";
    font-weight: bold;
    font-style: italic;
    text-align: center;
    font-size: 2rem;
}
@media (min-width: 1025px) {
    .title_portadaHome{
        font-size: 30rem;
    }
    .title_portada{
        font-size: 7.5rem;
    }
    .line{
        width:400px;
        margin-top:3.5rem;
    }
    .subtitle_portadaHome{
        font-size: 2.5rem;
    }
}
</style>