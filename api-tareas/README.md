# UNIVERSIDAD MARIANO GÁLVEZ DE GUATEMALA

## FACULTAD DE INGENIERÍA EN SISTEMAS DE INFORMACIÓN Y CIENCIAS DE LA COMPUTACIÓN

**Curso:** Desarrollo Web - 22026-4590-036-7  
**Catedrático:** Ing. Elder Amílcar Herrera Cifuentes

---

# API de tareas académicas

API REST creada con Node.js, Express y MongoDB mediante Mongoose para registrar y administrar tareas académicas.

## Requisitos

- Node.js y npm.
- MongoDB local o una base de datos en MongoDB Atlas.

## Instalación y configuración

Desde la carpeta `api-tareas`, instala las dependencias:

```bash
npm install
```

Crea un archivo `.env` en esta carpeta con los datos de conexión:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/api-tareas
```

Para MongoDB Atlas, reemplaza el valor de `MONGODB_URI` con tu cadena de conexión. No compartas ni subas el archivo `.env` con credenciales.

## Iniciar el servidor

Modo normal:

```bash
npm start
```

Modo desarrollo con recarga automática:

```bash
npm run dev
```

El proyecto usa **nodemon** (dependencia de desarrollo) para reiniciar el servidor cuando detecta cambios en archivos `.js`. La API inicia después de conectarse correctamente a MongoDB.

## URL base

Con la configuración predeterminada, la URL base es:

```text
http://localhost:3000
```

La ruta raíz `GET http://localhost:3000/` devuelve un mensaje para confirmar que la API está activa.

## Endpoints

Todas las rutas de tareas empiezan con `http://localhost:3000/api/tareas`.

| Método | URL | Descripción |
|---|---|---|
| GET | `/api/tareas` | Obtener todas las tareas. |
| GET | `/api/tareas/:id` | Obtener una tarea por su ID de MongoDB. |
| POST | `/api/tareas` | Crear una tarea. |
| PUT | `/api/tareas/:id` | Actualizar una tarea existente. |
| DELETE | `/api/tareas/:id` | Eliminar una tarea. |

Para POST y PUT, selecciona `Body` → `raw` → `JSON` en Postman. Ejemplo:

```json
{
  "titulo": "Proyecto Node.js",
  "curso": "Desarrollo Web",
  "descripcion": "Crear una API REST utilizando Express",
  "fechaEntrega": "2026-09-25",
  "prioridad": "ALTA",
  "estado": "PENDIENTE"
}
```

Valores permitidos para `prioridad`: `BAJA`, `MEDIA`, `ALTA`. Valores permitidos para `estado`: `PENDIENTE`, `EN_PROCESO`, `COMPLETADA`.

## Formato de respuestas

Las respuestas son JSON. Ejemplo al crear una tarea (HTTP 201):

```json
{
  "mensaje": "Tarea creada correctamente",
  "tarea": {
    "_id": "ID_GENERADO_POR_MONGODB",
    "titulo": "Proyecto Node.js",
    "curso": "Desarrollo Web",
    "descripcion": "Crear una API REST utilizando Express",
    "fechaEntrega": "2026-09-25T00:00:00.000Z",
    "prioridad": "ALTA",
    "estado": "PENDIENTE"
  }
}
```

Ejemplos de error:

```json
{ "mensaje": "Tarea no encontrada" }
```

```json
{
  "mensaje": "El cuerpo de la solicitud no contiene JSON válido"
}
```

La API usa `200` para operaciones exitosas, `201` para crear, `400` para solicitudes o datos inválidos, `404` para recursos o rutas inexistentes y `500` para errores internos.

## Probar con Postman

Importa `postman/API-Tareas.postman_collection.json` en Postman y ejecuta las solicitudes desde la colección importada. Envía primero **Crear tarea**: su script guarda automáticamente el `_id` de la respuesta en la variable de colección `tareaId`. Después ejecuta **Obtener tarea por ID**, **Actualizar tarea** o **Eliminar tarea**. Si escribes esas URLs en solicitudes nuevas fuera de la colección, Postman no tendrá acceso a `{{tareaId}}`; en ese caso, copia el `_id` manualmente o define una variable en el entorno activo.
