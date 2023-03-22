<template>
  <div>
    <h1>Details of your product:</h1>
    <ProductDetails @add-quantity="addQuantity($event)" :index="index" :product="product" />
  </div>
</template>

<script>
import {mapState} from "vuex";
import ProductDetails from "@/components/ProductDetails.vue";
export default {
  components: { ProductDetails },
  props: {
    product: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    addQuantity(temp) {
      this.$store.commit("products/ADD_QUANTITY", temp, { root: true });
    },
  },

}
</script>

<style scoped>

</style>