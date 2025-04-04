import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import type { IProductType } from '~/types/productType'

const API = 'https://fakestoreapi.com/products'

interface State {
  products: IProductType[]
  product: IProductType | undefined
}

export const useProductStore = defineStore('product-store', {
  state: (): State => {
    return {
      products: [],
      product: undefined
    }
  },

  actions: {
    async getProducts() {
      const { data }: { data: Ref<IProductType[]> } = await useFetch(API)
      this.products = data.value
    }
  }
})
