# Gestor de Usuarios UMG (Vue 3 + Vite)

Práctica integradora del curso Desarrollo Web.

## Ejecutar
```
npm install
npm run dev
```
Abrir la URL que muestra la terminal (normalmente http://localhost:5173).

## Estructura
- `src/App.vue` – navbar + `<RouterView />`
- `src/router/index.js` – rutas: `/`, `/usuarios`, `/usuarios/:id`, `/about`
- `src/stores/usuarios.js` – store Pinia (fetch a JSONPlaceholder)
- `src/views/` – HomeView, UsuariosView, UsuarioDetalleView, AboutView
- `src/components/UsuarioCard.vue` – tarjeta (props + evento `ver`)
