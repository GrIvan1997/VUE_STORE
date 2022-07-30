<template>
  <div> <h1>Каталог</h1>
    <div class="VCatalog__list">
      <VCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
 
</template>

<script>
import VCatalogItemVue from './VCatalogItem.vue';
import VCatalogItem from './VCatalogItem.vue';
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "VCatalog",
    VCatalogItemVue,
    created() { },
    data() {
        return {
      
  };
    },
    props: {},
    methods: {
      ...mapActions([
        'GET_PRODUCTS',
        'SET_CART'
      ]),
      addToCart(data){
        this.addToCart(data)
      }
    },
    mounted(){
        this.GET_PRODUCTS()
    },
    computed: {
      ...mapGetters([
        'PRODUCTS'
        ])
    },
    components: { VCatalogItem }
};
</script>

<style lang="scss" scoped>
  .VCatalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }</style>