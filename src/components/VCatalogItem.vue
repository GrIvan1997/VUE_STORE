<template>
  <div class="VCatalogItem">
  <img class="VCatalogItem__image" :src="require('../assets/images/'+ product_data.image)" alt="Картинка">
  <p class="v_catalog_item__name">{{product_data.name}}</p>
  <p class="v_catalog_item__price">{{product_data.price}}</p>
  <button class="v_catalog_item__btn_card btn" @click="addToCart"> Add to card</button>
  </div>
</template>

<script>
export default {
  name: "VCatalogItem",
  created() {},
  data() {
    return {};
  },
  props: {
    product_data: {
      type: Object,
      default(){
        return{}
      }
    }
  },
  methods: {
    addToCart(){
      this.$emit('addToCart',this.product_data);
    }
  },
};
</script>

<style lang="scss" scoped>
 .VCatalogItem {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
   padding: $padding*2;
    margin-bottom: $margin*2;
    &__item{
  width: 100px;
 }
 }
 
</style>