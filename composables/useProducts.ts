import type { IProductType } from '~/types/productType'

export const useProducts = () => {
  const API = 'https://fakestoreapi.com/products'
  const products = ref<IProductType[]>([])
  const errorMessage = ref<string | undefined>()

  const getProducts = async () => {
    try {
      errorMessage.value = undefined

      const { data }: { data: Ref<IProductType[]> } = await useFetch(API)

      if (data) products.value = data.value
    } catch (error) {
      errorMessage.value = String(error)
    }
  }
  return {
    products,
    errorMessage,
    getProducts
  }
}
