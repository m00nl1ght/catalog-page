<template>
  <div>
    <ProductDetail v-if="product" :product="product" />
    <span v-else>{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const { id } = useRoute().params
const { product, getProduct, errorMessage } = useProductDetail()

if (id && typeof id === 'string') {
  await getProduct(id)
}
</script>

<style lang="scss" scoped></style>
