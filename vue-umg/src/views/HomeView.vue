<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function irAUsuarios() {
  router.push('/usuarios')
}
</script>

<template>
  <main>
    <h1>Bienvenido al Gestor de Usuarios UMG</h1>
    <p><strong>DESARROLLO WEB - 22026-4590-036-7</strong></p>
    <p>
      Aplicación de práctica integradora del curso Desarrollo Web: componentes,
      props, eventos, Vue Router, Pinia y consumo de una REST API con JSON.
    </p>
    <button @click="irAUsuarios">Ver usuarios</button>
  </main>
</template>
