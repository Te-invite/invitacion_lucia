<script>
import PopupBase from './PopupBase.vue';
import Swal from 'sweetalert2';
import IconGift from '../icons/IconGift.vue';
import Boton from '../Boton.vue';

export default {
    name: 'CardBancario',
    components: {
        PopupBase,
        IconGift,
        Boton
    },
    data() {
        return {
            title: 'Regalos',
            cvu: '0140361703635851312607',
            alias: 'lucii.defrancesco'
        }
    },
    methods: {
        copyToClipboard(text) {
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            Swal.fire({
                title: 'OK!',
                icon: 'success',
                text: '¡El texto ha sido copiado!',
                confirmButtonText: 'OK'
            });
        }

    }
}
</script>

<template>
    <popup-base :title="title" >
        <template #icon>
        </template>
        <div class="modal-body">
        </div>
        <div class="pop-up-footer">
            <Boton label="COPIAR CBU" class="btn_" customClass="btn-mayor" @click="copyToClipboard(cvu)"/>
            <Boton label="COPIAR ALIAS" customClass="btn-mayor" @click="copyToClipboard(alias)"/>
        </div>
    </popup-base>
</template>

<style scoped>


.block__text {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.title__section {
    font-family: "Playfair Display";
    color:#1E1E1E;
    font-size: 1rem;
}

.text__section {
    font-family:"Playfair Display";
    color: #1E1E1E;
    font-size: 14px;
    margin-top: .6rem;
    margin-left: .5rem;
    line-height: 100%;
}
.btn_{
    margin-bottom: 1rem;
}
@media(max-width:320px) {
    .pop-up {
        padding: 3px 16px 200px;
    }
    .pop-up-body{
        height:100%;
    }
}

@media(max-width:360px) {
    .pop-up-inner {
        width: 100%;
        height: 530px;
    }

    .circle {
        width: 45px;
        height: 45px;
    }

    .pop-up-body {
        height: 90%;
    }

    .title {
        margin: 0;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .pop-up-inner {
        width: 70%;
    }
}

@media (min-width: 1025px) {
    .pop-up-inner {
        width: 100%;
        height:400px;
        display:flex;
    }

    .pop-up-body {
        width: 100%;
        display:flex;
        justify-content: center;
    }
    .circle {
        width: 150px;
        height: 150px;
    }

    .pop-up-footer {
        width: 100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .btn-primary {
        width: 70%;
    }
}
</style>