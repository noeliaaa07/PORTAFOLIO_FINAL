const projects = {
  "dos-realidades-e02": {
    name: "Dos realidades",
    course: "E02 · CURSO · DPPI 2026",
    description: "Una misma cámara genera dos lecturas de una escena: el sistema A reconoce y grafica los gestos de las manos, mientras el sistema B detecta cambios de movimiento entre cuadros. El proyecto explora cómo dos sistemas pueden representar de forma distinta aquello que observan."
  },
  "escuchar-la-imagen": {
    name: "Escuchar la imagen",
    course: "E03 + T06 · CURSO",
    description: "Experimento audiovisual interactivo que transforma la luz y los cambios de una imagen en zonas, notas y sonido. Permite explorar la experiencia desde una cámara, un video o una fotografía, ajustando sus capas y parámetros."
  },
  "darwinii": {
    name: "Darwinii",
    course: "PROYECTO EXTERNO · MODA",
    description: "Chaqueta confeccionada con paños de lana reciclados en tonos verdes y cafés. Presenta intervenciones textiles con frunces y relieves en mangas y espalda, inspiradas en las texturas orgánicas de la Rana de Darwin."
  },
  "friccion": {
    name: "Fricción",
    course: "PROYECTO EXTERNO · MODA",
    description: "Conjunto inspirado en el cruce entre la estética andina y la cultura urbana, explorando contrastes de materiales, pliegues y volúmenes mediante denim índigo y gabardina negra."
  },
  "gold-saturacion": {
    name: "Gold Saturción",
    course: "PROYECTO EXTERNO · MODA",
    description: "Proyecto de moda documentado con un panel de colección y una captura de su presentación digital."
  },
  "iraca": {
    name: "Iraca",
    course: "PROYECTO EXTERNO · MODA",
    description: "Conjunto de tres piezas que combina una estética streetwear contemporánea con formas orgánicas inspiradas en la palma de iraca. La propuesta explora el contraste entre franela negra y gabardina verde oliva, incorporando pliegues y estampados de creación propia que aportan textura, movimiento y continuidad visual. El diseño integra siluetas amplias y elementos funcionales desde una mirada experimental."
  },
  "p-v9": {
    name: "P-V9",
    course: "PROYECTO EXTERNO · MODA",
    description: "Proyecto de moda presentado mediante fotografías y una secuencia de láminas del proyecto."
  },
  "styling-direccion-arte": {
    name: "Styling / dirección de arte / makeup",
    course: "SELECCIÓN DE TRABAJOS · MODA",
    description: "Selección de imágenes de trabajos vinculados a styling, dirección de arte y makeup."
  },
  "starstruck": {
    name: "Starstruck",
    course: "PROYECTO EXTERNO · MODA",
    description: "Proyecto de moda acompañado por imágenes de su lookbook."
  }
};

document.querySelectorAll("[data-project]").forEach((page) => {
  const project = projects[page.dataset.project];
  if (!project) return;

  document.title = `${project.name} — Noelia Landaburu`;
  page.querySelector("[data-project-title]").textContent = project.name;
  page.querySelector("[data-project-course]").textContent = project.course;
  page.querySelector("[data-project-description]").textContent = project.description;

  const imagePath = page.dataset.projectImage;
  const visual = page.querySelector("[data-project-visual]");
  if (imagePath && visual) {
    const figure = document.createElement("figure");
    figure.className = "project-visual";
    const image = document.createElement("img");
    image.src = imagePath;
    image.alt = `Imagen de referencia del proyecto ${project.name}`;
    image.loading = "lazy";
    image.decoding = "async";
    const caption = document.createElement("figcaption");
    caption.textContent = `Registro visual del proyecto ${project.name}.`;
    figure.append(image, caption);
    visual.replaceWith(figure);
  }

  const presentationImages = page.dataset.presentationImages
    ? page.dataset.presentationImages.split("|").filter(Boolean)
    : [];
  if (presentationImages.length) {
    const presentation = document.createElement("section");
    presentation.className = "project-presentation";
    presentation.setAttribute("aria-labelledby", "project-presentation-title");

    const heading = document.createElement("h2");
    heading.id = "project-presentation-title";
    heading.textContent = "Presentación del proyecto";

    const carousel = document.createElement("div");
    carousel.className = "project-slideshow";
    carousel.setAttribute("role", "region");
    carousel.setAttribute("aria-roledescription", "carrusel");
    carousel.setAttribute("aria-label", `Presentación visual de ${project.name}`);

    const viewport = document.createElement("div");
    viewport.className = "project-slideshow-viewport";
    viewport.tabIndex = 0;
    viewport.setAttribute("aria-label", "Diapositivas. Usa las flechas izquierda y derecha para cambiar de lámina.");

    const track = document.createElement("div");
    track.className = "project-slideshow-track";

    const slides = presentationImages.map((src, index) => {
      const slide = document.createElement("figure");
      slide.className = "project-slideshow-slide";
      slide.setAttribute("role", "group");
      slide.setAttribute("aria-roledescription", "diapositiva");
      slide.setAttribute("aria-label", `Lámina ${index + 1} de ${presentationImages.length}`);
      slide.setAttribute("aria-hidden", String(index !== 0));

      const image = document.createElement("img");
      image.src = src;
      image.alt = `Lámina ${index + 1} de ${presentationImages.length} de la presentación de ${project.name}`;
      image.loading = index === 0 ? "eager" : "lazy";
      image.decoding = "async";

      const caption = document.createElement("figcaption");
      caption.textContent = `PRESENTACIÓN ${project.name.toUpperCase()} · ${String(index + 1).padStart(2, "0")} / ${String(presentationImages.length).padStart(2, "0")}`;

      slide.append(image, caption);
      track.append(slide);
      return slide;
    });

    viewport.append(track);

    const controls = document.createElement("div");
    controls.className = "project-slideshow-controls";

    const previousButton = document.createElement("button");
    previousButton.className = "project-slideshow-control";
    previousButton.type = "button";
    previousButton.textContent = "← Anterior";
    previousButton.setAttribute("aria-label", "Ver lámina anterior");

    const status = document.createElement("p");
    status.className = "project-slideshow-status";
    status.setAttribute("aria-live", "polite");
    status.setAttribute("aria-atomic", "true");

    const nextButton = document.createElement("button");
    nextButton.className = "project-slideshow-control";
    nextButton.type = "button";
    nextButton.textContent = "Siguiente →";
    nextButton.setAttribute("aria-label", "Ver lámina siguiente");

    let activeSlide = 0;
    const currentSlide = () => activeSlide;

    const updateControls = () => {
      const index = currentSlide();
      status.textContent = `${String(index + 1).padStart(2, "0")} / ${String(presentationImages.length).padStart(2, "0")}`;
      previousButton.disabled = index === 0;
      nextButton.disabled = index === presentationImages.length - 1;
      slides.forEach((slide, slideIndex) => {
        slide.setAttribute("aria-hidden", String(slideIndex !== index));
      });
    };

    const syncCurrentSlide = () => {
      if (viewport.clientWidth) {
        activeSlide = Math.min(presentationImages.length - 1, Math.max(0, Math.round(viewport.scrollLeft / viewport.clientWidth)));
      }
      updateControls();
    };

    const goToSlide = (index) => {
      activeSlide = Math.min(presentationImages.length - 1, Math.max(0, index));
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      updateControls();
      viewport.scrollTo({ left: activeSlide * viewport.clientWidth, behavior });
    };

    previousButton.addEventListener("click", () => goToSlide(currentSlide() - 1));
    nextButton.addEventListener("click", () => goToSlide(currentSlide() + 1));
    viewport.addEventListener("scroll", () => window.requestAnimationFrame(syncCurrentSlide), { passive: true });
    viewport.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        goToSlide(currentSlide() + (event.key === "ArrowRight" ? 1 : -1));
      }
    });
    window.addEventListener("resize", () => {
      viewport.scrollLeft = activeSlide * viewport.clientWidth;
      updateControls();
    });
    updateControls();

    controls.append(previousButton, status, nextButton);
    carousel.append(viewport, controls);
    presentation.append(heading, carousel);

    const visualForPresentation = page.querySelector(".project-visual");
    if (visualForPresentation) {
      visualForPresentation.after(presentation);
    } else {
      page.append(presentation);
    }
  }

  const galleryImages = page.dataset.galleryImages
    ? page.dataset.galleryImages.split("|").filter(Boolean)
    : [];
  if (galleryImages.length) {
    const gallery = document.createElement("section");
    gallery.className = "project-gallery";

    const heading = document.createElement("h2");
    heading.textContent = "Imágenes del proyecto";
    const grid = document.createElement("div");
    grid.className = "project-gallery-grid";

    galleryImages.forEach((src, index) => {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = src;
      image.alt = `Imagen ${index + 1} de ${galleryImages.length} del proyecto ${project.name}`;
      image.loading = "lazy";
      image.decoding = "async";
      figure.append(image);
      grid.append(figure);
    });

    gallery.append(heading, grid);
    const projectVisual = page.querySelector(".project-visual");
    if (projectVisual) {
      const presentation = page.querySelector(".project-presentation");
      (presentation || projectVisual).after(gallery);
    } else {
      page.append(gallery);
    }
  }

});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    }
  });
}

const copyEmailButton = document.querySelector("[data-copy-email]");
const emailCopyStatus = document.querySelector("[data-email-status]");

if (copyEmailButton && emailCopyStatus) {
  copyEmailButton.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.email.trim();
    if (!email) {
      emailCopyStatus.textContent = "Añade tu correo en el atributo data-email antes de publicar.";
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      emailCopyStatus.textContent = `Correo copiado: ${email}`;
    } catch (error) {
      console.error("No se pudo copiar el correo.", error);
      emailCopyStatus.textContent = `No se pudo copiar. Puedes escribir a ${email}.`;
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
