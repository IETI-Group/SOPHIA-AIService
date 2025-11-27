# SOPHIA - AI Paths Service

## Descripción del Proyecto

El **SOPHIA AI Paths Service** es un microservicio backend desarrollado como parte del sistema educativo SOPHIA. Este servicio está diseñado para gestionar las rutas de aprendizaje, proporcionando funcionalidades para crear, administrar y seguir el progreso de los estudiantes a través de diferentes trayectorias educativas personalizadas.

## Descripción del Microservicio

Este microservicio es responsable de:

- **Gestión de Rutas de Aprendizaje**: Creación, modificación y eliminación de rutas de aprendizaje personalizadas
- **Seguimiento del Progreso**: Monitoreo del avance de los estudiantes en sus rutas asignadas
- **Recomendaciones**: Generación de sugerencias de contenido basadas en el progreso y preferencias del estudiante
- **Integración con otros servicios**: Comunicación con otros microservicios del ecosistema SOPHIA para obtener datos de usuarios, contenidos y evaluaciones
- **APIs RESTful**: Exposición de endpoints para que otros servicios y el frontend puedan interactuar con las funcionalidades de rutas de aprendizaje

## Versión del Lenguaje

- **Node.js**: v22.13.0
- **TypeScript**: v5.9.2
- **Target ES**: ES2022

## Dependencias

### Dependencias de Producción
- **express**: ^5.1.0 - Framework web para Node.js
- **cors**: ^2.8.5 - Middleware para habilitar CORS
- **helmet**: ^8.1.0 - Middleware de seguridad
- **morgan**: ^1.10.1 - Logger de peticiones HTTP
- **winston**: ^3.17.0 - Librería de logging
- **dotenv**: 17.2.2 - Carga de variables de entorno

### Dependencias de Desarrollo
- **typescript**: 5.9.2 - Compilador de TypeScript
- **nodemon**: 3.1.10 - Recarga automática durante desarrollo
- **vitest**: ^3.2.4 - Framework de testing
- **@vitest/coverage-istanbul**: 3.2.4 - Cobertura de código
- **@biomejs/biome**: 2.2.2 - Linter y formateador de código
- **typedoc**: 0.28.12 - Generador de documentación
- **supertest**: ^7.1.4 - Testing de APIs HTTP
- **tsx**: 4.20.5 - Ejecutor de TypeScript

## Instrucciones de Instalación y Ejecución

### Prerrequisitos
- Node.js v22.13.0 o superior
- pnpm v10.15.1 

### Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/IETI-Group/SOPHIA-AIService.git
   cd SOPHIA-AIService
   ```

2. **Instalar dependencias**:
   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno**:
   ```bash
   cp .env.example .env
   # Editar el archivo .env con las configuraciones necesarias
   ```

### Scripts Disponibles

- **Desarrollo**:
  ```bash
  pnpm dev
  ```
  Inicia el servidor en modo desarrollo con recarga automática

- **Compilar**:
  ```bash
  pnpm build
  ```
  Compila el proyecto TypeScript a JavaScript

- **Producción**:
  ```bash
  pnpm start
  ```
  Ejecuta el servidor compilado en modo producción

- **Testing**:
  ```bash
  pnpm test          # Ejecutar tests
  pnpm coverage      # Ejecutar tests con cobertura
  ```

- **Calidad de Código**:
  ```bash
  pnpm lint          # Linting de código
  pnpm format        # Formateo de código
  pnpm check         # Verificación completa
  ```

- **Documentación**:
  ```bash
  pnpm doc           # Generar documentación
  ```

### Ejecución con Docker

#### Desarrollo:
```bash
docker-compose -f docker-compose.dev.yml up
```

#### Producción:
```bash
docker build -t sophia-AI-paths .
docker run -p 3000:3000 sophia-AI-paths
```

## Estructura del Proyecto

```
src/
├── app.ts                 # Configuración principal de la aplicación
├── server.ts             # Punto de entrada del servidor
├── controllers/          # Controladores de las rutas
├── middleware/           # Middleware personalizado
├── routes/              # Definición de rutas
└── utils/               # Utilidades y configuraciones

test/                    # Tests del proyecto
```

## Enlaces de Planeación

### Tablero de Trello
[**SOPHIA - Gestión de Proyecto**](https://trello.com/invite/b/68be127bf45c3eaecf8cc70d/ATTI6891bb77d37b8e0184327426470801ed6871D57B/sophia)

Este tablero contiene:
- **Backlog**: Lista de funcionalidades pendientes
- **Historias de Usuario**: Requerimientos desde la perspectiva del usuario
- **Sprint Planning**: Planificación de iteraciones
- **Tareas Asignadas**: Distribución de trabajo entre el equipo
- **Estado del Desarrollo**: Progreso actual del proyecto

