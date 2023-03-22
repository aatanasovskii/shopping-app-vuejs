<template>
  <div class="create-product">
    <CreateProductForm @add-product="addProduct($event)" />
  </div>
</template>

<script>
import CreateProductForm from "@/components/CreateProductForm.vue";
export default {
  components: { CreateProductForm },
  methods: {
    addProduct(product) {
      this.$store.commit("products/ADD_PRODUCT", product);
    },
  },
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
