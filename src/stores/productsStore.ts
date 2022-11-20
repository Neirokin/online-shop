import { defineStore } from 'pinia'
import type { IProduct } from '@/@types/interfaces'
import { ProductsAPI } from '@/api/ProductsAPI'

interface ProductsStoreState {
  products: IProduct[]
}

export const useProductsStore = defineStore('productsStore', {
  state: (): ProductsStoreState => {
    return {
      products: [],
    }
  },

  actions: {
    getProducts() {
      return ProductsAPI.getProducts().then((products) => {
        this.products = products
      })
    },
  },
})
