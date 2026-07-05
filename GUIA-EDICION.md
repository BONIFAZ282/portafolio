# Guía de edición de tu portafolio

Todo el contenido está separado del código para que lo edites fácil.

## 1. Tu información personal
- **Nombre, rol, tagline:** `public/i18n/es.json` y `public/i18n/en.json` → sección `hero`.
- **Sobre mí:** mismas archivos → sección `about` (`p1`, `p2`, ubicación, disponibilidad).
- **Habilidades:** `src/app/core/data/skills.data.ts`.

## 2. Proyectos
- Archivo: `src/app/core/data/projects.data.ts`.
- Cada proyecto tiene texto en `es` y `en`. El proyecto de la clínica ya está listo (ajusta detalles reales).
- Imágenes: ponlas en `public/img/projects/` y referencia como `img/projects/mi-imagen.png`.
- **`type`** (define en qué filtro aparece): `'client'` (Clientes), `'thesis'` (Tesis) o `'personal'` (Propios).
- **`status`** (opcional, muestra badge): `'live'` (En vivo), `'in-progress'` (En desarrollo) o `'private'` (Código privado).
- **`demoUrl`**: si lo llenas, aparece el botón "Ver demo" (útil para sitios web públicos, ej. la web de Fetal Prenatalia).
- Para agregar un proyecto nuevo, copia cualquier objeto del arreglo y cambia sus datos.

## 3. Testimonios
- Archivo: `src/app/core/data/testimonials.data.ts`.
- El testimonio de la doctora está enlazado al proyecto de la clínica (`projectSlug`).
- Cambia `[Nombre de la doctora]` por el nombre real.

## 4. Formulario de contacto (Web3Forms, sin servidor)
El formulario envía correos al hacer clic, **sin abrir tu app de correo** y **sin mostrar tu correo**
(así evitas spam). Para activarlo (2 minutos):
1. Entra a https://web3forms.com/
2. Escribe tu correo (`jorgebonifazcampos4848@gmail.com`) → te dan una **Access Key**.
3. Pega esa clave en `web3formsAccessKey` dentro de `src/environments/environment.ts`
   y `environment.prod.ts`.
> Mientras diga `YOUR_ACCESS_KEY`, al enviar aparece un aviso de "falta configurar".
> Los mensajes te llegarán directo a tu correo. Tu correo NO queda visible en la página.

## 4.1 Videos de los proyectos (opcional)
En `src/app/core/data/projects.data.ts`, cada proyecto tiene un campo `videoUrl`:
- **YouTube:** pega el link normal, ej. `'https://www.youtube.com/watch?v=ABC123'`
- **Vimeo:** ej. `'https://vimeo.com/123456789'`
- **Archivo propio:** sube el .mp4 a `public/video/` y pon `'video/demo.mp4'`
Si lo dejas vacío (`''`), simplemente no se muestra el video.

## 4.2 Cómo agregar MÁS capturas a un proyecto (paso a paso)
1. **Guarda la imagen** en `public/img/projects/` (o en una subcarpeta, ej.
   `public/img/projects/clinica/`). Formatos: `.png`, `.jpg` o `.svg`.
2. **Enlázala** en `src/app/core/data/projects.data.ts`, en el proyecto que corresponda:
   - Para la **portada** de la tarjeta: cambia `image: 'img/projects/....'`
   - Para la **galería** (dentro del caso de estudio): agrega la ruta al arreglo `gallery: [ ... ]`
     ```ts
     gallery: [
       'img/projects/clinica/clinica-agenda.png',
       'img/projects/clinica/clinica-caja.png',
       // agrega más aquí...
     ],
     ```
3. **IMPORTANTE**: si el servidor (`npm start`) está corriendo, **reinícialo**
   (Ctrl+C y `npm start`) porque Angular escanea la carpeta `public/` solo al arrancar.

> Ya están cargadas las capturas reales de la **clínica** (`public/img/projects/clinica/`),
> la **pollería** y **multiservicios** (`public/img/projects/gallery/`).

## 4.4 Iconos de tecnologías (tech chips)
Los `tags` de cada proyecto y las skills se muestran con iconos reales (DevIcon).
- Los SVG están en `public/img/tech/`.
- El mapa nombre→icono está en `src/app/shared/data/tech-icons.ts`.
- Para agregar una tecnología nueva: descarga su SVG de https://devicon.dev/
  en `public/img/tech/`, y añade una línea al mapa (ej: `react: { img: 'react.svg' }`).
- Si no existe SVG, usa un icono de Material como respaldo (ej: `{ icon: 'api' }`).

## 5. CV y foto
- **CV**: ya está tu CV en `public/cv.pdf` (el botón "Descargar CV" funciona). Reemplázalo cuando lo actualices.
- **Foto del hero**: guarda tu foto como **`public/img/profile.jpg`** y aparecerá sola
  en el círculo del inicio (con anillo de gradiente). Mientras no exista, se muestra un
  placeholder. Recomendado: foto cuadrada, mínimo 400x400 px.

## 6. Redes sociales
- `src/app/shared/components/footer/footer.component.ts` → array `social` (GitHub, LinkedIn, email).

## Comandos
- Desarrollo: `npm start` → http://localhost:4200
- Compilar para producción: `npm run build` (salida en `dist/portafolio`)

## Nota
Tu Node es v18.19.0 y Angular 19 recomienda 18.19.1+. Funciona, pero conviene
actualizar Node (por ejemplo a 20 LTS) para evitar warnings.
