<template>
  <div class="card_detail">
    <div class="fl">
      <div>
        <img :src="product.image" alt="Картинка товара" />
      </div>

      <div class="card_detail_text">
        <h2>{{ product.title }}</h2>
        <p>Цена - ${{ product.price }}</p>

        <h3>Описание продукта:</h3>
        <p>{{ product.description }}</p>

        <NuxtLink to="/products">Назад</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProductType } from '~/types/productType'

defineProps<{
  product: IProductType
}>()
</script>

<style lang="scss"></style>
