# Parcial — Desarrollo Web

API REST desarrollada con Node.js, Express, MongoDB, Mongoose y JWT para el manejo de usuarios y tareas.

Autor: CF Estrada — `cestradag11@miumg.edu.gt`

## Requisitos

- Node.js
- MongoDB en ejecución
- npm

## Instalación y ejecución

1. Instale las dependencias:

   ```bash
   npm install
   ```

2. Cree un archivo `.env` basado en `.env.example`:

   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/parcial_dw
   JWT_SECRET=defina_una_clave_segura
   ```

3. Inicie MongoDB. En un entorno sin servicio de MongoDB puede ejecutarlo manualmente:

   ```bash
   mkdir -p /tmp/parcial_dw_data
   mongod --dbpath /tmp/parcial_dw_data --bind_ip 127.0.0.1
   ```

4. En otra terminal, inicie la API:

   ```bash
   npm start
   ```

La API se ejecuta en `http://127.0.0.1:3000`.

## Endpoints

| Método | Ruta | Autenticación | Descripción |
| --- | --- | --- | --- |
| GET | `/api/status` | No | Estado de la API. |
| POST | `/api/auth/registro` | No | Registra un usuario. |
| POST | `/api/auth/login` | No | Inicia sesión y devuelve un JWT. |
| POST | `/api/tareas` | Sí | Crea una tarea. |
| GET | `/api/tareas` | No | Lista las tareas. |
| GET | `/api/tareas/:id` | No | Obtiene una tarea por ID. |
| PUT | `/api/tareas/:id` | Sí | Actualiza una tarea. |
| DELETE | `/api/tareas/:id` | Sí | Elimina una tarea. |

Las rutas protegidas requieren el encabezado:

```http
Authorization: Bearer TOKEN_JWT
```

## Ejemplos de uso

Registro (`POST /api/auth/registro`):

```json
{
  "nombre": "CF Estrada",
  "email": "cestradag11@miumg.edu.gt",
  "password": "defina_una_contrasena_segura"
}
```

Inicio de sesión (`POST /api/auth/login`):

```json
{
  "email": "cestradag11@miumg.edu.gt",
  "password": "defina_una_contrasena_segura"
}
```

Crear tarea (`POST /api/tareas`):

```json
{
  "titulo": "Terminar parcial",
  "descripcion": "Completar API REST de tareas",
  "estado": "PENDIENTE",
  "prioridad": "ALTA"
}
```

Valores permitidos:

- `estado`: `PENDIENTE`, `EN_PROCESO`, `COMPLETADA`.
- `prioridad`: `BAJA`, `MEDIA`, `ALTA`.

## Entrega

Incluya el código fuente, `package.json`, `package-lock.json` y `.env.example`.

No incluya `.env`, `node_modules` ni tokens, contraseñas o claves reales. El archivo `.gitignore` evita agregar los archivos locales más comunes.
