<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUsuariosStore } from '../stores/usuarios'
import UsuarioCard from '../components/UsuarioCard.vue'

const store = useUsuariosStore()
const router = useRouter()

onMounted(() => {
  store.cargarUsuarios()
})

function verUsuario(id) {
  router.push({ name: 'usuario-detalle', params: { id } })
}
</script>

<template>
  <main>
    <h1>Usuarios</h1>
    <p class="curso">DESARROLLO WEB - 22026-4590-036-7</p>
    <p v-if="!store.cargando && !store.error">
      Total de usuarios: <strong>{{ store.totalUsuarios }}</strong>
    </p>

    <p v-if="store.cargando">Cargando usuarios...</p>

    <div v-else-if="store.error" class="error">
      <p>{{ store.error }}</p>
      <button @click="store.cargarUsuarios()">Reintentar</button>
    </div>

    <section v-else class="lista">
      <UsuarioCard
        v-for="usuario in store.usuarios"
        :key="usuario.id"
        :id="usuario.id"
        :nombre="usuario.nombre"
        :rol="usuario.rol"
        @ver="verUsuario"
      />
    </section>
  </main>
</template>

<style scoped>
.curso { color: #1d4e89; font-weight: bold; margin-top: 0; }
.lista {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.error {
  background: #fdecea;
  border: 1px solid #f5c2be;
  color: #8a1c14;
  padding: 12px 16px;
  border-radius: 8px;
}
</style>
