import { defineStore } from 'pinia'

// "REST API" local: archivo JSON servido por Vite desde /public/api
const API_URL = `${import.meta.env.BASE_URL}api/estudiantes.json`

export const useUsuariosStore = defineStore('usuarios', {
  state: () => ({
    usuarios: [],
    cargando: false,
    error: null
  }),

  getters: {
    totalUsuarios: (state) => state.usuarios.length,
    usuarioPorId: (state) => (id) =>
      state.usuarios.find((u) => u.id === Number(id))
  },

  actions: {
    async cargarUsuarios() {
      // Evita volver a pedir los datos si ya están en el store
      if (this.usuarios.length > 0) return

      this.cargando = true
      this.error = null

      try {
        const respuesta = await fetch(API_URL)

        if (!respuesta.ok) {
          throw new Error('No se pudieron obtener los usuarios')
        }

        this.usuarios = await respuesta.json()
      } catch (error) {
        this.error = error.message
      } finally {
        this.cargando = false
      }
    }
  }
})
