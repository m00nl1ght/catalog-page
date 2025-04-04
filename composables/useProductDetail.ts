import type { IProductType } from '~/types/productType'

export const useProductDetail = () => {
  const API_BASE = 'https://fakestoreapi.com/products/'
  const product = ref<IProductType | null>(null)
  const errorMessage = ref<string | undefined>()

  const getProduct = async (id: number | string) => {
    try {
      errorMessage.value = undefined

      const { data }: { data: Ref<IProductType> } = await useFetch(`${API_BASE}${id}`)
      if (data) product.value = data.value
    } catch (error) {
      errorMessage.value = String(error)
    }
  }
  return {
    product,
    errorMessage,
    getProduct
  }
}
