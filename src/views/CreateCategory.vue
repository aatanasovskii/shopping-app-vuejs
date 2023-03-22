<template>
  <div class="create-category">
    <h2>Create New Category</h2>
    <CreateCategoryForm @add-category="addCategory($event)" />
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import CreateCategoryForm from "@/components/CreateCategoryForm.vue";
export default {
  components: {CreateCategoryForm},
  methods: {
    addCategory(category) {
      this.$store.commit("categories/ADD_CATEGORY", category, { root: true });
    },
  },
}
</script>

<style>
.create-category {
  align-items: center;
}
.error{
  color: red;
}
.reset {
  margin-top: 10px;
}
</style>