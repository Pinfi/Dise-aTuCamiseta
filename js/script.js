
//Tomamos la camiseta entera
let cuadroCamiseta = document.getElementById('divCamiseta');

//Selector Color de la camiseta
let selectorColorCamisetaNegra = document.getElementById('colorCamisetaNegra');
let selectorColorCamisetaBlanca = document.getElementById('colorCamisetaBlanca');

//Tomamos el titulo
let tituloCamiseta = document.getElementById('tituloTexto');
let texto = document.getElementById('texto');

//Tomamos los rangos para la posicion
let horizontal = document.getElementById('horizontal');
let vertical = document.getElementById('vertical');

//Tomamos el cuadro donde va la imagen
let camisetaDibujo = document.getElementById('camisetaDibujo');


//Evento que en el click cambia el color de la camiseta
selectorColorCamisetaNegra.addEventListener('click', cambiarCamiseta);
selectorColorCamisetaBlanca.addEventListener('click', cambiarCamiseta);




//Funcion que cambia la caiseta de fondo
function cambiarCamiseta(event) {
    if (event.target.id == 'colorCamisetaNegra') {
        cuadroCamiseta.removeAttribute('class');
        cuadroCamiseta.setAttribute('class', 'divCamisetaNegra');
    } else {
        cuadroCamiseta.removeAttribute('class');
        cuadroCamiseta.setAttribute('class', 'divCamisetaBlanca');
    }
}

//Evento que escribe el titulo
tituloCamiseta.oninput = ponerTitulo;

//Funcion que pone el titulo en la camiseta
function ponerTitulo() {
    texto.innerHTML = tituloCamiseta.value;
}

//Evento que mueve el titulo
horizontal.addEventListener('input', moverTitulo);
vertical.addEventListener('input', moverTitulo);

//Funcion que mueve las letras del titulo
function moverTitulo() {

    let valorHorizontal = horizontal.value;
    let valorVertical = vertical.value;

    texto.style.transform = `translate(${valorHorizontal}px,${valorVertical}px)`;
}



let imagenCamiseta = document.getElementById('imagenCamiseta');
let imagenEspejo = document.getElementById('imagenEspejo')
let nombreEstampado = document.getElementById('nombreEstampado');
camisetaDibujo.addEventListener('drop', (event) => {
    event.preventDefault();

    imagenCamiseta.src = event.dataTransfer.getData('text/plain');
    imagenCamiseta.alt = event.dataTransfer.getData('alt');

    imagenEspejo.src = event.dataTransfer.getData('text/plain');
    imagenEspejo.alt = event.dataTransfer.getData('alt');

    nombreEstampado.textContent = event.dataTransfer.getData('alt');
});

camisetaDibujo.addEventListener('dragover', (event) => {
    event.preventDefault();
});


let bowser = document.getElementById('bowser');
let luigi = document.getElementById('luigi');
let mario = document.getElementById('mario');
let peach = document.getElementById('peach');
let yoshi = document.getElementById('yoshi');
let toad = document.getElementById('toad');


bowser.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.src)
    event.dataTransfer.setData('alt', event.target.alt)
});
luigi.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.src)
    event.dataTransfer.setData('alt', event.target.alt)
});
mario.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.src)
    event.dataTransfer.setData('alt', event.target.alt)
});
peach.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.src)
    event.dataTransfer.setData('alt', event.target.alt)
});
yoshi.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.src)
    event.dataTransfer.setData('alt', event.target.alt)
});
toad.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.src)
    event.dataTransfer.setData('alt', event.target.alt)
});








