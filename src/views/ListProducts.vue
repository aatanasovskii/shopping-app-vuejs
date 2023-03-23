<template>
  <div class="categories">
    <ListProductsTable :products="products.products" @delete-product="deleteProduct" @publish-product="publishProduct" />
  </div>
</template>

<script>
import ListProductsTable from "@/components/ListProductsTable.vue";
import {mapState} from "vuex";
export default {
  computed: {
    ...mapState(['products']),
  },
  components: {ListProductsTable},
  methods: {
    deleteProduct(index) {
      this.$store.commit("products/DELETE_PRODUCT", index, { root: true });
    },
    publishProduct(index) {
      this.$store.commit("products/PUBLISH_PRODUCT", index, { root: true });
    },
  },
}
</script>

<style scoped>
</style>
