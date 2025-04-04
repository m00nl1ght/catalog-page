<template>
  <ul class="pagination">
    <li class="pointed" @click="onPrev">Предыдущая</li>

    <li
      v-for="page in totalPages"
      class="pagination__item pointed"
      :class="{ pagination__item_active: page === currentPage }"
      @click="currentPage = page"
    >
      {{ page }}
    </li>

    <li class="pointed" @click="onNext">Следующая</li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  totalPages: number
}>()

const currentPage = defineModel<number>({ required: true })

const onNext = () => {
  if (currentPage.value < props.totalPages) currentPage.value += 1
}
const onPrev = () => {
  if (currentPage.value !== 1) currentPage.value -= 1
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;
}

.pagination__item {
  padding: 4px;
  margin-right: 2px;

  border: 1px solid black;
  border-radius: 4px;

  &:hover {
    background-color: grey;
  }
}

.pointed {
  cursor: pointer;
}

.pagination__item_active {
  border: 2px solid black;
  // background-color: grey;
}
</style>
