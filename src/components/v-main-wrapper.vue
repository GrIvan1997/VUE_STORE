<template>
    <div class="v_main_wrapper">
        <VCatalog/>
        <V_cardVue/>
    </div>
</template>

<script>
import VCatalog from './VCatalog.vue'
import V_cardVue from './V_card.vue'

export default {
    name:'v_main_wrapper',
    components: {
    VCatalog,
    V_cardVue
},
    props: {},
    data() {
        return {
        }
    },
    computed:{},
    methods: {
        
    },
    watch:{},
    mounted() {
        console.log('123')
    },
}
</script>

<style scoped>
.v_main_wrapper{
    display: flex;
    max-width: 900px;
    margin: 0 auto;
}
</style>