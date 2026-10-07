<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUsuariosStore } from '../stores/usuarios'

const route = useRoute()
const router = useRouter()
const store = useUsuariosStore()

// Si el usuario entra directo a /usuarios/:id, el store aún puede estar vacío
onMounted(() => {
  store.cargarUsuarios()
})

const usuario = computed(() => store.usuarioPorId(route.params.id))
</script>

<template>
  <main>
    <button @click="router.push('/usuarios')">← Volver</button>

    <p v-if="store.cargando">Cargando usuario...</p>
    <p v-else-if="store.error">{{ store.error }}</p>

    <section v-else-if="usuario" class="detalle">
      <div>
        <h1>{{ usuario.nombre }}</h1>
        <p><strong>Rol:</strong> {{ usuario.rol }}</p>
        <p><strong>Curso:</strong> {{ usuario.curso }}</p>
      </div>
    </section>

    <p v-else>No se encontró el usuario.</p>
  </main>
</template>

<style scoped>
.detalle {
  background: #fff;
  border: 1px solid #dde3ea;
  border-radius: 10px;
  padding: 24px;
  margin-top: 16px;
}
h1 { margin-top: 0; }
</style>
