<template>
  <form @submit.prevent="submitForm" novalidate>
    <div>
      <label>Title: </label>
      <input
          placeholder="Add title"
          type="text"
          id="title"
          v-model="category.title"
          :class="{ error: $v.category.title.$error }"
          @blur="$v.category.title.$touch()"
      />
      <div v-if="$v.category.title.$error">
        <p class="error" v-if="!$v.category.title.required">Title is required!</p>
      </div>
    </div>
    <div>
      <label>Description:</label>
      <textarea placeholder="Add description" id="description" v-model="category.description"></textarea>
    </div>
    <button type="submit">Add Category</button>
    <p class="error" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
    <div class="reset">
      <input type="reset" />
    </div>
  </form>
</template>

<script>
import {required} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      category: {},
      submitStatus: null,
    };
  },
  validations: {
    category: {
      title: {
        required
      },
    },
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      // if (!this.$v.$invalid) {
      //   return false;
      // }
      if(this.$v.$error) {
        this.submitStatus = "ERROR";
        return false;
      }
      this.submitStatus = "null";
      console.log(this.category);

      this.$emit("add-category", this.category);
    }
  },
};
</script>