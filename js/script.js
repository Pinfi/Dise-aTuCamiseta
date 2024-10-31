
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
    let textoTitulo = tituloCamiseta.value;
    if (textoTitulo.length > 10) {
        alert('El titulo no puede tener mas de 10 caracteres')
    } else {
        texto.innerHTML = tituloCamiseta.value;
    }
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


//Tomamos los campos donde modificaremos la camiseta con el dibujo
let imagenCamiseta = document.getElementById('imagenCamiseta');
let imagenEspejo = document.getElementById('imagenEspejo')
let nombreEstampado = document.getElementById('nombreEstampado');

//Funcion que cambia la imagen central, la superior en modo espejo y ademas pone el nombre del personaje en la parte inferior
camisetaDibujo.addEventListener('drop', (event) => {
    event.preventDefault();

    imagenCamiseta.src = event.dataTransfer.getData('text/plain');
    imagenCamiseta.alt = event.dataTransfer.getData('alt');

    imagenEspejo.src = event.dataTransfer.getData('text/plain');
    imagenEspejo.alt = event.dataTransfer.getData('alt');

    nombreEstampado.textContent = event.dataTransfer.getData('alt');
});

//Este metodo hace posible que podamos soltar el elemento en la zona (Si se quita no permite hacer el drop)
camisetaDibujo.addEventListener('dragover', (event) => {
    event.preventDefault();
});

//Tomamos todos los elementos de la galeria que seran los arrastrables
let elegirDibujo = document.getElementById('ElegirDibujo');
let arrayImagen = elegirDibujo.querySelectorAll('img');

arrayImagen.forEach(img => {
    img.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.src)
        event.dataTransfer.setData('alt', event.target.alt)
    });
});


//Tomamos el contenedor total y creamos dos elementos que seran la caja que se mueva y suene al pulsarla
let container = document.getElementById('container');
let casillaEstrella = document.createElement('div');
let moneda = document.createElement('div');

//Añadimos los elementos creados en el contenedor y le ponemos la clase que queramos
casillaEstrella.setAttribute('class', 'cuadradoEstrella');
casillaEstrella.setAttribute('draggable', 'false');
container.append(casillaEstrella,moneda)

//Evento que se ejecuta al pulsar en la caja con la interrogacion
casillaEstrella.addEventListener('click',casillaSalto)

//Creamos el sonido
let sonido = new Audio('../mp3/mario-coin.mp3');

//Funcion que mueve la caja y hace que suene
function casillaSalto() {

    casillaEstrella.setAttribute('class','saltoCasilla')
    moneda.setAttribute('class','moneda');
    setTimeout(() => {
        casillaEstrella.setAttribute('class','cuadradoEstrella');
        moneda.removeAttribute('class')
    }, 200);

    sonido.play();
}


