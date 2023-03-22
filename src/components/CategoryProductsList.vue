<template>
  <div>
    <ol v-for="cat in categoryProducts">
      <li>{{ cat.title }} - {{ cat.price }}</li>
    </ol>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(['products']),
    categoryProducts() {
      // console.log(this.category.title);
      //
      // let temp = [];
      // for(let i = 0; i < this.products.products.length; i++) {
      //   for(let j = 0; j < this.products.products[i].category.length; j++) {
      //     if (this.products.products[i].category[j].title === this.category.title) {
      //       temp.push(this.products.products[i]);
      //     };
      //   };
      // };
      // console.log(temp);

      return (this.products.products.filter(
          (product) => product.category.map(cat => cat.title)
              .includes(this.category.title)
      ));
    },
  },
}
</script>

<style scoped></style>
