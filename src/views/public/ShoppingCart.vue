<template>
  <div>
    <h1>Welcome to your Shopping Cart</h1>
    <ShoppingCartList :cart="cart.cart" />
  </div>
</template>

<script>
import ShoppingCartList from "@/components/ShoppingCartList.vue";
import {mapState} from "vuex";
export default {
  components: { ShoppingCartList },
  computed: {
    ...mapState(['cart']),
  },
}
</script>

<style scoped>
</style>
