<template>
  <div>
    <div class="fl">
      <div class="fl">
        <label class="filter">Фильтр</label>
        <input v-model="filter" class="filter_input" type="text" placeholder="Введите текст.." />
      </div>

      <div>
        <button class="btn_switch" @click="switchListGrid">Изменить вид: список или сетка</button>
      </div>
    </div>

    <div :class="[isGrid ? 'container_grid' : 'container_flex']">
      <div v-for="product in paginatedProducts" :key="product.id">
        <ProductCard :product="product" :isGrid="isGrid" />
      </div>
    </div>

    <PaginationBlock v-model="currentPage" :totalPages="pages" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProducts } from '#imports'

const filter = ref('')
const isGrid = ref(true)

const { products, getProducts } = useProducts()
// const productStore = useProductStore()
// const { products } = storeToRefs(productStore)

const switchListGrid = () => {
  isGrid.value = !isGrid.value
}

const filtredProducts = computed(() => {
  const filterValue = filter.value.toLowerCase()

  if (filterValue === '') return products.value

  return products.value.filter((product) => {
    return (
      product.title.toLowerCase().indexOf(filterValue) !== -1 ||
      product.category.toLowerCase().indexOf(filterValue) !== -1
    )
  })
})

const paginatedProducts = computed(() =>
  filtredProducts.value.slice(
    (currentPage.value - 1) * itemsPerPage.value,
    currentPage.value * itemsPerPage.value
  )
)

const totalItems = computed(() => (filtredProducts.value ? filtredProducts.value.length : 0))
const itemsPerPage = ref(5)
const pages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value))

const currentPage = ref<number>(1)

// await productStore.getProducts()
await getProducts()
</script>

<style lang="scss" scoped></style>
