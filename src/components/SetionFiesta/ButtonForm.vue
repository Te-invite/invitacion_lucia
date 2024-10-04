<script>
import BotonBase from '../Boton.vue';
import Swal from 'sweetalert2';
export default {
    name:'ButtonForm',
    components:{
        BotonBase
    },
  props: {
    nombre: String,
    isAttending: String,
    informacionAdicional: String
  },
  methods: {
    enviarAWhatsApp(telefono) {
      if (!this.nombre || !this.isAttending) {
        Swal.fire({
          title: 'Error!',
          text: 'Por favor, complete todos los campos requeridos',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        return;
      }

      const mensaje = `Nombre: ${this.nombre}\nAsistiré: ${this.isAttending === 'yes' ? 'Sí' : 'No'}\nInformación adicional: ${this.informacionAdicional}`;
      const enlaceWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

      Swal.fire({
        title: 'Info!',
        text: 'Será redirigido a WhatsApp para confirmar el envío del mensaje.',
        icon: 'info',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(enlaceWhatsApp, '_blank');
        }
      });
    }
  }
};
</script>
<template>
    <div class="buttonForm">
        <BotonBase label="CONFIRMAR A MAMÁ" customClass="btn-mayor"  @click="enviarAWhatsApp('2983551277')"/>
        <BotonBase label="CONFIRMAR A PAPÁ" customClass="btn-mayor"  @click="enviarAWhatsApp('2983541367')"/>
        
    </div>
</template>
<style>
.buttonForm{
    width:100%;
    height:120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
}
@media (min-width: 768px) and (max-width: 991px) {
  .buttonForm{
    width:650px;
    height:70px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-around;
  }
}
@media (min-width: 1025px) {
  .buttonForm{
    width:650px;
    height:70px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-around;
  }
}
</style>