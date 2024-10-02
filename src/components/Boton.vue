<script>
export default{
    name:'Boton',
    props: {
    label: {
      type: String,
      required: false 
    },
    customClass: {
      type: String,
      default: 'btn-mayor'
    }
  }

}
</script>
<template>
   <button type="button" :class="['btn', customClass, 'btn-lg']">
      {{ label }}
    </button>
</template>
<style>
.btn-mayor{
    width: 300px;
    background: transparent;
    color:var(--color_btn);
    border: 1px solid #A9ABAE;
    padding: .75rem 1rem;
    font-weight: 400;
    font-style: normal;
}
.btn-mayor:hover{
  background: #A9ABAE;
  color:white;
}
</style>