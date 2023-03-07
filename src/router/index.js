import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateCategory from '../views/CreateCategory.vue'
import ListCategories from '../views/ListCategories.vue'
import AdminView from "@/views/AdminView.vue";
import CreateProduct from '../views/CreateProduct.vue'
import ListProducts from '../views/ListProducts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'admin',
    component: AdminView,
  },
  {
    path: '/admin/category-create',
    name: 'admin',
    component: CreateCategory
  },
  {
    path: '/admin/categories',
    name: '',
    component: ListCategories
  },
  {
    path: '/admin/product-create',
    name: '',
    component: CreateProduct
  },
  {
    path: '/admin/products',
    name: '',
    component: ListProducts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
