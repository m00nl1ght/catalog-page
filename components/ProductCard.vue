<template>
  <div :class="[isGrid ? 'card_grid' : 'card_flex']">
    <img :src="product.image" alt="" />

    <p>{{ product.title }}</p>
    <p>Категория: {{ product.category }}</p>

    <NuxtLink class="link" :to="`/products/${product.id}`">
      <p class="btn">Детали</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { IProductType } from '~/types/productType'

defineProps<{
  product: IProductType
  isGrid: boolean
}>()
</script>

<style lang="scss"></style>
