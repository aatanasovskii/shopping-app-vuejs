<template>
  <div class="categories">
    <ListProductsTable @delete-product="deleteProduct($emit)" @publish-product="publishProduct($emit)" />
  </div>
</template>

<script>
import ListProductsTable from "@/components/ListProductsTable.vue";
export default {
  components: {ListProductsTable},
  methods: {
    deleteProduct(index) {
      this.$store.commit("products/DELETE_PRODUCT", index, { root: true });
    },
    // publishProduct(index) {
    //   this.$store.commit("products/PUBLISH_PRODUCT", index, { root: true });
    // },
  },
}
</script>

<style scoped>
</style>
