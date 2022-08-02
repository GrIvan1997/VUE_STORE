<template>
  <div class="v_card"> 
  <h1>Cart</h1>
  <CardItem 
  v-for="(item,index) in cart_data"
  :key="item.art"
  :cart_data_item = "item"
  @deleteFromCart ="deleteFromCart(index)"
  />
  </div>
</template>

<script>
import CardItem from './CardItem.vue';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
  name: "vCard",
  components: {
    CardItem,
},
  created() {},
  data() {
    return {};
  },
  props: {
    cart_data:{
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    ...mapActions([
'DELETE_FROM_CART'
    ]),
    deleteFromCart(index){
      this.DELETE_FROM_CART(index)
    }
  },
  computed:{
    ...mapGetters([
      'CART'
    ])

  }
};
</script>

<style lang="scss" scoped></style>