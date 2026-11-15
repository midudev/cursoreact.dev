<div align="center">

<img alt="Curso de React js desde cero y con proyectos" src="https://user-images.githubusercontent.com/1561955/212888793-fd719e58-b0c2-4d03-9c55-38e3e79ebc17.png" width="500" />

# Aprendiendo React ⚛️

Curso para aprender **React** basado en proyectos.
**[Todos los miércoles a las 18PM 🇪🇸 en Twitch](https://twitch.tv/midudev)**
</div>

## 📹 Videos con las clases

**Por favor, no me escribas preguntando cuándo subiré los vídeos. Todos los días estoy creando contenido gratis. Me encantaría tener más tiempo para hacer más cosas, pero no doy para más. Lo subiré cuando pueda. Si quieres ayudarme, puedes suscribirte a mi canal de [Twitch](https://twitch.tv/midudev) o ser [mecenas de Patreon](https://patreon.com/midudev) para que pueda contratar editores que me ayuden con esto.**

- 01: [Introducción a React](https://www.youtube.com/watch?v=7iobxzd_2wY)
- 02: [React Hooks: useState y useEffect](https://www.youtube.com/watch?v=qkzcjwnueLA&feature=youtu.be)
- 03: [Prueba técnica con lo aprendido](https://www.youtube.com/watch?v=XYpadB4VadY&feature=youtu.be)
- 04: [Fetching de datos y Custom Hooks](https://youtu.be/x-LcbVw99o8)
- 05: [React Hooks: useRef, useMemo, useCallback](https://youtu.be/GOEiMwDJ3lc)
- 06: [React Hooks: useContext, useReducer, useId](https://www.youtube.com/watch?v=B9tDYAZZxcE)
- 07: [React Router + Lazy Loading](https://www.youtube.com/watch?v=K2NcGYajvY4)
- 08: [React + TypeScript (Día 01): props y state](https://www.youtube.com/watch?v=4lAYfsq-2TE)
- 09: [React + TypeScript + ChatGPT - Clon de Google Translate](https://www.youtube.com/watch?v=kZhabulNCUc)
- 10: [React Redux Toolkit + Rome Tools](https://www.youtube.com/watch?v=bEEjuwujbbU)
- 11: [Prueba técnica de React con TypeScript](https://www.youtube.com/watch?v=mNJOWXc83Y4)
- 12: [React Query + Paginación + Infinite Scroll](https://www.youtube.com/watch?v=WKfVjQUa6nE)
- 13: [JavaScript Quiz con Zustand + TypeScript desde cero](https://www.youtube.com/watch?v=p2wF2wRjcN0)
- 14: [Novedades de React 19: Actions, hooks y API use](https://www.youtube.com/watch?v=OG6YGMF0UPM)

## ⌨️ Proyectos de React con código

| Número | Proyecto | Código | Web |
| --- | --- | --- | --- |
| `01` | Twitter Follow Card | [Ver](demos/01-twitter-follow-card/) | [Visitar](https://cursoreact.dev/demos/01-twitter-follow-card/) |
| `02` | Tic Tac Toe | [Ver](demos/02-tic-tac-toe/) | [Visitar](https://cursoreact.dev/demos/02-tic-tac-toe/) |
| `03` | Mouse Follower | [Ver](demos/03-mouse-follower) | [Visitar](https://cursoreact.dev/demos/03-mouse-follower/) |
| `04` | Prueba técnica con Promesas, fetching y testing E2E | [Ver](demos/04-react-prueba-tecnica) | [Visitar](https://cursoreact.dev/demos/04-react-prueba-tecnica/) |
| `05` | Prueba técnica con formularios, buscador utilizando una API | [Ver](demos/05-react-buscador-peliculas) | [Visitar](https://cursoreact.dev/demos/05-react-buscador-peliculas/) |
| `06` | Creación de un ecommerce con carrito de compras | [Ver](demos/06-shopping-cart) | [Visitar](https://cursoreact.dev/demos/06-shopping-cart/) |
| `07` | Creación de un React Router desde cero | [Ver](demos/07-midu-router) | [Visitar](https://cursoreact.dev/demos/07-midu-router/) |
| `08` | Todo App con TypeScript y animaciones | [Ver](demos/08-todo-app-typescript) | [Visitar](https://cursoreact.dev/demos/08-todo-app-typescript/) |
| `09` | Crear un Google Translate con ChatGPT y TypeScript | [Ver](demos/09-google-translate-clone/) | [Visitar](https://cursoreact.dev/demos/09-google-translate-clone/) |
| `10` | Crear un CRUD con Redux Toolkit y TypeScript | [Ver](demos/10-crud-redux/) | [Visitar](https://cursoreact.dev/demos/10-crud-redux/) |
| `11` | Prueba Técnica con TypeScript y React | [Ver](demos/11-typescript-prueba-tecnica/) | [Visitar](https://cursoreact.dev/demos/11-typescript-prueba-tecnica/) |
| `11b` | Prueba Técnica con TypeScript y React con React Query | [Ver](demos/11b-typescript-prueba-tecnica-with-react-query/) | [Visitar](https://cursoreact.dev/demos/11b-typescript-prueba-tecnica-with-react-query/) |
| `12` | Sistema de comentarios con React Query | [Ver](demos/12-comments-react-query) | [Visitar](https://cursoreact.dev/demos/12-comments-react-query/) |
| `13` | JavaScript Quiz con Zustand y TypeScript | [Ver](demos/13-javascript-quiz-con-zustand/) | [Visitar](https://cursoreact.dev/demos/13-javascript-quiz-con-zustand/) |
| `14` | Hacker News con TypeScript y SWR | [Ver](demos/14-hacker-news-prueba-tecnica) | [Visitar](https://cursoreact.dev/demos/14-hacker-news-prueba-tecnica/) |
| `15` | React 19: Actions y actualizaciones optimistas | [Ver](demos/15-react-19/) | [Visitar](https://cursoreact.dev/demos/15-react-19/) |

## Desarrollo de la web

Requiere Node.js >=22.23.4 y pnpm 12.16.1. Instala con `pnpm install --frozen-lockfile`, ejecuta `pnpm dev` y valida con `pnpm build` (tipos y generación estática).

Las dependencias se actualizan con pnpm y `pnpm-lock.yaml`. TypeScript permanece en 6.0.3: `astro check` todavía no admite TypeScript 7.0.

Las demos se compilan desde `demos/` junto con la web, bajo `/demos/<proyecto>/`. `pnpm build:demos` regenera sus archivos estáticos. En desarrollo, vuelve a ejecutarlo si editas una demo. Cada ejemplo conserva sus versiones de React y bibliotecas para mantener el código de la clase.

La demo del traductor usa MyMemory sin clave privada (límite de 500 bytes por consulta). Las demos de tareas y comentarios persisten los datos en el navegador y la de comentarios simula la latencia para practicar React Query. Los ejemplos de router usan rutas hash para funcionar dentro de su subdirectorio en cualquier alojamiento estático.

## Contenido y transcripciones

Las 14 clases tienen apuntes en `src/clases/`, apoyados en los vídeos del curso. Cada clase permite consultar los capítulos del vídeo y abrir o descargar su transcripción automática completa. Los subtítulos pueden contener errores de reconocimiento: los ejemplos y explicaciones editoriales se presentan por separado.

Las fuentes normalizadas viven en `src/data/transcripts/`. Para actualizarlas, descarga los subtítulos españoles en JSON3 y los metadatos con yt-dlp y ejecuta `python3 scripts/import-transcripts.py <directorio>`. No se necesita descargar el vídeo. `node scripts/verify-site.mjs` comprueba el build, las demos, los enlaces locales, las transcripciones y los botones de copia.
