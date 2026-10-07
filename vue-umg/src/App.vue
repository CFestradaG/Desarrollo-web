<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <strong class="marca">Gestor de Usuarios UMG</strong>
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/usuarios">Usuarios</RouterLink>
      <RouterLink to="/about">Acerca</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  background: #0b2545;
  color: #fff;
}
nav { display: flex; gap: 18px; }
nav a {
  color: #cfe1f5;
  text-decoration: none;
}
nav a.router-link-exact-active,
nav a.router-link-active {
  color: #fff;
  font-weight: bold;
  border-bottom: 2px solid #5fa8d3;
}
</style>
