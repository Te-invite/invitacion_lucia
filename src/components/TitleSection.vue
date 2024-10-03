<script>
export default {
    name:'TitleSection',
    props: {
    title: {
      type: String,
      required: true, // El título debe ser pasado como prop
    }
  }
}
</script>
<template>
    <div class="container_title">
        <slot name="icon"></slot>
        <h1 class="titleSection">{{ title }}</h1>
    </div>
</template>
<style>
.container_title{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:2rem;
}
.titleSection{
    font-family:"Playfair Display";
    font-style: italic;
    font-weight: normal;
    font-size:2.5rem;
    text-align: center;
}
</style>