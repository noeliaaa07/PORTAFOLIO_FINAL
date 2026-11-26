# Noelia Landaburu — Portafolio

Portafolio editorial de Noelia Landaburu, estudiante de cuarto año de Diseño de Moda en la Universidad Diego Portales, Santiago de Chile. Reúne proyectos de moda, styling, dirección de arte y experimentación visual en un sitio de estética inspirada en revistas, zines y cultura visual Y2K.

**Demo:** pendiente de publicar en GitHub Pages. La URL aparecerá en el resultado del despliegue.

## El sitio

La portada presenta una selección de once proyectos, con una ficha individual para cada uno, además de las secciones «Sobre mí» y «Contacto». El lenguaje visual combina tipografía de gran formato, composición editorial, fotografía, rosa neón y verde ácido. El diseño se adapta a pantallas pequeñas e incluye navegación móvil y galerías.

## Tecnologías

- **HTML** para la estructura de la portada y las fichas de proyectos.
- **CSS** para la identidad visual y la adaptación a distintos tamaños de pantalla.
- **JavaScript** para la navegación móvil, las galerías y las interacciones del sitio.
- **GitHub Pages y GitHub Actions** para publicar el sitio estático.

No se necesita framework, proceso de compilación ni instalación de dependencias.

## Probar localmente

1. Descarga o clona el repositorio.
2. Abre `docs/index.html` en un navegador.
3. Entra a las tarjetas de proyectos y prueba la navegación y las galerías, también en una ventana estrecha.

## Publicar en GitHub Pages

El workflow de [`.github/workflows/pages.yml`](.github/workflows/pages.yml) publica el contenido de `docs/` cuando hay cambios en esa carpeta o en el propio workflow sobre la rama `main`. También se puede iniciar manualmente desde GitHub Actions.

1. Sube el proyecto a un repositorio de GitHub y confirma que la rama principal se llame `main`.
2. En el repositorio, abre **Settings → Pages** y selecciona **GitHub Actions** como origen de publicación.
3. Sube los cambios de `docs/` a `main`, o ejecuta manualmente **Publish portfolio to GitHub Pages** en la pestaña **Actions**.
4. Espera a que el workflow termine correctamente. Abre el despliegue de Pages para obtener la URL pública y reemplazar el estado de «Demo» al inicio de este README.

## Estructura

```text
docs/
├── index.html
├── styles.css
├── script.js
├── assets/
└── proyectos/
.github/
└── workflows/
    └── pages.yml
```

## Créditos

- **Botón:** adaptación HTML/CSS del componente Button de Wensity Labs, publicado en [21st.dev](https://21st.dev/@wensity/components/button) bajo licencia MIT. La adaptación y atribución también se incluyen en el footer del sitio.
- **Tipografías:** [Anton](https://fonts.google.com/specimen/Anton), [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) y [Space Mono](https://fonts.google.com/specimen/Space+Mono), servidas por Google Fonts.
- **Imágenes y colaboraciones:** las fotografías y láminas se encuentran en `docs/assets/`. Los permisos de publicación de las fotografías están confirmados; añade los créditos de autoría y colaboración que correspondan.
- **Audio y video:** no se han incorporado archivos audiovisuales propios al sitio. Acreditar autoría, fuente y licencia si se agregan.

## Reflexión personal

CREA UNA REFLEXION INSPIRADA EN LO QUE DIRIA NOELIA

## Revisión antes de publicar


- Añadir la URL pública de GitHub Pages después del primer despliegue.

