<template>
  <div class="create-product">
    <CreateProductForm @add-product="addProduct" :categories="categories.categories" />
  </div>
</template>

<script>
import CreateProductForm from "@/components/CreateProductForm.vue";
import {mapState} from "vuex";
export default {
  components: { CreateProductForm },
  computed: {
    ...mapState(['categories']),
  },
  methods: {
    addProduct(product) {
      this.$store.commit("products/ADD_PRODUCT", product);
    },
  },
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
