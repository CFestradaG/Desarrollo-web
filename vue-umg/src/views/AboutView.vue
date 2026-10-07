<template>
  <main>
    <header class="portada">
      <p>UNIVERSIDAD MARIANO GÁLVEZ DE GUATEMALA</p>
      <p>FACULTAD DE INGENIERÍA EN SISTEMAS DE INFORMACIÓN Y CIENCIAS DE LA COMPUTACIÓN</p>
      <p>CURSO: DESARROLLO WEB - 22026-4590-036-7</p>
      <p>ING. ELDER AMILCAR HERRERA CIFUENTES</p>
    </header>

    <h1>Acerca de la aplicación</h1>
    <p>Práctica integradora: Gestor de Usuarios UMG.</p>
    <ul>
      <li><strong>Componentes:</strong> construcción modular de la interfaz.</li>
      <li><strong>Props:</strong> datos de padre a hijo (UsuariosView → UsuarioCard).</li>
      <li><strong>Eventos:</strong> comunicación de hijo a padre (emit).</li>
      <li><strong>Vue Router:</strong> navegación entre vistas sin recargar.</li>
      <li><strong>Pinia:</strong> estado global de usuarios.</li>
      <li><strong>fetch + REST API + JSON:</strong> listado de estudiantes del curso en formato JSON.</li>
    </ul>
    <p>Tecnologías: Vue 3 + Vite.</p>
  </main>
</template>

<style scoped>
.portada {
  background: #0b2545;
  color: #fff;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 24px;
}
.portada p { margin: 6px 0; font-weight: bold; letter-spacing: 0.5px; }
.portada p:first-child { font-size: 1.15rem; }
</style>
