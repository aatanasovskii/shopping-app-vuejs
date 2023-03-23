<template>
  <div>
    <h2>All products that belong in the category: {{ category.title }}</h2>
    <CategoryProductsList :category="category" :products="products.products" />
  </div>
</template>

<script>
import CategoryProductsList from "@/components/CategoryProductsList.vue";
import {mapState} from "vuex";
export default {
  components: {CategoryProductsList},
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(['products']),
  },
}
</script>

<style scoped></style>
