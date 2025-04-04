<template>
  <div class="header">
    <header>
      <nav class="nav">
        <ul class="nav">
          <li><NuxtLink class="link" to="/">Главная</NuxtLink></li>
          <li><NuxtLink class="link" to="/products">Продукты</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>

  <div class="container">
    <slot />
  </div>
</template>

<script setup></script>
