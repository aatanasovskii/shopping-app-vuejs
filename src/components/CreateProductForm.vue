<template>
  <div>
    <form @submit.prevent="submitForm" novalidate>
      <div>
        <label>Title: </label>
        <input
            placeholder="Add title"
            type="text"
            id="title"
            v-model="product.title"
            :class="{ error: $v.product.title.$error }"
            @blur="$v.product.title.$touch()"
        />
        <div v-if="$v.product.title.$error">
          <p class="error" v-if="!$v.product.title.required">Title is required!</p>
        </div>
      </div>
      <div>
        <label>Description:</label>
        <textarea
            placeholder="Add description"
            id="description"
            v-model="product.description"
            :class="{ error: $v.product.description.$error }"
            @blur="$v.product.description.$touch()"
        ></textarea>
        <div v-if="$v.product.description.$error">
          <p class="error" v-if="!$v.product.description.required">Description is required!</p>
        </div>
      </div>
      <div>
        <label>Price:</label>
        <input
            placeholder="Add price"
            id="price"
            v-model="product.price"
            :class="{ error: $v.product.price.$error }"
            @blur="$v.product.price.$touch()"
        />
        <div v-if="$v.product.price.$error">
          <p class="error" v-if="!$v.product.price.required">Price is required!</p>
        </div>
      </div>
      <div>
        <label>Category:</label>
        <multiselect
            v-model="product.category"
            :options="categories"
            track-by="title"
            :multiple="true"
            :close-on-select="false"
            :hide-selected="true"
            :custom-label="searchCategoryTitle"
            placeholder="Search Category"
            :class="{ error: $v.product.category.$error }"
            @blur="$v.product.category.$touch()"
        ></multiselect>
        <div v-if="$v.product.category.$error">
          <p class="error" v-if="!$v.product.category.required">Category is required!</p>
        </div>
      </div>
      <button type="submit">Add Product</button>
      <p class="error" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
      <div class="reset">
        <input type="reset" />
      </div>
    </form>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import { required } from 'vuelidate/lib/validators';
import {mapState} from "vuex";
export default {
  components: { Multiselect },
  data() {
    return {
      product: {
        published: false,
      },
      submitStatus: null,
    };
  },
  props: {
    categories: Array,
  },
  validations: {
    product: {
      title: { required },
      description: { required },
      price: { required },
      category: { required },
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
      console.log(this.product);

      this.$emit("add-product", this.product);
    },
    searchCategoryTitle ({ title, description }) {
      return `${title} — ${description}`
    },
  },
}
</script>

<style scoped>

</style>