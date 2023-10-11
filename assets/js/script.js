// Con el queySelector llamo los 2 eventos que necesito (Pantalla y Botones).
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");
// EL forEach para que recorra todo lo que pase en el boton.
botones.forEach(boton => {
    // El addEventListener se usa para reconocer todo lo que pase en los botones.
    boton.addEventListener("click", () => {

        // Se crea una constante botonOn para generar lo que sucede en pantalla.
        const botonOn = boton.textContent;

        // De esta manera se limpia todo el contenido en la pantalla y devuelve un 0 para que no quede vacia.
        if (boton.id === "limpiar") {
            pantalla.textContent = "0";
            return;
        }

        // De esta manera se limpia todo el contenido número por número y si ya no hay mas números, devuelve un 0 para que no quede vacia.
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1) {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1)
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent); 
            } catch {
                pantalla.textContent = "¡Error!"
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!") {
            pantalla.textContent = botonOn;
        } else {
            pantalla.textContent += botonOn;
        }

        if (pantalla.textContent === "//" && pantalla.textContent.slice(0, 9)) {
            pantalla.textContent = "¡Error!";
            return;
        }

        // pantalla.textContent = botonOn; Muestra los botones seleccionados en la pantalla.
        // console.log(boton.textContent);
    })
})