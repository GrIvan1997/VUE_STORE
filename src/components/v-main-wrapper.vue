<template>
    <div class="v_main_wrapper">
    <router-view></router-view>
 <!--      <VCatalog/> 
         <vCard
        v-if="CART.length"
     :cart_data = "CART"
         -->
       <!--  /> -->
    </div>
</template>

<script>
/* import VCatalog from './VCatalog.vue'
import vCard from './V_card.vue' */
import { mapGetters } from 'vuex'

export default {
    name:'v_main_wrapper',
 /*    components: {
    VCatalog,
    vCard
}, */
    props: {},
    data() {
        return {
        }
    },
    computed:{
        ...mapGetters([
            'CART'
        ])
    },
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
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
}
</style>