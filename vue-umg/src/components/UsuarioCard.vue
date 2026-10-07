<script setup>
const props = defineProps({
  id: { type: Number, required: true },
  nombre: { type: String, required: true },
  rol: { type: String, default: 'Estudiante' }
})

const emit = defineEmits(['ver'])

function verUsuario() {
  emit('ver', props.id)
}
</script>

<template>
  <article class="card">
    <h3>{{ nombre }}</h3>
    <p class="rol">{{ rol }}</p>
    <button @click="verUsuario">Ver usuario</button>
  </article>
</template>

<style scoped>
.card {
  background: #fff;
  border: 1px solid #dde3ea;
  border-radius: 10px;
  padding: 18px;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
h3 { margin: 0 0 4px; color: #0b2545; font-size: 0.95rem; }
.rol { margin: 0 0 12px; color: #52606d; font-size: 0.9rem; }
.card button { margin-top: auto; }
</style>
