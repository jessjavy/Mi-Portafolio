const nav = document.querySelector(".nav");
const sections = document.querySelectorAll("section");

const opcionActiva = (entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            const id = entrada.target.id;
            const spy = nav.querySelector(`[href="#${id}"]`);

            const enlaceAnterior = nav.querySelector(".activo");
            if (enlaceAnterior) {
                enlaceAnterior.classList.remove("activo");
            }

            if (spy) {
                spy.classList.add("activo");
            }
        }
    });
};

const observador = new IntersectionObserver(opcionActiva, {
    threshold: 0,
    rootMargin: "-50% 0px -50% 0px",
    root: null,
});

sections.forEach((section) => {
    observador.observe(section);
});