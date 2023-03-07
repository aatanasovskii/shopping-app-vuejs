<template>
  <div class="create-product">
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
      <button type="submit">Add Todo Item</button>
      <p class="error" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
      <div class="reset">
        <input type="reset" />
      </div>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      product: {},
      submitStatus: null,
    };
  },
  validations: {
    product: {
      title: { required },
      description: { required },
      price: { required },
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
      this.addProduct(this.product);
    },
    addProduct() {
      this.$store.commit("products/ADD_PRODUCT", this.product);
    },
  },
}
</script>

<style scoped>

</style>
