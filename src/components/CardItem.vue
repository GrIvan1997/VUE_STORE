<template>
  <div class="CardItem">
   <img  class="card_item_image" :src="require('../assets/images/'+ cart_data_item.image)" alt="">
    <div class="card_item__inf">
    <p>{{cart_data_item.name}}</p>
    <p>{{cart_data_item.price}}</p>
    <p>{{cart_data_item.article}}</p>
    </div>
    <div class="cart_item__quantity">
    <p> qua:</p>
    {{cart_data_item.quantity}}
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  created() {},
  data() {
    return {};
  },
  props: {
    cart_data_item:{
      type: Object,
      default(){
        return{}
      }
    }
  },
  methods: {
    deleteFromCart(){
      this.$emit('deleteFromCart')
    }
  },
  mounted(){
    this.$set(this.cart_data_item,'quantity',1)
  }
};
</script>

<style lang="scss" scoped>
.CardItem{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  }
 .card_item_image{
  width: 50px;
 }
  </style>
  