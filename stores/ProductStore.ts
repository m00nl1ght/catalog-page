import { defineStore } from 'pinia'
import type { Ref } from 'vue'

type products = {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: Object
  title: string
}

type state = {
  products: products[]
}

export const useProductStore = defineStore('product-store', {
  state: () => {
    return {
      products: []
    }
  },
  actions: {
    async fetch() {
      const promise = await useFetch("https://fakestoreapi.com/products")
      
  }
    
  }
})
