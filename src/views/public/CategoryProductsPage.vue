<template>
  <div>
    <h2>All products that belong in the category: {{ category.title }}</h2>
    <CategoryProductsList :category="category" />
  </div>
</template>

<script>
import CategoryProductsList from "@/components/CategoryProductsList.vue";

export default {
  components: {CategoryProductsList},
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
