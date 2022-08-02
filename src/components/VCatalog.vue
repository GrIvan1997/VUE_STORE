<template>
  <div> 
  <router-link :to="{name: 'cart', parems:{card_data: CART}}">
  <div class="VCatalog__link_to_cart">Cart: {{CART.length}}</div>
  </router-link>
   
  <h1>Каталог</h1>
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
        'ADD_TO_CART'
      ]),
        addToCart(data){
        this.ADD_TO_CART(data)
      }
    },
    mounted(){
        this.GET_PRODUCTS()
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
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
    &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding*2;
    border: solid 1px #aeaeae;
    }
  }
  </style>