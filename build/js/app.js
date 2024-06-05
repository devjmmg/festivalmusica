
document.addEventListener('DOMContentLoaded',function() {
    
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
    
});

function navegacionFija () {
    
    const header = document.querySelector(".header");
    const sobreFestival = document.querySelector(".sobre-festival");
    
    document.addEventListener("scroll", function () {
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add("fixed");
        }else {
            header.classList.remove("fixed");
        }
    });
    
}

function crearGaleria () {
    
    const CANTIDAD_IMAGENES = 16;
    
    const galeria = document.querySelector(".galeria-imagenes");
    
    for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        
        
        //Crear imagen
        const img = document.createElement("IMG");
        
        img.src = "src/img/gallery/full/" + i + ".jpg";
        img.alt = `Imagen ${i}`;
        img.style.cursor = "pointer";
        
        //Even Handler
        img.onclick = function () {
            mostrarImagen(i);
        }
        
        //li.appendChild(img);
        galeria.appendChild(img);
        
    }
    
}

function mostrarImagen (i) {
    
    //Crear imagen
    const img = document.createElement("IMG");
    
    img.src = "src/img/gallery/full/" + i + ".jpg";
    img.alt = `Imagen ${i}`;
    
    //Generar Modal
    
    const modal = document.createElement("DIV");
    modal.classList.add("modal");
    modal.onclick = cerrarModal;
    
    //Botón cerrar modal
    const cerrarModalBtn = document.createElement("BUTTON");
    cerrarModalBtn.textContent = "X";
    cerrarModalBtn.classList.add("btn-cerrar");
    
    cerrarModalBtn.onclick = cerrarModal
    
    modal.appendChild(img);
    modal.appendChild(cerrarModalBtn);
    
    //Agregar al HTML
    const body = document.querySelector("body");
    body.classList.add("overflow-hidden");
    body.appendChild(modal)
    
}

function cerrarModal() {
    
    const modal = document.querySelector(".modal");
    modal.classList.add("fade-out");
    
    
    
    // if(modal) {
    //     modal.remove();
    // }
    
    setTimeout ( () => {
        
        const body = document.querySelector("body");
        body.classList.remove("overflow-hidden");
        
        modal?.remove();
    }, 500 );
    
}

function resaltarEnlace() {
    
    document.addEventListener("scroll",function () {
        
        const sections = document.querySelectorAll("section");
        const links = document.querySelectorAll(".navegacion-principal a");
        
        let actual = "";
        sections.forEach( (section) => {
            const top = section.offsetTop;
            const altura = section.clientHeight;
            if(window.scrollY >= (top - altura / 3) ) {
                actual = section.id;
            }
        });
        
        links.forEach( (link) => {
            link.classList.remove("active");

            if(link.getAttribute("href") === "#"+actual) {
                link.classList.add("active");
            }

        } );
        
    });
    
}

function scrollNav() {
    const links = document.querySelectorAll(".navegacion-principal a");

    links.forEach( (link) => {

        link.addEventListener("click", e => {

            e.preventDefault();

            const scroll = e.target.getAttribute("href");

            const section = document.querySelector(scroll);

            section.scrollIntoView({behavior: "smooth"})

        });

    } )

}