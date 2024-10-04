<script>
import ButtonForm from './ButtonForm.vue';
export default {
  name: 'FormularioAsistencia',
  data() {
    return {
      section: 'CONFIRMAR ASISTENCIA',
      title: '¿Asistiré a la fiesta?',
      titleSect1: 'ASISTIRÉ:',
      datos:'DATOS PERSONALES:',
      options1: 'Sí',
      options2: 'No',
      inputName: 'Nombre completo:',
      inputTxtArea: 'Información adicional (opcional):',
      isAttending: '',
      nombre: '',
      informacionAdicional: '',
      errorMessage: ''
    }
  },
  components:{
    ButtonForm
  }
}
</script>
<template>
    <div class="containerFormulario" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
        <div class="content_title_formulario">
            <h1 class="titleFormulario">{{ section }}</h1>
        </div>
        <div class="modal-body">
            <div class="-flex flex-column">
                <fieldset>
                    <legend>{{ titleSect1 }}</legend>
                    <div class="form-group mb-3">
                        <label for="" class="title_section"></label>
                        <div class="content__radio">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" id="attendingYes" name="attendance"
                                    v-model="isAttending" value="yes" />
                                <label class="form-check-label" for="attendingYes">{{ options1 }}</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" id="attendingNo" name="attendance"
                                    v-model="isAttending" value="no" />
                                <label class="form-check-label" for="attendingNo">{{ options2 }}</label>
                            </div>
                        </div>
                        <span class="text-danger" v-if="errorMessage">{{ errorMessage }}</span>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>{{ datos }}</legend>
                    <div class="form-group mb-3">
                        <label for="nombre" class="form-label">{{ inputName }}</label>
                        <input type="text" class="form-control input_text" id="nombre" v-model="nombre"
                            placeholder="Ej: Juan Pérez" />
                    </div>
                    <div class="form-group mb-3">
                        <label for="informacionAdicional" class="form-label">{{ inputTxtArea }}</label>
                        <textarea class="form-control input_text" id="informacionAdicional" v-model="informacionAdicional"
                            rows="2" placeholder="Ej: Vegetariano, alergico, etc."></textarea>
                    </div>
                </fieldset>
    
            </div>
        </div>
        <div class="btnForm">
            <ButtonForm :nombre="nombre" :isAttending="isAttending" :informacionAdicional="informacionAdicional"/>
        </div>
    </div>
</template>
<style>
.containerFormulario {
    margin: 1.5rem 0;
    width: 90%;
    height:500px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content_title_formulario {
    display: flex;
    justify-content: center;
    align-items: center;
}
.titleFormulario,
legend{
    font-family: "Playfair";
    font-style: italic;
    color:var(--color_title);
    font-weight: bold;
}

.titleFormulario{
    font-size: 1.4rem;
}
legend{
    font-size: 1rem;
    line-height: 0%;
    margin:1rem 0;
}

.modal-body {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content__radio {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1rem;
    font-family: "Playfair";
    font-weight: lighter;
}

.form-check-input {
    border: 2px solid #1E1E1E;
}

.form-control {
    border: none;
    border-radius: 0%;
    width: 100%;
}

.input_text {
    border-bottom: 1px solid #525252;
}
input,
textarea,
.form-label {
    font-size: 1rem;
    font-family: "Playfair";
    font-weight: lighter;
}
.form-label{
    line-height: 0%;
}

.form-control::placeholder{
    color: #A9ABAE;
}
@media (min-width: 768px) and (max-width: 991px) {
    .containerFormulario {
        width:90%;
        height:100%;
    }

    .titleFormulario{
        font-size: 2.5rem;
    }
    legend{
        font-size: 1.6rem;
    }
    .modal-body {
        width: 100%;
    }
    .content__radio {
        font-size: 1.5rem;
        width:450px;
    }
    input,
    textarea,
    .form-label,
    ::placeholder {
        font-size: 1.5rem;
    }
}
@media (min-width: 1025px) {
    .containerFormulario {
        width:900px;
        height:600px;
    }

    .titleFormulario{
        font-size: 3.5rem;
    }
    legend{
        font-size: 2.6rem;
        margin-bottom:2rem;
    }
    .modal-body {
        width:800px;
    }
    .content__radio {
        font-size: 2rem;
        width:550px;
    }
    .form-group,
    .mb-3{
        margin-top: 4rem;
        
    }
    input,
    textarea,
    .form-label,
    ::placeholder {
        font-size: 2rem;
    }
}
</style>