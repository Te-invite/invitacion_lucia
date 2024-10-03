<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    name:'CurvaOscura',
    mounted(){
        AOS.init({
            duration: 700
        })
    }
}
</script>
<template>
    <div data-aos="fade-left">
    <svg id="curva_osc" viewBox="0 0 430 91" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2008_41)">
            <mask id="mask0_2008_41" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="430"
                height="91">
                <path d="M430 0L0 0L0 91L430 91V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_2008_41)">
                <path
                    d="M130.937 92.3103L448.854 92.3103L450.56 54.7641C450.56 54.7641 376.082 6.25768 299.126 24.3573C222.17 42.4569 202.308 84.4423 130.937 70.69V92.3103Z"
                    fill="#8F8F8F" />
                <path
                    d="M450.282 87.516L448.288 38.7341C448.288 38.7341 406.217 66.6427 299.803 43.5467C193.39 20.4508 47.3829 -34.399 -12.0098 42.5854L-12.0098 87.516L450.282 87.516Z"
                    fill="black" fill-opacity="0.73" />
                <path
                    d="M-67.6232 92.3042L472.816 92.3042L469.735 41.618C469.735 41.618 425.187 106.093 284.954 81.0746C144.721 56.056 9.43775 -25.735 -67.2767 79.152C-67.2767 79.152 -67.429 84.4117 -67.6232 92.3042Z"
                    fill="white" />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_2008_41">
                <rect width="430" height="91" fill="white" />
            </clipPath>
        </defs>
    </svg>
</div>
</template>
<style>
#curva_osc{
    width:100%;
    height:91px; 
}
@media (min-width: 768px) and (max-width: 991px) {
    #curva_osc{
        width:100vw;
        height:100%; 
    }
}
@media (min-width: 1025px) {
    #curva_osc{
        width:100vw;
        height:50%; 
    }
}
</style>