import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateCategory from '../views/CreateCategory.vue'
import ListCategories from '../views/ListCategories.vue'
import AdminView from "@/views/AdminView.vue";
import ProductsPage from "@/views/public/ProductsPage.vue";
import CreateProduct from '../views/CreateProduct.vue'
import ListProducts from '../views/ListProducts.vue'
import ProductDetailsPage from "@/views/public/ProductDetailsPage.vue";
import CategoryProductsPage from "@/views/public/CategoryProductsPage.vue";
import ShoppingCart from "@/views/public/ShoppingCart.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'admin-view',
    component: AdminView,
  },
  {
    path: '/publish',
    name: 'publish-view',
    component: ProductsPage,
  },
  {
    path: '/admin/category-create',
    name: 'category-create',
    component: CreateCategory
  },
  {
    path: '/admin/categories',
    name: 'categories',
    component: ListCategories
  },
  {
    path: '/admin/product-create',
    name: 'product-create',
    component: CreateProduct
  },
  {
    path: '/admin/products',
    name: 'products',
    component: ListProducts
  },
  {
    path: '/product-details/:product',
    name: 'product-details',
    component: ProductDetailsPage,
    props: true
  },
  {
    path: '/category-products/:category',
    name: 'category-products',
    component: CategoryProductsPage,
    props: true
  },
  {
    path: '/shopping-cart',
    name: 'shopping-cart',
    component: ShoppingCart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
