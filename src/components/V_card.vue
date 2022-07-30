<template>
  <div class="v_card"> 
  <h1>Cart</h1>
  <CardItem v-if="CART.lenght"/>
  </div>
</template>

<script>
import CardItem from './CardItem.vue';
import { mapGetters } from 'vuex';
export default {
  name: "vCard",
  components: {
    CardItem,
},
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  computed:{
    ...mapGetters([
      'CART'
    ])

  }
};
</script>

<style lang="scss" scoped></style>