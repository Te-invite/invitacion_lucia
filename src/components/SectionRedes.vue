<script>
import IconInstagram from './icons/IconInstagram.vue';
import Swal from 'sweetalert2';
import Boton from './Boton.vue';
export default {
    name: 'SectionRedes',
    data() {
        return {
            text: 'Una gran fiesta junto a vos Compartí tus fotos y videos de ese hermoso día',
            hastag: '#15LUCIA',
        }
    },
    components: {
        IconInstagram,
        Boton
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
    <div class="containerRedes" >
        <span class="content_textRedes" data-aos="flip-left">
            <h4 class="textoRedes">{{ text }}</h4>
        </span>
        <IconInstagram />
        <p class="text_hashtag" data-aos="zoom-out-right">{{ hastag }}</p>
        <Boton label="COPIAR #" customClass="btn-mayor" @click="copyToClipboard(hastag)" />
    </div>
</template>
<style>
.containerRedes {
    margin: 2rem 0;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.content_textRedes {
    width: 320px;
    height: 60%;
    display: flex;
    justify-content: center;
}

.textoRedes {
    font-family: "Playfair";
    font-style: italic;
    font-weight: lighter;
    text-align: center;
    font-size: 1.5rem;
}

.text_hashtag {
    margin-top: 1rem;
    font-family: "Playfair Display";
    font-style: italic;
    font-size: 1rem;
    line-height: 100%;
}

@media (min-width: 768px) and (max-width: 991px) {
    .containerRedes {
        margin: 2rem 0;
        width: 100%;
        height: 100%;
    }

    .content_textRedes {
        width: 80%;
        height: 60%;
    }

    .textoRedes {
        font-size: 3rem;
    }

    .text_hashtag {
        margin-top: 1rem;
        font-size: 2rem;
    }
}
@media (min-width: 1025px) {
    .containerRedes {
        width: 100%;
        height: 400px;
        border:1px solid red;
    }

    .content_textRedes {
        width: 80%;
        height: 60%;
    }

    .textoRedes {
        font-size: 3rem;
    }

    .text_hashtag {
        margin-top: 1rem;
        font-size: 2rem;
    }}
</style>